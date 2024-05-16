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
    <html lang="en" style={{"overflow":"hidden"}}>
      <StyledComponentsRegistry>
        <Body>
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
