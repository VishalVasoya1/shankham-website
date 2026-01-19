#!/usr/bin/env bash
set -euo pipefail

# ===== helpers =====
timestamp() { date '+%Y-%m-%d %H:%M:%S'; }
log()  { printf '%s [INFO] %s\n' "$(timestamp)" "$*"; }
warn() { printf '%s [WARN] %s\n' "$(timestamp)" "$*"; }
err()  { printf '%s [ERROR] %s\n' "$(timestamp)" "$*"; }

# ===== Config from environment (required from CI) =====
IMAGE_NAME="${IMAGE_NAME}"
VERSION="${VERSION}"
CONTAINER_NAME="${CONTAINER_NAME}"
APP_NETWORK_NAME="${APP_NETWORK_NAME:-phonewin-app}"
APP_SUBNET="${APP_SUBNET:-}"      # optional e.g. "10.1.0.0/24"
APP_GATEWAY="${APP_GATEWAY:-}"    # optional e.g. "10.1.0.1"
CONTAINER_PORT="${CONTAINER_PORT}"  # required, host:container e.g. 4007:4007
FULL_IMAGE="${IMAGE_NAME}:${VERSION}"
NO_CACHE="${NO_CACHE:-true}"
FOLLOW_LOGS=false
if [[ "${1:-}" == "--follow-logs" ]]; then FOLLOW_LOGS=true; fi

log "Deploy config: FULL_IMAGE=${FULL_IMAGE}, CONTAINER_NAME=${CONTAINER_NAME}, APP_NETWORK_NAME=${APP_NETWORK_NAME}, CONTAINER_PORT=${CONTAINER_PORT}"
[[ -n "$APP_SUBNET" ]] && log "  APP_SUBNET=${APP_SUBNET}, APP_GATEWAY=${APP_GATEWAY}"

# ===== sanity =====
if ! command -v docker >/dev/null 2>&1; then
  err "docker CLI not found"
  exit 1
fi

# stop & remove existing container (if any)
if docker ps -a --format '{{.Names}}' | grep -Eq "^${CONTAINER_NAME}\$"; then
  log "Stopping and removing existing container: ${CONTAINER_NAME}"
  docker stop "${CONTAINER_NAME}" || true
  docker rm -f "${CONTAINER_NAME}" || true
fi

# remove old image tag if present (optional)
if docker images --format '{{.Repository}}:{{.Tag}}' | grep -q "^${FULL_IMAGE}\$"; then
  log "Removing old image: ${FULL_IMAGE}"
  docker rmi "${FULL_IMAGE}" || true
fi

# ===== Build image =====
if docker image inspect "${FULL_IMAGE}" >/dev/null 2>&1 && [[ "${NO_CACHE}" != "true" ]]; then
  log "Image ${FULL_IMAGE} already present (skipping rebuild). Set NO_CACHE=true to force rebuild."
else
  log "Building Docker image: ${FULL_IMAGE}"
  if [[ "${NO_CACHE}" == "true" ]]; then
    docker build --no-cache -t "${FULL_IMAGE}" .
  else
    docker build -t "${FULL_IMAGE}" .
  fi
fi

# ===== Ensure app network exists =====
if docker network inspect "${APP_NETWORK_NAME}" >/dev/null 2>&1; then
  log "Network ${APP_NETWORK_NAME} already exists"
else
  if [[ -n "$APP_SUBNET" && -n "$APP_GATEWAY" ]]; then
    log "Creating network ${APP_NETWORK_NAME} with subnet ${APP_SUBNET} gateway ${APP_GATEWAY}"
    docker network create --driver bridge --subnet "${APP_SUBNET}" --gateway "${APP_GATEWAY}" "${APP_NETWORK_NAME}"
  else
    log "Creating network ${APP_NETWORK_NAME} (no custom subnet provided)"
    docker network create --driver bridge "${APP_NETWORK_NAME}"
  fi
fi

# run: map host 0.0.0.0:${CONTAINER_PORT} -> container:4006
log "Running container ${CONTAINER_NAME}: ${CONTAINER_PORT}"
docker run -d \
  --name "${CONTAINER_NAME}" \
  --network "${APP_NETWORK_NAME}" \
  -p "${CONTAINER_PORT}:${CONTAINER_PORT}" \
  --restart unless-stopped \
  "${FULL_IMAGE}"

log "Container started: ${CONTAINER_NAME}"
docker inspect -f '{{json .NetworkSettings.Networks}}' "${CONTAINER_NAME}" || true
log "To follow logs: docker logs -f ${CONTAINER_NAME}"
log "To exec into container: docker exec -it ${CONTAINER_NAME} sh"

if [[ "${FOLLOW_LOGS}" == "true" ]]; then
  docker logs -f "${CONTAINER_NAME}"
fi