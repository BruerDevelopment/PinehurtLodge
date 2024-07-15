  

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
    if (meta != undefined) {
        let socialCover = `${CONFIG.BASE_URL}/social_covers/area_guide.png`;
        if (meta.cover != undefined) {
            socialCover =  meta.cover;
        }
        return BuildPageMeta({
            title: meta.title + (meta.subtitle != undefined ? `: ${meta.subtitle}` : "") +" | Local Area Guide | Pinehurst Lodge",
            description: meta.description,
            url:`/area-guide/articles/${article.join("/")}`,
            socialCover
        })(props, parent)
    }
    return BuildPageMeta({
        title: "Local Area Guide Article | Pinehurst Lodge",
        description: "",
        url:`/area-guide`,
        socialCover:`${CONFIG.BASE_URL}/social_covers/area_guide.png`
    })(props, parent)

}
export const generateStaticParams = async () => {
    let posts = await getArticlesData(undefined, {visibilityOverride:true});

    let params = posts.map((post) => ({
        article: post.id.split("/"),
    }))
    return params;
}
export default async (props: { params: any }) => {
    const { article } = props.params
    const ArticleMeta = await getArticleMeta(article);
    const ArticleContent = await getArticleContent(article);
    const articles = await getArticlesData();

    return (
        <div>            
            <Content articles={articles} meta={ArticleMeta}><ArticleContent/></Content>
        </div>
    );
}
