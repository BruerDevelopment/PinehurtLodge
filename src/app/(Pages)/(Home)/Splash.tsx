"use client";

import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import LandingPage from "@/assets/LandingPage.svg";
import MobileLandingPage from "@/assets/MobileLandingPage.svg";
import { FaAngleDoubleDown } from "react-icons/fa";
import { responsiveMobileWidth } from "@/app/globalStyles";
export default function Splash() {
  return (
    <SplashWrap>
      <div className="Desktop"><LandingPage /></div>
      <div className="Mobile"><MobileLandingPage /></div>
      <Overlay>
        <div id="scrollIndicator">
          <h1>Explore</h1>
          <FaAngleDoubleDown />
        </div>
      </Overlay>
    </SplashWrap>
  );
}

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
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
  .Desktop {   
    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    @media screen and (min-width: 160vh) {
      svg {
        width: 100%;
      }
    }
    @media not screen and (min-width: 160vh) {
      svg {
        height: 100%;
      }
    }
    
  }
  .Mobile {
    display: none;
    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    @media screen and (min-width: 355px) {
      svg {
        width: 100%;
      }
    }
    @media not screen and (min-width: 355px) {
      svg {
        height: 100%;
      }
    }
  }
  @media screen and (max-width: ${()=>responsiveMobileWidth}) {
    .Desktop { 
      display: none;
    }
    .Mobile {
      display: flex;
    }
  }
  
`
