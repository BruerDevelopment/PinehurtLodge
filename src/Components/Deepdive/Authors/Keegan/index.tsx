import { getPostData, getPostMeta } from "@/hooks/getPostData";
import Content from "./content"

export default async (props: { }) => {
    let posts = await getPostData(undefined, {visibilityOverride:true});
    return <Content posts={posts} />

}