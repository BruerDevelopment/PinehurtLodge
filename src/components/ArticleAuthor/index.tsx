"use client";

import { AUTHORS } from "@/data/area_guide/articles/authors";
import { ArticleMeta } from "@/hooks/getArticlesData";
import styled from "styled-components"

export default (props:ArticleMeta) => {
    const author_key = props.author;
    let author_data = AUTHORS[author_key];
    if (author_data == undefined) {
        author_data = AUTHORS["PinehurstLodge"];
    }
    const url = author_data.profile_link;
    const img_src = author_data.img
    const read_time = props.read_time || "5 minute"
    const date_str = props.date.toLocaleDateString('en-us', { year: "numeric", month: "long", day: "2-digit" });
    return (
        <AuthorWrapper href={url == undefined ? "#" : url} target={url == undefined ? "" : "_blank"}>
            <img src={img_src}></img>
            <div>
                <h3>{author_data.name}</h3>
                <p>{date_str} • {read_time} read</p>
            </div>
        </AuthorWrapper>
    )
}


const AuthorWrapper = styled.a`
    display: flex;
    flex-direction: row;
    padding: 20px 0px;
    gap: 20px;
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-shadow: 0px 5px 10px 0px black;
    }
    div {
        display: flex;
        flex-direction: column;
        h1 {
            color: black;
        }
    }
`