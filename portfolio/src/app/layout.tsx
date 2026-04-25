import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethan Xing Portfolio",
  description: "Minimal single-page portfolio intro for Ethan Xing.",
  icons: {
    icon: "/8.jpg",
    shortcut: "/8.jpg",
    apple: "/8.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
