"use client";

import { PostMeta } from "@/hooks/getPostData";
import Head from "next/head";
import Image from "next/image";
import { useParams } from "next/navigation";
import styled from "styled-components";

export default (props: { posts: PostMeta[] }) => {
    //return <div>other side</div>
    const params = useParams<{ article:string[] }>()
    let meta = props.posts.filter(p => p.id == params.article.join("/"))[0];
    if (meta == undefined)
        return (
            <NavigationSection>
                <a id="next" href={`/Deepdive/${props.posts[0].prevPost}`} className={"hidden"}>Previous Article</a>
                <a id="next" href={`/Deepdive/${props.posts[0].id}`} className={props.posts[0].id == undefined ? "hidden" : ""}>Next Article</a>
            </NavigationSection>
        );
    return (
        <NavigationSection>
            <a id="next" href={`/Deepdive/${meta.prevPost}`} className={meta.prevPost == undefined ? "hidden" : ""}>Previous Article</a>
            <a id="next" href={`/Deepdive/${meta.nextPost}`} className={meta.nextPost == undefined ? "hidden" : ""}>Next Article</a>
        </NavigationSection>
    );
}

const NavigationSection = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    padding: 20px;
    justify-content: space-between;
    a.hidden {
        opacity: 0;
        pointer-events: none;
    }
    & > a {
        padding: 10px;
        border-radius: 10px;
        background-color: black;
        color: white;
        text-decoration: none;
    }
    #next {
    }
`