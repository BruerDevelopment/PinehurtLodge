"use client";

import styled from "styled-components";

export const responsiveMobileWidth = "769px"

export const Body = styled("body")`
    margin: 0px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    overflow: hidden;
    overflow-y: scroll;
`

export const Section = styled.div`
    position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 20px;
  margin-bottom: 100px;
  .heading {
    max-width: min(800px, 80%);
    text-align: center;
  }
  p {
    max-width: min(800px, 80%);
    text-align: center;
    font-size: 20px;
    margin: 5px 0px;
  }
`

export const PurpleSection = styled(Section)`
  background-color: #6E07F3;
  color: white;

  .heading {
    color: white;
  }
  p {
    color: white;
  }
`
export const PageFooter = styled(PurpleSection)`
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