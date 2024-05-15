"use client";

import { PostMeta, getPostMeta } from "@/hooks/getPostData";
import { useParams } from "next/navigation";
import styled from "styled-components";

export default (props: { posts: PostMeta[] }) => {
    const params = useParams<{ article:string[] }>()
    let meta = props.posts.filter(p => p.id == params.article.join("/"))[0];
    let date = meta.date != undefined ? meta.date : new Date()
    let readTime = meta.readTime != undefined ? meta.readTime : "unknown"
    return (
        <AuthorSection>
            <div id="image">
                <div></div>
            </div>
            <div id="details">
                <h3>Keegan Bruer</h3>
                <div id="meta">
                  <span>{date.toLocaleString('default', { month: 'long', day:"2-digit", year:"numeric" })}</span>
                  <span>{readTime} read</span>
                </div>
            </div>
        </AuthorSection>
    )
}

const AuthorSection = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    gap: 10px;
    div#image {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        div {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-image: url("/authors/Keegan.jpg");
            background-position: center;
            background-size: cover;
        }
    }
    div#details {
        h3 {
            margin: 0px;
        }
        #meta {
            display: flex;
            justify-content: start;
            gap: 20px;
        }
    }
`