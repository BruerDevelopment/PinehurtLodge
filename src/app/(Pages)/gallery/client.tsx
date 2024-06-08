"use client";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Section } from "../../../../styles/Section";
import { photo_group_data } from "./data";
import { isMobile, screenLessThan } from "../../../../styles/GlobalStyles";
 
export function ClientContent() {
    return (
        <>
            <main>
                <Section varient={2} >
                    <h1 className="section-heading">Pinehurst Lodge Photo Gallery</h1>
                </Section>
            </main>
            <Section varient={1} maxSize={1200} align="left">
                {Object.keys(photo_group_data).map(key => <PhotoCoursel key={ key} id={key} />)}
            </Section>
        </>
  )
}

function PhotoCoursel(props:{id:string}) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    let key = props.id;
    useEffect(() => {
        if (!api) {
          return
        }
     
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api])
    return (
        <PhotoList key={key}>
                        <h1 id={key}>{photo_group_data[key].heading}</h1>
                        <div id="CarouselWrapper">
                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                className=""
                                setApi={setApi}
                                >
                                <CarouselContent className="content">
                                    {photo_group_data[key].imgs.map((img, index) => (
                                        <CarouselItem key={index} className="">
                                            <Image src={img.src} />
                                        </CarouselItem>
                                ))}
                                </CarouselContent>
                                <CarouselPrevious className="prevButton"/>
                                <CarouselNext className="nextButton" />
                                <div className="scrollIndicator">
                                {Array.from({ length: count }).map((_, index) => (
                                    <span
                                        key={index}
                                        className={`indicator`}
                                        style={{
                                            "cursor":"pointer",
                                            "backgroundColor":index + 1 === current ? "var(--theme-color-3)" : "var(--theme-color-4)"
                                        }}
                                        onClick={() => api && api.scrollTo(index)}
                                    />
                                ))}
                                </div>
                            </Carousel>
                        </div>
                    </PhotoList>
    )
}

const PhotoList = styled.div`
    width: 100%;
    position: relative;
    
    #CarouselWrapper {
        padding: 0px 3rem ;
        margin-bottom: 50px;
        ${isMobile(css`
            padding: 0px 30px ;
            width: 100%;
        `)}
    }
    h1 {
        padding: 0px 3rem ;
        font-size: 21px;
        font-weight: bold;
        ${isMobile(css`
            text-align: center;
        `)}
    }
    .scrollIndicator {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
        display: flex;
        justify-content: center;
        gap: 10px;
        ${isMobile(css`
            gap: 5px;
            
        `)}
        .indicator {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            ${isMobile(css`
                width: 10px;
                height: 10px;
                
            `)}
        }
    }
    .content {
        align-items: center;
    }
    .prevButton {
        height: 100%;
        border-radius: 6px;
        left: 0;
        transform: translate(calc(-100% - 10px), -50%);
    }
    .nextButton {
        height: 100%;
        border-radius: 6px;
        right: 0;
        transform: translate(calc(100% + 10px), -50%);
    }
`
const Image = styled.img`
  height: 300px;
  
  ${screenLessThan(900, css`
  height: 250px;
  `)}
  ${isMobile(css`
  height: 200px;
  `)}
  
`