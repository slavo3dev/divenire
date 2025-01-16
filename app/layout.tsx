import type { Metadata } from "next";
import {  Montserrat, Lato } from "next/font/google";
import "./globals.css";


const montserratLight = Montserrat( {
    variable: "--font-montserrat",
    weight: "200",
    subsets: ["latin"],
})

const latoThin = Lato({
    variable: "--font-lato",
    weight: "100",
    subsets: ["latin"],
} );

export const metadata: Metadata = {
  title: "Create Short Video using - Divenir.io",
  description: "Generated new short videos that will educate your audience and increase your brand awareness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratLight.variable} ${latoThin.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
