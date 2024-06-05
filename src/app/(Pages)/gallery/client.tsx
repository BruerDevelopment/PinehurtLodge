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
    const [api, setApi] = useState<CarouselApi>()
    useEffect(() => {
        if (!api) {
          return
        }
     
      }, [api])
    return (
        <>
            <main>
                <Section varient={2} >
                    <h1 className="section-heading">Pinehurst Lodge Photo Gallery</h1>
                </Section>
            </main>
            <Section varient={1} maxSize={1200} align="left">
                {Object.keys(photo_group_data).map(key => (
                    <PhotoList>
                        <h1 id={key}>{photo_group_data[key].heading}</h1>
                        <div id="CarouselWrapper">
                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                className=""
                                setApi={setApi}
                                >
                                <CarouselContent>
                                    {photo_group_data[key].imgs.map((img, index) => (
                                        <CarouselItem key={index} className="">
                                            <Image src={img.src} />
                                        </CarouselItem>
                                ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </PhotoList>
                ))}
            </Section>
        </>
  )
}

const PhotoList = styled.div`
    position: relative;
    #CarouselWrapper {
        padding: 0px 3rem ;
    }
    h1 {
        padding: 0px 3rem ;
        font-size: 21px;
        font-weight: bold;
    }
`
const Image = styled.img`
  width: 400px;
  
  ${screenLessThan(900, css`
    width: 300px;
  `)}
  ${isMobile(css`
    width: 200px;
  `)}
  
`