import Head from "next/head";
import Image from "next/image";
import Content from "./content";
import { Metadata } from "next";

import { BuildPageMeta } from "@/app/metaDefaults";
export const generateMetadata = BuildPageMeta({
  title:"Experiences | Pinehurst Lodge"
})

export default function Home() {
  return (
    <div>
      <Content></Content>
    </div>
  );
}