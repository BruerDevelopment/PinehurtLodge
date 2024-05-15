
import Head from "next/head";
import Image from "next/image";
import Content from "./content"
import { getPostData } from "@/hooks/getPostData";

export default async (props: { }) => {
    let posts = await getPostData();
    return <Content posts={posts} />
}