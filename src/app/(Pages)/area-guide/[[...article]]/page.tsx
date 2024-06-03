
  

import { Metadata, ResolvingMetadata } from "next";

import { BuildPageMeta } from "@/app/metaDefaults";
import { getPlacesContent, getPlacesData, getPlaceMeta } from "@/hooks/getPostData";
import dynamic from "next/dynamic";
import { Map } from "./map";
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
    return BuildPageMeta({
        title: "",
        description: "",
        socialCover:""
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
