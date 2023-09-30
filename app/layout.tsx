import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { ModeToggle } from "@/components/Theme/Toggle";
import Header from "@/components/Header/Header";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" overflow-hidden">
        <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Header />
            {children}
          </ThemeProvider>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}