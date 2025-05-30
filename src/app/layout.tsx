import type { Metadata } from "next";
import { JetBrains_Mono, Oswald, Raleway } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrainsMono",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${jetbrainsMono.variable} ${oswald.variable} ${raleway.variable} antialiased bg-[#101010] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
