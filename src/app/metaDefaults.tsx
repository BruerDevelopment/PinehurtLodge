
import {CONFIG} from "@/../site_config"


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
  
export const BuildPageMeta = (details: {
    title?: string,
    description?:string,
    url?: string,
    socialCover?:string,
    og_description?:string,
}) => {
    const Title = details.title != undefined ? details.title : CONFIG.page_meta.title
    const Description = details.description != undefined
        ? details.description
        : CONFIG.page_meta.description;
    const url_link = CONFIG.BASE_URL + (details.url != undefined ? details.url : "/")
    const socialCover = details.socialCover != undefined ? details.socialCover : `${CONFIG.BASE_URL}/SocialThumbnail.jpg`
    const og_description = details.og_description != undefined ? details.og_description : Description
    return {
        ...DefaultMeta,
        metadataBase: new URL(CONFIG.BASE_URL),
        title: Title,
        description: Description,
        openGraph: {
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