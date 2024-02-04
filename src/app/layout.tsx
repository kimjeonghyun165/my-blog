import { theme } from "@/components/common/dropDown/themeBtn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "게으른 공대생의 노트",
  description: "꿈은 없고요, 그냥 누워서 지내고 싶습니다.",
  openGraph: {
    images: [{ url: "/images/og-image.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={theme}>
      <Analytics />
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
