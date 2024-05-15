import Head from "next/head";
import Image from "next/image";
import Splash from "./Splash";
import Content from "./content";
import { Metadata } from "next";

import { BuildPageMeta } from "@/app/metaDefaults";
export const metadata: Metadata = BuildPageMeta({})

export default function Home() {
  return (
    <div>
      <Content></Content>
    </div>
  );
}