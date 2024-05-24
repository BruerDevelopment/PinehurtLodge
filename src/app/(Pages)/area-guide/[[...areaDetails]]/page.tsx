import Head from "next/head";
import Image from "next/image";
import Content from "./content";
import { Metadata } from "next";
import { geo_data } from "./(Map)/GeoData";

import { BuildPageMeta } from "@/app/metaDefaults";
export const metadata: Metadata = BuildPageMeta({
  title:"Pinehurst Lodge - Local Area Guide"
})

export function generateStaticParams() {
  let routes =  geo_data.features.map((feature) => {
    return {
      areaDetails: feature.properties.id
    }
  })
  routes.push({
    areaDetails: [""]
  })
  return routes;
}

export default function Home(props:{params:{areaDetails:string[]}}) {
  return (
    <div>
      <Content params={props.params}></Content>
    </div>
  );
}