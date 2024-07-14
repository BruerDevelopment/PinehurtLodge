import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "../../styles/GlobalStyles";
import { Suspense, useEffect, useState } from "react";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import { CONFIG } from "../../site_config";
import GAnalytics from "@/components/GAnalytics";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BuildPageMeta } from "./metaDefaults";
import { MDXProvider } from "@mdx-js/react";

export const generateMetadata = BuildPageMeta({})

export default function RootLayout({
  children,
  userAgent
}: Readonly<{
  children: React.ReactNode;
  userAgent:any
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link href='https://fonts.googleapis.com/css?family=PT Sans' rel='stylesheet' />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2a7e77" />
        <meta name="msapplication-TileColor" content="#f5d8aa" />
        <meta name="theme-color" content="#2a7e77" />
        
      </head>
      <body data-themeid="light">
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Suspense>
            <MenuBar />
          </Suspense>
          <TooltipProvider>
            {children}
          </TooltipProvider>
          <Footer />
          <GAnalytics />
          {CONFIG.google_as_id != undefined && (
            <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CONFIG.google_as_id}`}
            crossOrigin="anonymous"
            ></script>
          )}
          </StyledComponentsRegistry>
      </body>
    </html>
  );
}
