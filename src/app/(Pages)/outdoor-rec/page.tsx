import Head from "next/head";
import Image from "next/image";
import Splash from "./Splash";
import Content from "./content";
import { Metadata } from "next";

import { BuildPageMeta } from "@/app/metaDefaults";
export const generateMetadata = BuildPageMeta({
  title:"Outdoor Recreation Basecamp | Pinehurst Lodge",
  url:"/outdoor-rec"
})

export default function Home() {
  return (
    <div>
      <Splash></Splash>
      <Content></Content>
    </div>
  );
}