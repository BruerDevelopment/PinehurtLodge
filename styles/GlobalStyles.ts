"use client";

import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled, { FastOmit, Interpolation, createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'PT Sans';
    margin: 0px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    overflow: hidden;
    overflow-y: scroll;
    &[data-themeid="light"] {
      --theme-color-1: #DE9F4A;
      --theme-color-2: #F5D8AA;
      --theme-color-3: #CE5144;
      --theme-color-4: #233F4C;
      --theme-color-5: #2A7E77;
      --outline-size: 2px;
      --text-shadow: -5px 5px 4px black;
      --theme-text-shadow: 
        calc(-1 * var(--outline-size)) calc(-1 * var(--outline-size)) 0 #000, 
        var(--outline-size) calc(-1 * var(--outline-size)) 0 #000, 
        calc(-1 * var(--outline-size)) var(--outline-size) 0 #000, 
        var(--outline-size) var(--outline-size) 0 #000, 
        var(--text-shadow);
      //--theme-text-shadow: -2px 2px 0px black;
    }
    
  }
`;

export default GlobalStyles;

export function isMobile(...content: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>[]): Interpolation<object> { 
    return screenLessThan("mobile", content)
}
export function isNotMobile(...content: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>[]): Interpolation<object> { 
    return screenGreaterThan("mobile", content)
}


export function screenLessThan(size:"mobile"|number, ...content: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>[]): Interpolation<object> {
    let _size = `${size}px`;
    if (size == "mobile") {
        _size = "600px"
    }
    return `
    @media screen and (max-width: ${_size}) {
        & {
            ${content.join("")}
        }
    }
    `
}
export function screenGreaterThan(size:"mobile"|number, ...content: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>[]): Interpolation<object> {
    let _size = `${size}px`;
    if (size == "mobile") {
        _size = "600px"
    }
    return `
    @media screen and (min-width: ${_size}) {
        & {
            ${content.join("")}
        }
    }
    `
}
export function isBrowser(browser:"chrome", ...content: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>[]): Interpolation<object> {
    return `
    body[data-browser="${browser}"] & {
        ${content.join("")}
    }
    `
}
export function isNotBrowser(browser:"chrome", ...content: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>[]): Interpolation<object> {
    return `
    body[data-browser!="${browser}"] & {
        ${content.join("")}
    }
    `
}


export function matchProp(
    propName:string,
    varient: any,
    ...content: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>[]
    
):((props: any)=>Interpolation<object>)  {
    return (props: any) => {
        if (props[propName] != varient) return ``;
        return content
    }

}