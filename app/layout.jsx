import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  // no explicit weights: loads the single variable font file instead of one file per weight
  display: "swap",
  variable: "--font-jetbrainsMono",
});

// Vercel sets VERCEL_PROJECT_PRODUCTION_URL at build time (custom domain if assigned, else *.vercel.app)
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://upeksha.me";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Upeksha Herath | Software Engineer",
  description:
    "Upeksha Herath - Software Engineer at Allion Technologies and University of Moratuwa IT graduate, building full-stack web, mobile and AI-powered products.",
  openGraph: {
    title: "Upeksha Herath | Software Engineer",
    description:
      "Software Engineer at Allion Technologies building full-stack web, mobile and AI-powered products.",
    images: ["/assets/photo4.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
