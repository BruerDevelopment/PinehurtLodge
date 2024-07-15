import Head from "next/head";
import Image from "next/image";
import Splash from "./Splash";
import Content from "./content";
import { Metadata } from "next";

import { BuildPageMeta } from "@/app/metaDefaults";
import cleanHTMLString from "@/lib/cleanHTMLString";
import { CONFIG } from "../../../../site_config";
export const generateMetadata = BuildPageMeta({
  title: "Scrapbooking Retreat | Pinehurst Lodge",
  description:cleanHTMLString(`
    Pinehurst Lodge is a luxury, 4 bedroom scrapbooking retreat near Denver 
    with fabulous views of the Continental Divide from its hot tub and decks.  
  `),
  keywords: ["scrapbooking retreat", "scrapbooking retreat near denver"],
  url: "/scrapbooking-retreat",
  socialCover:`${CONFIG.BASE_URL}/social_covers/scrapbooking.png`
})

export default function Home() {
  return (
    <div>
      <Splash></Splash>
      <Content></Content>
    </div>
  );
}