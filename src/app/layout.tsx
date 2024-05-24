import type { Metadata } from "next";

import StyledComponentsRegistry from './registry'
import { Body } from "./globalStyles";
import Head from "next/head";
import { DefaultMeta } from "./metaDefaults";
import { CONFIG as _CONFIG } from "../../site_config";
const CONFIG: any = _CONFIG;
export const metadata: Metadata = DefaultMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ "overflow": "hidden" }}>
      <StyledComponentsRegistry>
        <Body data-themeid="light">
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