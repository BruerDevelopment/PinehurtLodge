"use client";

import { ArticleMeta } from "@/hooks/getArticlesData";
import { Section } from "../../../../../styles/Section";
import styled, { css } from "styled-components";
import { AUTHORS } from "@/data/area_guide/articles/authors";
import { isMobile, isNotMobile } from "../../../../../styles/GlobalStyles";


export default (props: { articles: ArticleMeta[] }) => {
    const articles = props.articles;
    const articleList = articles.sort((a, b) => b.date.getTime() - a.date.getTime()).filter(a=>a.unlisted != true)

    return (
        <>
        
            <Section varient={2}>
                <H1 className="section-heading">Pinehurst Lodge</H1>
                <h2 className="section-subheading">Your local's guide to the wonderful area around the Pinehurst Lodge </h2>
                <ArticleCard>
                    {articleList.map((article) => {
                            const read_time = article.read_time || "5 minute"
                            const date_str = article.date.toLocaleDateString('en-us', { year: "numeric", month: "long", day: "2-digit" });
                            const author_key = article.author;
                            let author_data = AUTHORS[author_key];
                            if (author_data == undefined) {
                                author_data = AUTHORS["PinehurstLodge"];
                            }
                            const author = author_data.name
                            const description = article.description?.replaceAll("\n", "").replaceAll("\t", "").replaceAll("  ", "").replaceAll(". ", ".").replaceAll(".", ". ")
                            return (
                                <a key={`${article.id}`} href={`/area-guide/articles/${article.id}`}>
                                    <img id="articleCover" src={article.cover}></img>
                                    <div id="text">

                                        <h2>{article.title}{article.subtitle != undefined ? `: ${article.subtitle}`:""}</h2>
                                        <div id="stats">
                                            <span>{date_str} • {read_time} read</span>
                                            <span><span style={{ "fontWeight": "bold" }}>By</span> {author}</span>
                                        </div>
                                        <p>{description}</p>
                                    </div>
                                </a>
                            )
                        })}
                </ArticleCard>
            </Section>
        </>
    );
}
const H1 = styled.h1`
    margin-bottom: 0px !important;
`
const ArticleCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    border-top: 1px solid black;
    padding: 20px 0px;
    a {
        border-radius: 6px;
        padding: 10px;
        display: flex;
        width: 100%;
        
        border: 1px solid black;
        background-color: var(--theme-color-5);
        color: white;
        display: flex;
        gap: 20px;
        position: relative;
        ${isNotMobile(css`
            height: 220px;
        `)}
        ${isMobile(css`
            font-size: 16px;
            flex-direction: column;
            align-items: center;
        `)}
        #articleCover {
            object-fit: cover;
            ${isNotMobile(css`
                min-width: 30%;
                max-width: 30%;
            `)}
            aspect-ratio: 3 / 2;
            ${isMobile(css`
                width: 100%;
            `)}
        }
        div#text {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding-right: 20px;
            h2 {
                font-size: 23px;
            }
        }
        div#stats {
            display: flex;
            justify-content: space-between;
            color: #cfcfcf;
            ${isMobile(css`
                font-size: 12px;
            `)}
        }
    }
`