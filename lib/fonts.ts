import { Inter } from "next/font/google";

// Inter auto-hospedada pelo next/font, exposta como a variável CSS --font-inter
// (usada por --font-sans em globals.css).
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
