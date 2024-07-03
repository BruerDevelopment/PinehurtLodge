
import {CONFIG} from "@/../site_config"
import { Metadata, ResolvingMetadata } from "next";
import { headers } from "next/headers";
import path from "path";


export const openGraphMeta = {
    title: CONFIG.page_meta.title,
    description: CONFIG.page_meta.description,
    url: CONFIG.BASE_URL,
    images: [
        {
            url: `${CONFIG.BASE_URL}/SocialThumbnail.jpg`,
            width: 1200,
            height: 627
        }
    ]
};
export const DefaultMeta = {
    title: CONFIG.page_meta.title,
    description: CONFIG.page_meta.description,
    openGraph:openGraphMeta,
    icons: [
      { url:`${CONFIG.BASE_URL}/favicon.ico`, sizes:"any"}
    ]
};
const base_keywords = [
    "pinehurst lodge",
    "lodge",
    "retreat",
    "airbnb",
    "rental"
]
  
export const BuildPageMeta = (details: {
    title?: string,
    description?:string,
    url?: string,
    socialCover?:string,
    og_description?: string,
    keywords?:string[]
}): (props: any,parent: ResolvingMetadata)=>Metadata => {
    return (props: any, parent: ResolvingMetadata) => {
        let pathname = processPathname(props);
        const Title = details.title != undefined ? details.title : CONFIG.page_meta.title
        const Description = details.description != undefined
            ? details.description
            : CONFIG.page_meta.description;
        const url_link = CONFIG.BASE_URL + (details.url != undefined ? details.url : pathname)
        const socialCover = details.socialCover != undefined
            ? details.socialCover
            : `${CONFIG.BASE_URL}/social_covers/default.png`
        const og_description = details.og_description != undefined
            ? details.og_description
            : Description
        const _keywords: string[] = details.keywords != undefined
            ? details.keywords
            : [];
        const keywords = [..._keywords, ...base_keywords].slice(0, 10);
        return {
            ...DefaultMeta,
            metadataBase: new URL(CONFIG.BASE_URL),
            title: Title,
            description: Description,
            keywords,
            
            openGraph: {
                type:"website",
                title: Title,
                description: og_description,
                url: url_link,
                images: [
                    {
                        url: socialCover,
                        width: 1200,
                        height: 627
                    }
                ]
            },
        };
        
    }
}


function processPathname(props: any) {
    let { params } = props;
    var pathname = __dirname.split("(Pages)")?.[1]?.replaceAll("\\", "/");
    let fillPlaces = pathname.split("[[...").join("[...").split("[...").join("]").split("]").filter(a => a.trim() != "")
    let filledPath = pathname;
    for (let i = 0; i < fillPlaces.length; i++) {
        let key = fillPlaces[i];
        filledPath = filledPath.replaceAll(`[[...${key}]]`, params[key]?.join("/"))
        filledPath = filledPath.replaceAll(`[...${key}]`, params[key]?.join("/"))
    }
    console.log("Metadata props", params, fillPlaces, filledPath)
    return filledPath;
}