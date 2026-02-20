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
        {/* 카카오톡 플로팅 버튼 */}
        <a
          href="http://pf.kakao.com/_ixhrxhxl/chat"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 9999,
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            cursor: 'pointer',
          }}
          aria-label="카카오톡 상담"
        >
          <img
            src="/카톡_원형_로고.png"
            alt="카카오톡 상담"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </a>
      </body>
    </html>
  );
}
