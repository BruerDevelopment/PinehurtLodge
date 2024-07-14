"use client";

import { ComponentType, ReactElement } from "react";
import { Section } from "../../../../../../styles/Section";
import styled, { css } from "styled-components";
import { isMobile, isNotMobile } from "../../../../../../styles/GlobalStyles";
import { AUTHORS } from "@/data/area_guide/articles/authors";
import { ArticleMeta } from "@/hooks/getArticlesData";
import ArticleAuthor from "@/components/ArticleAuthor";
import PromotionSection from "./promotion"
import ArticleList from "./articleList";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default (props: { articles?: ArticleMeta[], meta?: ArticleMeta, children?: ReactElement }) => {
    let Content = props.children;
    if (props.meta == undefined) return (
        <div></div>
    )
    const Meta = props.meta;
    let highlighted = Meta.related_articles || [];
    const articles = props.articles || []
    const articleList = articles.sort((a, b) => b.date.getTime() - a.date.getTime()).filter(a=>a.unlisted != true)

    let highlightedArticles = articles
        .slice(0, articles.length)
        .filter(a => highlighted.includes(a.id))
    if (Meta.related_articles != undefined) {
        let related = Meta.related_articles || [];
        highlightedArticles = highlightedArticles
            .sort((a, b) => related.indexOf(a.id) - related.indexOf(b.id))
    }
    

    return (
        <>
            <Section varient={2} fillSize={80}>
                <StylingDiv>
                    <a id="back" href="/area-guide"> <FaArrowAltCircleLeft />Back To Area Guide</a>
                    <h1 id="title">{ Meta.title}</h1>
                    {Meta.subtitle != undefined && <h2 id="subtitle">{Meta.subtitle}</h2>}
                    <ArticleAuthor {...Meta} />
                    {Content}
                </StylingDiv>
                
                {highlightedArticles.length > 0 && (
                    <ArticleList articles={highlightedArticles} title="Related Articles" />
                )}
                <ArticleList articles={articleList} title="Read Our Newest Articles"/>
                
                <PromotionSection {...Meta} />
            </Section>
        </>
    )
}




const StylingDiv = styled.div`
    margin-top: 80px;
    width: 100%;
    a#back {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 20px;
    }
    #title {
        font-size: 45px;
        ${isMobile(css`
            font-size: 30px;
        `)}
        
    }
    #subtitle {
        font-size: 30px;
        ${isMobile(css`
            font-size: 18px;
        `)}
    }
    h1 {
        font-size: 26px;
    }
    h2 {
        font-size: 20px;
        //margin-top: 20px;
    }
    p {
        margin-bottom: 20px;
    }
    li > p {
        margin-bottom: 0px;
    }
    a {
        font-weight: bold;
        cursor: pointer;
        
    }
    a.spaced {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    ul {
        padding-left: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    li > ul {
        gap: 10px;
    }

    .center {
        display: flex;
        gap: 20px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .spacer {
        margin-bottom: 20px;
    }
    .listicle-seperator {
        height: 50px;
    }
    strong {
        position: relative;
    }
    .youtube-embed {
        width: 560px;
        height: 315px;
        ${isMobile(css`
            width: 100%;
            height: auto;
            aspect-ratio: 3 / 2;
        `)}
    }
`

const HighlistedCards = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 0px;
    .row {
        border-top: 1px solid black;
        display: flex;
        gap: 20px;
        width: 100%;
        padding: 20px 0px;
        justify-content: start;
        ${isMobile(css`
            align-items: center;
            flex-direction: column; 
        `)}
        a {
            padding: 10px;
            display: flex;
            width: 300px;
            ${isMobile(css`
                width: 100%;
            `)}
            border: 1px solid black;
            ${isNotMobile(css`
                flex-direction: column; 
            `)}
            border-radius: 6px;
            background-color: var(--theme-color-5);
            color: white;
            gap: 10px;
            img {
                width: 100%;
                aspect-ratio: 3 / 2;
                object-fit: cover;
                ${isMobile(css`
                    min-width: 160px;
                    width: 160px;
                `)}
            }
            & > div {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                ${isMobile(css`
                    font-size: 12px;
                `)}
                & > div {
                    display: flex;
                    flex-direction: column; 
                    
                }
            }
        }
    }
`