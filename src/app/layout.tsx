import { theme } from "@/components/common/dropDown/themeBtn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    title: "게으른 공대생의 노트",
    description: "꿈은 없구요, 그냥 놀고싶습니다.",
    images:
      "https://post-phinf.pstatic.net/MjAyMTAzMDFfMzAw/MDAxNjE0NTc2OTU4MzM1.wk1uzUpKSr2p37pAU9CDUGZTEygyyiRq8sv22JRwnCgg.DcACc2bhwleN44O1s_R9htnARyUn4-D_c4QacNaqX2Eg.JPEG/IMG_0462.jpg?type=w800_q75",
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
