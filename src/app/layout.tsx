import { theme } from "@/components/common/dropDown/themeBtn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JH's Stack Blog",
  description: "대학생의 반도체/개발 스택 블로그",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={theme}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
