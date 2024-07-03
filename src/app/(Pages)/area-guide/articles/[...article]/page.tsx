  

import { Metadata, ResolvingMetadata } from "next";

import { BuildPageMeta } from "@/app/metaDefaults";
import { getArticleContent, getArticleMeta, getArticlesData} from "@/hooks/getArticlesData";
import dynamic from "next/dynamic";
import { CONFIG } from "../../../../../../site_config";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Section } from "../../../../../../styles/Section";
import Content from "./content";
type Props = {
    params: { article: string[] }
    searchParams: { [key: string]: string | string[] | undefined }
}
export const generateMetadata = async (
    props: Props,
    parent: ResolvingMetadata
): Promise<Metadata> => {
    const { params, searchParams } = props;
    // read route params
    const { article } = params
    let meta = await getArticleMeta(article)
    if (meta != undefined) 
        return BuildPageMeta({
            title: meta.title +" - Local Area Guide - Pinehurst Lodge",
            description: "",
            socialCover:`${CONFIG.BASE_URL}/social_covers/area_guide.png`
        })(props, parent)
    return BuildPageMeta({
        title: "Local Area Guide - Pinehurst Lodge",
        description: "",
        socialCover:`${CONFIG.BASE_URL}/social_covers/area_guide.png`
    })(props, parent)

}
export const generateStaticParams = async () => {
    let posts = await getArticlesData(undefined, {visibilityOverride:true});

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
    const ArticleContent = await getArticleContent(article);
    
    return (
        <div>            
            <Content ><ArticleContent/></Content>
        </div>
    );
}
