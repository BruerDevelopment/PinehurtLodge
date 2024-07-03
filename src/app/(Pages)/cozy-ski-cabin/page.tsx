import Head from "next/head";
import Image from "next/image";
import Splash from "./Splash";
import Content from "./content";
import { Metadata } from "next";

import { BuildPageMeta } from "@/app/metaDefaults";
export const generateMetadata = BuildPageMeta({
  title:"Cozy Ski Cabin",
  url:"/cozy-ski-cabin"
})

export default function Home() {
  return (
    <div>
      <Splash></Splash>
      <Content></Content>
    </div>
  );
}