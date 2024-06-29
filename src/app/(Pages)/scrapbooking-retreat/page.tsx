import Head from "next/head";
import Image from "next/image";
import Splash from "./Splash";
import Content from "./content";
import { Metadata } from "next";

import { BuildPageMeta } from "@/app/metaDefaults";
import cleanHTMLString from "@/lib/cleanHTMLString";
export const metadata: Metadata = BuildPageMeta({
  title: "Scrapbooking Retreat - Pinehurst Lodge",
  description:cleanHTMLString(`
    Pinehurst Lodge is a luxury, 4 bedroom mountain scrapbooking retreat near Denver 
    with fabulous views of the Continental Divide from its hot tub, decks and living areas.  
  `),
  keywords:["Scrapbooking", "Retreat", "Scrapbooking Retreat"]
})

export default function Home() {
  return (
    <div>
      <Splash></Splash>
      <Content></Content>
    </div>
  );
}