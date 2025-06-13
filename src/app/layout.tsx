import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomTheme from "@/themes/customTheme";
import "./globals.css";
import ReduxProvider from "@/app/components/auth/ReduxProvider";
import { cabinFont } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "ASSURE Helpline",
  description: "Aid, Support, ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="dicoding:email" content="paullmich28@gmail.com" />
      <body
        className={`${cabinFont.className} antialiased`}
      >
        <ReduxProvider>
          <CustomTheme>{children}</CustomTheme>
        </ReduxProvider>
      </body>
    </html>
  );
}
