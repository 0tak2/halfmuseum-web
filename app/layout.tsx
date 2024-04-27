import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "반물관 : 半物館",
  description: "물질문화 아카이브 - 반쪽자리 박물관, 반물관",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
