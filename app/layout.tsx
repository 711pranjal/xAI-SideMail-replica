import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sidemail Pricing page using Next.js (App Router) + TypeScript.",
  description: "Sidemail Pricing page using Next.js (App Router) + TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

