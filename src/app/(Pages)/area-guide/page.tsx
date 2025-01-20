import Head from "next/head";
import Image from "next/image";
import { Metadata } from "next";

import { BuildPageMeta } from "@/app/metaDefaults";
import Content from "./content";
import { getArticlesData } from "@/hooks/getArticlesData";
import { CONFIG } from "../../../../site_config";
export const generateMetadata = BuildPageMeta({
  title: "Rollinsville Local Area Guide | Pinehurst Lodge",
  url:"/area-guide",
  socialCover:`${CONFIG.BASE_URL}/social_covers/area_guide.png`,
  description:`
    Pinehurst Lodge is a luxury, 4 bedroom mountain retreat in Rollinsville just outside Denver 
    with views of the Continental Divide from its hot tub, decks and living areas.  
  `
})

export default async function Home() {
    const articles = await getArticlesData();

  return (
    <div>
          <Content articles={articles}></Content>
    </div>
  );
}