"use client";

import React from "react";
import { icons } from "./first-icons";
import { second_icons } from "./second-icons";

const Companies: React.FC = () => {
  return (
    <section className="w-full overflow-hidden py-32 bg-background">
      <div className="max-w-[85rem] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-3">
            Trusted By Industry Leaders
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Powering Innovation
          </h2>
        </div>

        <div className="space-y-8">
          {/* First Marquee - Moving Left */}
          <div
            className="relative border-y bg-white shadow-sm pause-animation"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 pointer-events-none" />

            <div className="relative overflow-hidden py-5">
              <div
                className="flex items-center animate-scroll-left gap-16"
                style={{ width: "fit-content" }}
              >
                
                {icons.map((item, i) => (
                  <div
                    key={i}
                    className="group relative flex-shrink-0 flex flex-col items-center justify-center gap-4 px-8"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gray-200 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:border-gray-400 transition-all duration-500 group-hover:scale-110">
                        <item.Icon
                          strokeWidth={1.5}
                          width="45"
                          height="45"
                          className="text-gray-600 transition-all duration-500 grayscale group-hover:grayscale-0"
                        />
                      </div>

                      <div className="absolute -inset-4 border border-gray-300 rounded-3xl opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500" />
                    </div>

                    <span className="text-xs font-medium text-gray-500 group-hover:text-gray-900 tracking-wider uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Marquee - Moving Right */}
          <div
            className="relative border-y bg-white shadow-sm pause-animation"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 pointer-events-none" />

            <div className="relative overflow-hidden py-5">
              <div
                className="flex items-center animate-scroll-right gap-16"
                style={{ width: "fit-content" }}
              >
                {second_icons.map((item, i) => (
                  <div
                    key={i}
                    className="group relative flex-shrink-0 flex flex-col items-center justify-center gap-4 px-8"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gray-200 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:border-gray-400 transition-all duration-500 group-hover:scale-110">
                        <item.Icon
                          strokeWidth={1.5}
                          width="45"
                          height="45"
                          className="text-gray-600 transition-all duration-500 grayscale group-hover:grayscale-0"
                        />
                      </div>

                      <div className="absolute -inset-4 border border-gray-300 rounded-3xl opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500" />
                    </div>

                    <span className="text-xs font-medium text-gray-500 group-hover:text-gray-900 tracking-wider uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
