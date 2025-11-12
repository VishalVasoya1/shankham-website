import { Satisfy } from "next/font/google";
import localFont from "next/font/local";

export const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: "400",
});

export const editorial_new = localFont({
  src: [
    {
      path: "../public/fonts/editorial-new-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/editorial-new-italic.otf",
      weight: "400",
      style: "italic", 
    },
    {
      path: "../public/fonts/editorial-new-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-editorial-new",
  display: "swap",
});
