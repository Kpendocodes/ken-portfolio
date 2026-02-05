import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenneth Oluoch — Portfolio",
  description: "Portfolio of Kenneth Oluoch (Computer Science Honours).",
  openGraph: {
    title: "Kenneth Oluoch — Portfolio",
    description: "Portfolio of Kenneth Oluoch (Computer Science Honours).",
    url: "https://kennetholuoch.vercel.app/#projects",
    siteName: "Kenneth Oluoch",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kenneth Oluoch portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenneth Oluoch — Portfolio",
    description: "Portfolio of Kenneth Oluoch (Computer Science Honours).",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
