"use client";

import Head from "next/head";
import Image from "next/image";
import styled, { css } from "styled-components";
import { FaAngleDoubleDown } from "react-icons/fa";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";
import { isMobile } from "../../../../styles/GlobalStyles";
export default function Splash() {
  let isMobile = useIsMobile();
  return (
    <SplashWrap>
      {isMobile == false ? (
        <DesktopSplash>
          <img alt="Desktop Splash" src="/HousePhotos/craft_area/craft_21.jpg"/>
        </DesktopSplash>
      ): (
        <MobileSplash>
          <img alt="Mobile Splash" src="/HousePhotos/craft_area/craft_21.jpg"/>
        </MobileSplash>
      )}
      <Overlay>
        <div id="title">
          <h1>Pinehurst Lodge</h1>
          <span>Ideal For Your Next</span>
          <h2>Scrapbooking Retreat</h2>
          <Link href="https://www.airbnb.com/rooms/1043540721907281297">Book Your Next Retreat Now!</Link>
        </div>
        <div id="scrollIndicator">
          <h1>Explore</h1>
          <FaAngleDoubleDown />
        </div>
      </Overlay>
    </SplashWrap>
  );
}

const DesktopSplash = styled.div`
  img {
    background-image: url("/HousePhotos/craft_area/craft_21.jpg");
    &::before {
      color: transparent;
    }
    object-fit: cover;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;

  }
  img, svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 1040px) {
    img, svg {
      width: 100%;
    }
  }
  @media not screen and (min-width: 1040px) {
    img, svg {
      height: 100%;
    }
  }
  ${isMobile(css`
  display: none;
    
  `)}
  
`
const MobileSplash = styled.div`
  img {
    background-image: url("/HousePhotos/exterior/exterior_from_back_mobile_small.jpg");
    &::before {
      color: transparent;
    }
    object-fit: cover;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  display: none;
  img, svg {
    object-fit: cover;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
  }

  @media screen and (min-width: 355px) {
    img, svg {
      width: 100%;
    }
  }
  @media not screen and (min-width: 355px) {
    img, svg {
      height: 100%;
    }
  }
  ${isMobile(css`
    display: flex;
  `)}
`

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  #title {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    text-shadow: var(--theme-text-shadow);
    align-items: center;
    width: min(800px, 80%);
    ${isMobile(css`
      width: 90%;
      left: 50%;
      transform: translateX(-50%);
      justify-content: center;
      align-items: center;
    
    `)}
    
    h1 {
      margin: 0px;
      font-size: 80px;
      ${isMobile(css`
        font-size: 35px;
    
      `)}
      
    }
    h2 {
      font-size: 45px;
      margin-top: 0px;
      ${isMobile(css`
        font-size: 18px;
    
      `)}
      
    }
    span {
      margin-top: 24px;
      font-size: 20px;
      text-align: center;
    }
    a {
      background-color: var(--theme-color-5);
      text-decoration: none;
      color: white;
      padding: 10px;
      border-radius: 6px;
      text-shadow: none;
      font-size: 28px;
      width: fit-content;
      margin-top: 30px;
      ${isMobile(css`
        font-size: 18px;
    
      `)}
      
    }
  }
  #scrollIndicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation-iteration-count: infinite;
    position: absolute;
    bottom: 10px;
    left: 50%;
    animation-duration: 3s;
    animation-name: vertical-shaking;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    font-size: 17px;
    h1 {
      color: black;
      margin: 0px;
      text-shadow: 1px 1px 2px white;
      filter: drop-shadow(0px 0px 4px white);
    }

    @keyframes vertical-shaking {
        0% { transform: translateX(calc(-50% - 8px)) translateY(0) scale(1.2)}
        25% { transform: translateX(calc(-50% - 8px)) translateY(5px) scale(1.2)}
        50% { transform: translateX(calc(-50% - 8px)) translateY(-5px) scale(1.2)}
        75% { transform: translateX(calc(-50% - 8px)) translateY(5px) scale(1.2)}
        100% { transform: translateX(calc(-50% - 8px)) translateY(0) scale(1.2)}
      }
    svg {
      width: 50px;
      height: 50px;
      filter: drop-shadow(0px 0px 4px white);

    }
  }
`
const SplashWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 95vh;
  container-type: size;
  overflow: hidden;
  
`
