
  

import { Metadata, ResolvingMetadata } from "next";

import { BuildPageMeta } from "@/app/metaDefaults";
import { getPlacesContent, getPlacesData, getPlaceMeta } from "@/hooks/getPostData";
import dynamic from "next/dynamic";
import { Map } from "./map";
import { CONFIG } from "../../../../../site_config";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import LoadingCover from "./loading_cover";
type Props = {
    params: { article: string[] }
    searchParams: { [key: string]: string | string[] | undefined }
}
export const generateMetadata = async (
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> => {
    // read route params
    const { article } = params
    let meta = await getPlaceMeta(article)
    if (meta != undefined) 
        return BuildPageMeta({
            title: meta.title +" - Local Area Guide - Pinehurst Lodge",
            description: "",
            socialCover:`${CONFIG.BASE_URL}/area_guide_social_card.png`
        })
    return BuildPageMeta({
        title: "Local Area Guide - Pinehurst Lodge",
        description: "",
        socialCover:`${CONFIG.BASE_URL}/area_guide_social_card.png`
    })

}
export const generateStaticParams = async () => {
    let posts = await getPlacesData(undefined, {visibilityOverride:true});

    let params = posts.map((post) => ({
        article: post.id.split("/"),
    }))
    params.push({
        article:[""]
    })
    params.push({
        article:[]
    })
    return params;
}
export default async (props: { params: any }) => {
    const { article } = props.params
    const places = await getPlacesData();
    let FullPlaces = await Promise.all(places.map(async (p) => {
        let PostComp = await getPlacesContent(p.id.split("/"));
        return {
            ...p,
            PostComp:PostComp == undefined ? undefined : <PostComp />
        }
    }))
    

    return (
        <div>            
            <Map places={FullPlaces} selectedID={article} /> 
        </div>
    );
}
