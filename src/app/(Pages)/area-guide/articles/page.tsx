import Head from "next/head";
import Image from "next/image";
import Content from "./content";
import { Metadata } from "next";

import { BuildPageMeta } from "@/app/metaDefaults";
export const generateMetadata = BuildPageMeta({
  title: "Local Area Guide - Pinehurst Lodge",
  description:`
    Pinehurst Lodge is a luxury, 4 bedroom mountain retreat near Denver 
    with fabulous views of the Continental Divide from its hot tub, decks and living areas.  
  `.replaceAll("\n", "").replaceAll("\t", "").replaceAll("  ", "")
})

export default function Home() {
  return (
    <div>
      <Content></Content>
    </div>
  );
}