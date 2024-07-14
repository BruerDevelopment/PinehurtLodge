"use client";

import { AUTHORS } from "@/data/area_guide/articles/authors";
import { ArticleMeta } from "@/hooks/getArticlesData";
import styled, { css } from "styled-components"
import { isMobile } from "../../../styles/GlobalStyles";
import { useEffect, useRef } from "react";

export default (props:{_type?:"outdoor-adventure"|"ski-mountains"|"just-the-lodge"|"default", fullPage?:boolean, fillContent?:boolean}) => {
    let ref = useRef<HTMLIFrameElement>(null);
    let map_code = "1W8_haV6m4aGU0hn1FLDX76kLtFaVAkE";
    if (props._type == "outdoor-adventure")
        map_code = "1hin9WtZGGbFjsptHi5xiB3NzNQGPHBw";
    if (props._type == "ski-mountains")
        map_code = "1j_ZyQa3kznLLEk4vTU6vyEtjC_tYjnc";
    if (props._type == "just-the-lodge")
        map_code = "1ySIpQCq4eaggooxDFPR2W4qjRa0zUfc";
    const url = `https://www.google.com/maps/d/embed?mid=${map_code}&hl=en&ehbc=2E312F&noprof=1`
    return (
        <FrameDiv $fillContent={props.fillContent} $fullPage={props.fullPage}><iframe 
            ref={ref}
            src={url}
            loading="lazy"
        /></FrameDiv>
        
    )
}

const FrameDiv = styled.div<{ $fillContent?: boolean, $fullPage?: boolean }>`
    overflow: clip;

    ${props => props.$fullPage == true ? css`
        width: 100%;
        height: 100vh;
    ` : props.$fillContent == true ? css`
        width: 100%;
        aspect-ratio: 3/2;
    ` : css`
        width: 90%;
        max-width: 900px;
        aspect-ratio: 3/2;
    `}
    
    ${isMobile(css`
        aspect-ratio: 3/4;
        
    `)}
    iframe {
      position: relative;
      top: -60px;
      width: 100%;
      height: calc(100% + 60px);
      
      
    }
  `