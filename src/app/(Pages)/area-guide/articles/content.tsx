"use client";

import { ArticleMeta } from "@/hooks/getArticlesData";
import { Section } from "../../../../../styles/Section";
import styled from "styled-components";


export default (props: { articles: ArticleMeta[] }) => {
    const articles = props.articles;
    return (
        <>
        
            <Section varient={2}>
                <H1 className="section-heading">Pinehurst Lodge</H1>
                <h2 className="section-subheading">Your local's guide to the wonderful area around the Pinehurst Lodge </h2>
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
const H1 = styled.h1`
    margin-bottom: 0px !important;
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