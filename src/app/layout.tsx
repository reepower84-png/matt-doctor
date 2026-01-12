import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "매트박사 - 전기매트 & 열선의류 전문 수리",
  description: "사지말고 고쳐쓰세요! 전기매트, 할리데이비슨 열선의류 공식 수리점 매트박사입니다.",
  keywords: "전기매트 수리, 열선의류 수리, 할리데이비슨, 매트박사, 전기장판 수리",
  openGraph: {
    title: "매트박사 - 전기매트 & 열선의류 전문 수리",
    description: "사지말고 고쳐쓰세요! 전기매트, 할리데이비슨 열선의류 공식 수리점",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
