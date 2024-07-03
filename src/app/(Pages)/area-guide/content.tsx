"use client";

import Link from "next/link";
import { Section } from "../../../../styles/Section";
import styled, { css } from "styled-components";
import { isMobile } from "../../../../styles/GlobalStyles";
import { ArticleMeta } from "@/hooks/getArticlesData";


export default (props: { articles: ArticleMeta[] }) => {
    const articles = props.articles;
    return (
        <>
        <Section varient={1} >
            <Splash>
                    <h1>Pinehurst Lodge</h1> 
                    <h2>Your local's guide to the wonderful area around the Pinehurst Lodge </h2>
                    <div className="button-line">
                        <a href="/area-guide/articles">Start Reading</a>
                        <a href="/area-guide/map">Explore Our Interactive Map</a>
                    </div>
            </Splash>
        </Section>
        <Section varient={2}>
            <ArticleCard>
                {articles.map((article) => (
                    <a href={`/area-guide/articles/${article.id}`}>
                        <h2>{article.title}</h2>
                    </a>
                ))}
            </ArticleCard>
        </Section>
    </>
    );
}

const Splash = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        font-size: 48px;
        color: white;
        text-shadow: var(--theme-text-shadow);
        ${isMobile(css`
            font-size: 35px;
        `)}
    }
    .button-line {
        display: flex;
        width: 100%;
        gap: 20px;
        padding: 20px 0px;

        a {
            padding: 5px 20px;
            background-color: var(--theme-color-3);
            border-radius: 6px;
            cursor: pointer;
        }
    }
`

const ArticleCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    a {
        padding: 10px;
        display: flex;
        width: 100%;
        border: 1px solid black;
    }
`