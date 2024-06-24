"use client";

import styled, { css } from "styled-components";
import DesktopClipart from "@/assets/DesktopClipart.svg"
import { CiServer } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import Link from "next/link";
import { isMobile } from "../../../../../styles/GlobalStyles";
import { Section } from "../../../../../styles/Section";

export default () => {
  return (
    <>
      <Section varient={2}>
        <h1 className="section-heading">View Other Experiences This Rental Offers</h1>
        <IntroArea data-coloralternate="1" data-direction="reverse">
          <img src="/HousePhotos/craft_area/craft_6.jpg" loading="lazy"></img>
          <div id="text">
            <h3>Create Your Cozy Scrapbooking Retreat </h3>
            <p>Come scrapbookers, crafters, gamers & quilters! 6 tables (3’x6’), 6 padded chairs, 6 magnifying ring lamps & 6 waste bins offer optional creative and play spaces. Request the setup ahead of time and it will be ready for you. Alternately available to set up yourself if desired.</p>
            <div id="link"><Link href="/scrapbooking-retreat">Learn More</Link></div>
          </div>
        </IntroArea>
        <Spacer aria-hidden="true"></Spacer>
        <IntroArea data-coloralternate="1">
          <img src="/AreaAttractions/CO_skiing.webp" loading="lazy"></img>
          <div id="text">
            <h3>Cozy Ski Cabin </h3>
            <p>Pinehurst Lodge sits in the high country of Colorado’s Front Range at approximately 8900’, thus offering easy access to Colorado’s many ski areas including Winter Park, Breckenridge, Eldora, Arapahoe Basin, Keystone & Copper Mountain.</p>
            <div id="link"><Link href="/cozy-ski-cabin">Learn More</Link></div>
          </div>
        </IntroArea>
      </Section>
    </>
  );
}
const Title = styled.h1`
  &.section-heading {
    margin-bottom: 30px;
  }
`
const Spacer = styled.div`
  height: 20px;
  ${isMobile(css`
    height: 40px;
    
  `)}
  
`

const IntroArea = styled.div`
  max-width: 900px;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  align-items: flex-start;
  &[data-direction="reverse"] {
      flex-direction: row-reverse;
  }
  ${isMobile(css`
    &, &[data-direction="reverse"] {
      flex-direction: column;
      align-items: center;
    }
    
  `)}
  
  --adjust-height: 266px;
  --adjust-width: 353px;
  
  @media screen and (max-width: 820px) {
    & {
      --adjust-width: 265px;
      --adjust-height: 200px;
    } 
  }
  ${isMobile(css`
    --adjust-width: 100%;
    --adjust-height: auto;
    
  `)}
  img {
    border-radius: 6px;
    object-fit: cover;
    min-width: var(--adjust-width);
    width: var(--adjust-width);
    height: var(--adjust-height);
    
  }
  #text {
    display: flex;
    flex-direction: column;
    min-height: var(--adjust-height);
    justify-content: center;
    gap: 20px;

    h3 {
      text-align: center;
      font-size: 21px;
      color: var(--heading-color);
      margin-top: 0px;
    }
    p {
    }
    #link {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        background-color: var(--theme-color-3);
        text-decoration: none;
        color: white;
        padding: 10px;
        border-radius: 6px;
        width: 160px;
        text-align: center;
      }
    }
    @media screen and (max-width: 820px) {
      & > h3 {
        font-size: 16px !important;
      } 
      & > p {
        font-size: 14px !important;
      } 
    }
  }
`

