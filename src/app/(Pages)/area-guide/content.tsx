"use client";

import Link from "next/link";
import { Section } from "../../../../styles/Section";
import styled, { css } from "styled-components";
import { isMobile, isNotMobile } from "../../../../styles/GlobalStyles";
import { ArticleMeta } from "@/hooks/getArticlesData";
import { AUTHORS } from "@/data/area_guide/articles/authors";

const highlighted = [
    "guides/rollinsville",
    "5_best_rollinsville",
    "5_best_hikes_rollinsville",
]
export default (props: { articles: ArticleMeta[] }) => {
    const articles = props.articles;
    const highlightedArticles = articles.slice(0, articles.length).filter(a => highlighted.includes(a.id)).sort((a, b)=>highlighted.indexOf(a.id) - highlighted.indexOf(b.id))
    const articleList = articles.sort((a, b) => b.date.getTime() - a.date.getTime()).filter(a=>a.unlisted != true)
    return (
        <>
            <Section varient={1} hasPadding={false}>
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
                <HighlistedCards>
                    <h1>Highlighted</h1>
                    <div className="row">
                        {highlightedArticles.map(article => {
                            const read_time = article.read_time || "5 minute"
                            const date_str = article.date.toLocaleDateString('en-us', { year: "numeric", month: "long", day: "2-digit" });
                            const author_key = article.author;
                            let author_data = AUTHORS[author_key];
                            if (author_data == undefined) {
                                author_data = AUTHORS["PinehurstLodge"];
                            }
                            const author = author_data.name
                            return (
                                <a key={`${article.id}`} href={`/area-guide/articles/${article.id}`}>
                                    <img src={article.cover}></img>
                                    <div>
                                        <h2>{article.title}</h2>
                                        <h3>{article.subtitle != undefined ? `${article.subtitle}`:""}</h3>
                                        <div>
                                            <span>{date_str} • {read_time} read</span>
                                            <span><span style={{ "fontWeight": "bold" }}>By</span> {author}</span>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </HighlistedCards>    
                <ArticleCardList>
                    <h1>All Articles</h1>
                    <div className="list">
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
                                    <div>
                                        <img id="articleCover" src={article.cover}></img>
                                        <div id="text">
                                            <h2>{article.title}</h2>
                                            <h3>{article.subtitle != undefined ? `${article.subtitle}`:""}</h3>
                                            <div id="stats">
                                                <span>{date_str} • {read_time} read</span>
                                                <span><span style={{ "fontWeight": "bold" }}>By</span> {author}</span>
                                            </div>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                    <p id="mobile-desc">{description}</p>
                                </a>
                            )
                        })}
                    </div>
                </ArticleCardList>
            </Section>
        </>
    );
}

const Splash = styled.div`
    margin-top: 60px;
    margin-bottom: 60px;
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${isMobile(css`
        align-items: center;
        justify-content: end;
        margin-bottom: 30px;
        height: 40vh;
    `)}
    h1 {
        font-size: 48px;
        color: white;
        text-shadow: var(--theme-text-shadow);
        ${isMobile(css`
            font-size: 35px;
            text-align: center;
        `)}
    }
    h2 {
        font-size: 20px;
        color: white;
        max-width: 80%;
        ${isMobile(css`
            text-align: center;
            font-size: 14px;
        `)}
    }
    .button-line {
        display: flex;
        width: 100%;
        gap: 20px;
        padding: 20px 0px;
        ${isMobile(css`
            justify-content: center;
        `)}

        a {
            padding: 5px 20px;
            background-color: var(--theme-color-3);
            border-radius: 6px;
            cursor: pointer;
            ${isMobile(css`
                font-size: 12px;
            `)}
        }
    }
`

const ArticleCardList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    .list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        border-top: 1px solid black;
        padding: 20px 0px;
        #mobile-desc {
            display: none;
            ${isMobile(css`
                display: flex;
            `)}
        }
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
            & > div {
                display: flex;
                gap: 20px;
                align-items: center;
                width: 100%;
            }
            #articleCover {
                object-fit: cover;
                ${isNotMobile(css`
                    min-width: 30%;
                    max-width: 30%;
                `)}
                aspect-ratio: 3 / 2;
                ${isMobile(css`
                    width: 160px;
                `)}
            }
            div#text {
                flex: 1;
                display: flex;
                flex-direction: column;
                padding-right: 20px;
                
                h2 {
                    font-size: 23px;
                    ${isMobile(css`
                        font-size: 18px;
                    `)}
                }
                h3 {
                    font-size: 19px;
                    ${isMobile(css`
                        font-size: 14px;
                    `)}
                }
                p {
                    ${isMobile(css`
                        display: none;
                    `)} 
                }
            }
            div#stats {
                display: flex;
                justify-content: space-between;
                color: #cfcfcf;
                ${isMobile(css`
                    margin-top: auto;
                    font-size: 12px;
                    flex-direction: column;
                `)}
            }
        }
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
        justify-content: space-between;
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