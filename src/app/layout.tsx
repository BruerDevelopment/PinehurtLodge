import type { Metadata } from "next";

import StyledComponentsRegistry from './registry'
import { Body } from "./globalStyles";
import Head from "next/head";
import { DefaultMeta } from "./metaDefaults";
import { CONFIG as _CONFIG } from "../../site_config";
import MenuBar from "@/Components/MenuBar";
import { Suspense } from "react";
const CONFIG: any = _CONFIG;
export const metadata: Metadata = DefaultMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ "overflow": "hidden" }}>
      <head>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2a7e77" />
        <meta name="msapplication-TileColor" content="#f5d8aa" />
        <meta name="theme-color" content="#2a7e77" />


      </head>
      <StyledComponentsRegistry>
        <Body data-themeid="light">
          <Suspense>
            <MenuBar />
          </Suspense>
          {children}
          {CONFIG.google_as_id != undefined && (
            <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CONFIG.google_as_id}`}
            crossOrigin="anonymous"
            ></script>
          )}
        </Body>
      </StyledComponentsRegistry>
    </html>
  );
}

/*
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.0/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.7.0/dist/leaflet.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-ajax/2.1.0/leaflet.ajax.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/chroma-js/1.3.4/chroma.min.js"></script>
*/