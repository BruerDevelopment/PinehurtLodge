"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";
import styled, { IStyledComponent } from "styled-components";
import { FastOmit } from "styled-components/dist/types";

export const responsiveMobileWidth = "600px"

export const Body = styled("body")`
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

      --theme-text-shadow: 0px 4px 4px black;
    }
`

export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 20px;
  background-color: var(--theme-color-2);
  padding-top: 60px;
  padding-bottom: 60px;
  --heading-color: var(--theme-color-5);
  @media screen and (max-width: ${()=>responsiveMobileWidth}) {
    & {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  .heading {
    max-width: min(800px, 80%);
    text-align: center;
    color: var(--heading-color);
    scroll-margin-top: 100px;
  }

  p {
    font-size: 21px;
    margin: 5px 0px;
  }
`

export const AlternateSection = styled(Section)`
  background-color: var(--theme-color-5);
  color: white;
  --heading-color: white;
  .heading {
    color: var(--heading-color);
  }
  p {
    color: white;
  }
`
export const PageFooter = styled(AlternateSection)`
  margin-top: 50px;
  min-height: 200px;
  margin-bottom: 0px;
  
  #BlackDivider {
    
    transform: translateY(-50px);
    min-height: 50px;
    width: 90%;
    background-color: black;
    color: white;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    padding: 20px;
    flex-wrap: nowrap;
    h2 {
        font-size: 20px;
    }
    
    p {
        width: 100%;
        max-width: 400px;
    }
    a {
        color: white;
        border: 1px solid white;
        border-radius: 10px;
        padding: 10px;
        text-decoration: none;
        font-size: 20px;
    }
    @media screen and (max-width: ${() => responsiveMobileWidth}) {
        & {
            flex-wrap: wrap;
        }
        h2 {
            width: fit-content;
            font-size: 20px;
        }
        p {
            width:60%;
            font-size: 16px;
        }
    }
  }
`