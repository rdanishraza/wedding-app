import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danish Raza & Rubina Khatoon",
  description: "Wedding celebration of Danish Raza and Rubina Khatoon",
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
