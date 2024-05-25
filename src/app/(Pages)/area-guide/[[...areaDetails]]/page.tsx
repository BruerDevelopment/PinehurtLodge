import Head from "next/head";
import Image from "next/image";
import Content from "./content";
import { Metadata, ResolvingMetadata } from "next";
import { geo_data } from "./(Map)/GeoData";
import { BuildPageMeta } from "@/app/metaDefaults";

type Props = {
  params: { areaDetails: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}
export const generateMetadata = async (
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  let title = "Local Area Guide - Pinehurst Lodge";
  
  if (params.areaDetails != undefined) {
    let pageDetails =  geo_data.features.filter((feature) => {
      return feature.properties.id.join("/") == params.areaDetails.join("/");
    })[0]
    if (pageDetails != undefined) {
      title = `${pageDetails.properties.name} - ${title}`
    }
  }
  return BuildPageMeta({
    title
  })
}

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