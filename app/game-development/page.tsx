"use client";
import React from "react";
import { Gamepad2, CheckCircle, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { games } from "./gamesData";

export default function GameDevelopment() {
  const features = [
    "2D & 3D Game Development",
    "Cross-Platform Game Engines (Unity, Unreal)",
    "Multiplayer & Online Features",
    "Immersive Sound Design & Music",
    "Stunning Graphics & Animation",
    "Game Store Publishing",
    "Live Operations & Updates",
    "Monetization Strategy",
  ];

  const [currentGameIndex, setCurrentGameIndex] = React.useState(0);
  const [api, setApi] = React.useState<any>(null);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();
      let totalSlides = 0;
      let gameIndex = 0;

      for (let i = 0; i < games.length; i++) {
        const gameSlideCount =
          (games[i].video ? 1 : 0) + games[i].images.length;
        if (selectedIndex < totalSlides + gameSlideCount) {
          gameIndex = i;
          break;
        }
        totalSlides += gameSlideCount;
      }

      setCurrentGameIndex(gameIndex);
    });
  }, [api]);    

  const handleCTAClick = () => {
    console.log("CTA button clicked - start game project flow");
  };

  const currentGame = games[currentGameIndex];

  const allSlides = games.flatMap((game) => {
    const slides = [];

    if (game.video) {
      slides.push({ ...game, currentMedia: game.video, isVideo: true });
    }

    game.images.forEach((image) => {
      slides.push({ ...game, currentMedia: image, isVideo: false });
    });
    return slides;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative py-22">
          <div className="grid lg:grid-cols-2 gap-16 items-center ">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                  Game Development
                  <span className="block bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                    & Design
                  </span>
                </h1>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Create unforgettable gaming experiences that players love. We
                build engaging games for mobile, PC, and console platforms with
                stunning visuals and addictive gameplay.
              </p>

              <button
                onClick={handleCTAClick}
                className="px-7 py-3 bg-foreground text-background font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <img src="/game-development.png" alt="Game Development" />
            </div>
          </div>
        </div>
      </section>

      {/* Game Portfolio Carousel */}
      <section className="border-b bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground/5 rounded-full mb-6 border border-foreground/10">
              <Gamepad2 className="w-5 h-5 text-foreground" />
              <span className="text-sm font-semibold text-foreground tracking-wide">
                OUR PORTFOLIO
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Games We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of engaging games that players love
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {allSlides.length > 0 ? (
              <>
                {/* Main Carousel */}
                <div className="relative overflow-hidden rounded-3xl border-2 bg-gradient-to-br from-muted/50 to-muted/30 shadow-2xl">
                  <Carousel
                    setApi={setApi}
                    className="w-full"
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                  >
                    <CarouselContent>
                      {allSlides.map((item, index) => (
                        <CarouselItem key={index}>
                          <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] bg-gradient-to-br from-foreground/5 to-foreground/10">
                            <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6 lg:p-8">
                              {item.isVideo ? (
                                <video
                                  src={item.currentMedia}
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg sm:rounded-xl"
                                  style={{
                                    filter:
                                      "drop-shadow(0 25px 50px rgba(0,0,0,0.25))",
                                  }}
                                />
                              ) : (
                                <img
                                  src={item.currentMedia}
                                  alt={`${item.title} screenshot ${index + 1}`}
                                  className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg sm:rounded-xl"
                                  style={{
                                    filter:
                                      "drop-shadow(0 25px 50px rgba(0,0,0,0.25))",
                                  }}
                                />
                              )}
                            </div>

                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/10 pointer-events-none" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-1 sm:left-2 lg:left-6 h-8 w-8 sm:h-10 sm:w-10" />
                    <CarouselNext className="right-1 sm:right-2 lg:right-6 h-8 w-8 sm:h-10 sm:w-10" />
                  </Carousel>

                  {/* Game Info */}
                  <div className="relative bg-background/95 backdrop-blur-md border-t-2 p-4 sm:p-6 lg:p-10">
                    <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
                      <div className="space-y-3 sm:space-y-4 flex-1 min-w-[240px] sm:min-w-[280px]">
                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                            {currentGame.title}
                          </h3>
                          <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-foreground/10 text-foreground text-xs sm:text-sm font-semibold rounded-full border border-foreground/20">
                            {currentGame.category}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed text-center px-2">
                          {currentGame.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Game Selection Thumbnails */}
                <div className="mt-8 sm:mt-12 lg:mt-16 flex justify-center gap-3 sm:gap-4 lg:gap-6 flex-wrap px-2">
                  {games.map((game, index) => (
                    <button
                      key={game.id}
                      onClick={() => {
                        if (!api) return;
                        let startIndex = 0;
                        for (let i = 0; i < index; i++) {
                          startIndex +=
                            (games[i].video ? 1 : 0) + games[i].images.length;
                        }
                        api.scrollTo(startIndex);
                      }}
                      className={`group relative w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-28 rounded-xl sm:rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                        index === currentGameIndex
                          ? "border-foreground shadow-xl sm:shadow-2xl scale-105 ring-2 sm:ring-4 ring-foreground/10"
                          : "border-foreground/20 opacity-60 hover:opacity-100 hover:border-foreground/40 hover:scale-105 hover:shadow-lg sm:hover:shadow-xl"
                      }`}
                    >
                      {game.images.length > 0 ? (
                        <img
                          src={game.images[0]}
                          alt={game.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                          <Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8 text-foreground/30" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex flex-col items-center justify-end p-2 sm:p-3 lg:p-4 gap-0.5 sm:gap-1">
                        <span className="text-xs sm:text-sm lg:text-base font-bold text-foreground line-clamp-1 text-center w-full">
                          {game.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />
              </>
            ) : (
              <div className="text-center py-20 px-6 bg-muted/30 rounded-3xl border-2 border-dashed">
                <Gamepad2 className="w-20 h-20 text-muted-foreground/30 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Game Screenshots Coming Soon
                </h3>
                <p className="text-muted-foreground text-lg">
                  Add screenshots to the images array to showcase your games
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              What's Included
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create a successful game from concept to
              launch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative bg-background justify-center items-center border rounded-2xl p-6 hover:shadow-lg hover:border-foreground/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 ">
                  <div className="rounded-full bg-foreground/10 p-3 group-hover:bg-foreground/20 transition-colors shrink-0 mt-0.5">
                    <CheckCircle
                      className="w-5 h-5 text-foreground"
                      strokeWidth={2}
                    />
                  </div>
                  <span className="text-base font-medium leading-relaxed">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted via-muted/80 to-muted/60 p-12 lg:p-20 text-center border-2">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight">
              Ready to Build Your Game?
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's bring your game vision to life and create an experience that
              players will love. Get a free consultation and quote today.
            </p>

            <button
              onClick={handleCTAClick}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
            >
              Get Started Today
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Decorative blur elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-foreground/5 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
}
