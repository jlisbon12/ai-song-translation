/* eslint-disable @next/next/no-sync-scripts */
"use client";

import { Noto_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const queryClient = new QueryClient();
  return (
    <>
      <html lang="en">
        <body className={noto_sans.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <QueryClientProvider client={queryClient}>
              <SessionProvider>
                <RecoilRoot>{children}</RecoilRoot>
              </SessionProvider>
            </QueryClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
