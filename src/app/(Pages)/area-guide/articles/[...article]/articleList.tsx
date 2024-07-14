import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { AUTHORS } from "@/data/area_guide/articles/authors"
import { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { isMobile, isNotMobile } from "../../../../../../styles/GlobalStyles"

export default (props:{articles:any[], title:string}) => {
    const [api, setApi] = useState<CarouselApi>()
    const articles = props.articles || []
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(articles.length)
    
    useEffect(() => {
        if (!api) {
        return
        }
    
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
    
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <HighlistedCards>
            <h1>{props.title}</h1>
            <StyledCarousel setApi={setApi}>
                <CarouselContent>
                    {articles.map((article, index) => {
                        const read_time = article.read_time || "5 minute"
                        const date_str = article.date.toLocaleDateString('en-us', { year: "numeric", month: "long", day: "2-digit" });
                        const author_key = article.author;
                        let author_data = AUTHORS[author_key];
                        if (author_data == undefined) {
                            author_data = AUTHORS["PinehurstLodge"];
                        }
                        const author = author_data.name
                        return (
                            <CarouselItem key={index}>
                                <a key={`${article.id}`} href={`/area-guide/articles/${article.id}`}>
                                    <img src={article.cover}></img>
                                    <div>
                                        <h2>{article.title}{article.subtitle != undefined ? `: ${article.subtitle}`:""}</h2>
                                        <div>
                                            <span>{date_str} • {read_time} read</span>
                                            <span><span style={{ "fontWeight": "bold" }}>By</span> {author}</span>
                                        </div>
                                    </div>
                                </a>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious className="prevButton"/>
                <CarouselNext className="nextButton" />
            </StyledCarousel>
        </HighlistedCards>   
    )
    
}

const StyledCarousel = styled(Carousel)`
    .prevButton {
        height: 100%;
        border-radius: 6px;
        left: 5px;
        transform: translate(calc(-100% - 10px), -50%);
        background-color: rgba(255, 255, 255, .25);
        border: 0px;
    }
    .nextButton {
        height: 100%;
        border-radius: 6px;
        right: 5px;
        transform: translate(calc(100% + 10px), -50%);
        background-color: rgba(255, 255, 255, .25);
        border: 0px;
    }
`

const HighlistedCards = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 0px;
    & > div {
        border-top: 1px solid black;
        display: flex;
        gap: 20px;
        width: 100%;
        padding: 20px 0px;
        justify-content: start;
        ${isMobile(css`
            /* align-items: center;
            flex-direction: column;  */
        `)}
        a {
            padding: 10px;
            display: flex;
            height: 350px;
            width: 280px;
            ${isMobile(css`
                //width: 100%;
            `)}
            border: 1px solid black;
            flex-direction: column; 
            ${isNotMobile(css`
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
                    /* min-width: 160px;
                    width: 160px; */
                `)}
            }
            & > div {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                ${isMobile(css`
                    //font-size: 12px;
                `)}
                & > div {
                    display: flex;
                    flex-direction: column; 
                    
                }
            }
        }
    }
`