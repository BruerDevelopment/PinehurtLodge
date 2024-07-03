import Head from "next/head";
import Image from "next/image";
import { Metadata } from "next";

import { BuildPageMeta } from "@/app/metaDefaults";
import Content from "./content";
import { getArticlesData } from "@/hooks/getArticlesData";
export const generateMetadata = BuildPageMeta({
  description:`
    Pinehurst Lodge is a luxury, 4 bedroom mountain retreat near Denver 
    with fabulous views of the Continental Divide from its hot tub, decks and living areas.  
  `.replaceAll("\n", "").replaceAll("\t", "").replaceAll("  ", "")
})

export default async function Home() {
    const articles = await getArticlesData();

  return (
    <div>
          <Content articles={articles}></Content>
    </div>
  );
}