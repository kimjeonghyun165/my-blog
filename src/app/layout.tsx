import { theme } from "@/components/common/dropDown/themeBtn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "대학생의 블로그",
  description: "대학생의 반도체/개발 스택 블로그",
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
