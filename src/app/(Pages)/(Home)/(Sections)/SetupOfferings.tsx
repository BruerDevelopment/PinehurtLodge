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
import { Section } from "../../../../../styles/Section";
import { isMobile } from "../../../../../styles/GlobalStyles";
import ExportedImage from "next-image-export-optimizer";
import OutdoorRec from "@/components/SettupOfferings/OutdoorRec";
import ScrapbookingRetreat from "@/components/SettupOfferings/ScrapbookingRetreat";
import CozySkiCabin from "@/components/SettupOfferings/CozySkiCabin";

export default () => {
  return (
    <>
      <Section varient={1}>
        <h1 className="section-heading">View Other Experiences This Rental Offers</h1>
        <IntroArea data-coloralternate="1" data-direction="reverse">
          <OutdoorRec />
        </IntroArea>
        <Spacer aria-hidden="true"></Spacer>
        <IntroArea data-coloralternate="1" >
          <ScrapbookingRetreat />
        </IntroArea>
        <Spacer aria-hidden="true"></Spacer>
        <IntroArea data-coloralternate="1" data-direction="reverse">
          <CozySkiCabin />
        </IntroArea>
      </Section>
    </>
  );
}
const Title = styled.h1`
  &.section-heading {
    font-size: 21px !important;
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
    --adjust-height: auto;
    --adjust-width: 100%;
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
        width: 320px;
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

