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
import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Section } from "../../../../styles/Section";
import { photo_group_data } from "./data";
import { isMobile, isNotMobile, screenLessThan } from "../../../../styles/GlobalStyles";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FastOmit, IStyledComponentBase } from "styled-components/dist/types";
 
export function ClientContent() {
    let [selectedPhoto, _setSelectedPhoto] = useState({ key: "", i: 0 });
    const [open, setOpen] = useState(false);
    const api = useState<CarouselApi>()

    const setSelectedPhoto = (data:any) => {
        setOpen(true);
        _setSelectedPhoto(data)
    }
    useEffect(() => {
        console.log("selectedPhoto", selectedPhoto)
    }, [selectedPhoto])
    return (
        <>
            <main>
                <Section varient={2} >
                    <h1 className="section-heading">Pinehurst Lodge Photo Gallery</h1>
                </Section>
            </main>
            <Section varient={1} maxSize={1200} align="left">
                {Object.keys(photo_group_data).map(key => <PhotoCoursel key={key} id={key} setSelectedPhoto={ setSelectedPhoto} />)}
            </Section>
            <Dialog open={open} onOpenChange={setOpen}>
                <StyledDialogContent>
                    <DialogHeader id="header">
                        <DialogTitle>{photo_group_data[selectedPhoto.key]?.heading || "Photos"}</DialogTitle>
                        <DialogDescription id="mobileMsg">To View More Slide Photos To The Left</DialogDescription>
                    </DialogHeader>
                    <FullGallary api={api} key={selectedPhoto.key} id={selectedPhoto.key} index={selectedPhoto.i} />
                </StyledDialogContent>
            </Dialog>
        </>
  )
}
const StyledDialogContent = styled(DialogContent)`
    width: 90%;
    max-height: 90%;
    max-width: 1000px;
    background-color: var(--theme-color-5);
    border: 0px;
    ${isMobile(css`
        width: 100%;
        max-width: 100%;
    `)}
    & > button {
        width: 30px;
        height: 30px;
        svg {
            width: 100%;
            height: 100%;
        }
    }
    #header {
        align-items: start;
    }
    #mobileMsg {
        color: white;
        ${isNotMobile(css`
            display: none;
        `)}
    }
    
    & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

function FullGallary(props: {
    api:[CarouselApi | undefined, Dispatch<SetStateAction<CarouselApi | undefined>>],
    id: string,
    index?: number,
}) {
    const [api, setApi] = props.api;
    const [current, setCurrent] = useState(props.index != undefined ? props.index : 0)
  const [count, setCount] = useState(props.index != undefined ? props.index : 0)
    useEffect(() => {
        if (!api) {
            return
        }
        if (props.index == undefined) return;
        api.scrollTo(props.index)
    }, [props])
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
    <div>
        <StyledCarousel setApi={setApi}>
        <CarouselContent>
            {photo_group_data[props.id].imgs.map((img, index) => (
                <CarouselItem key={index} style={{"flexBasis":"100%"}}>
                <Card className="Card">
                    <CardContent className="flex items-center justify-center" includepadding={""}>
                        <img className="image" src={img.src}/>
                    </CardContent>
                </Card>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="prevButton"/>
        <CarouselNext className="nextButton" />
      </StyledCarousel>
      <div className="py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </div>
    )
}

const StyledCarousel = styled(Carousel)`
    width: 90%;
    ${isMobile(css`
        width: 110%;
    `)}
    & .image {
        width: 100%;
        height: 100%;
        max-height: 90%;
        object-fit: contain;
    }
    .Card {
        background-color: var(--theme-color-5);
        border: 0px;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        & > div {
            aspect-ratio: 3 / 2;
            max-height: 70vh;
        }
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

function PhotoCoursel(props: {
    id: string,
    index?: number,
    useHeader?:boolean,
    setSelectedPhoto?: Dispatch<SetStateAction<{ key: string; i: number; }>>
}) {
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
            {props.useHeader != false &&
                <h2 id={key}>{photo_group_data[key].heading}</h2>
            }
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
                                <Image src={img.src} onClick={() => {
                                    props.setSelectedPhoto?.({
                                        key,
                                        i:index
                                    })
                                }}/>
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
    h1, h2 {
        scroll-margin-top: 100px;
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