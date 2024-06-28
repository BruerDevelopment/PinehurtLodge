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
import SetupOfferings from "./(Sections)/SetupOfferings";
import Amenities from "./(Sections)/Amenities";
import LocalActivities from "./(Sections)/LocalActivities";
import OutdoorExploration from "./(Sections)/OutdoorExploration";
import CraftingArea from "./(Sections)/CraftingArea";
import { isMobile } from "../../../../styles/GlobalStyles";
import { Section } from "../../../../styles/Section";

export default () => {
  return (
    <>
      <Section varient={2} maxSize={1200}>
        <h1 className="section-heading">The Pinehurst Lodge ~ Cozy Ski Cabin</h1>
        <h2 className="section-subheading">
        This cozy getaway is ideal for skiers, snowboarders, snowshoers and groups of friends and family.
        </h2>
        <IntroArea>
          <img src="/HousePhotos/downstairs_deck/hot_tub1.jpg"></img>
          <div id="text">
            <h3 className="section-heading">
            Surrounded by the beautiful Front Range of the Rocky Mountains, with easy access to several of Colorado’s finest ski areas,
            lies the Pinehurst Lodge. 
            </h3>
            <p>
              The Pinehurst Lodge is your perfect mountain getaway, easily accessible to both Denver and the slopes! High up in the
              Front Range, but only a 1/4 mile off the Peak to Peak Scenic Byway, this mountain retreat is within driving distance
              to numerous mountain adventures. Eldora Mountain is a mere 8.7 miles and offers downhill skiing & snowboarding as
              well as over 40k of cross country trails. Winter Park, Breckenridge, Keystone,  Copper Mountain & Arapahoe Basin
              are all within driving distance too!
            </p>
            <p>
              Then return after a day in the mountains to soak in the hot tub, relax and enjoy time with friends and family.
            </p>
  
          </div>
        </IntroArea>
      </Section>
      <OutdoorExploration />
      <Amenities />
      <LocalActivities />
      <SetupOfferings />
      
    </>
  );
}


const IntroArea = styled.div`
  max-width: 1200px;
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
    flex-direction: column;
    align-items: center;
    
  `)}
  
  --adjust-height: 400px;
  --adjust-width: 530px;
  @media screen and (max-width: 1070px) {
      & {
        --adjust-width: 353px;
        --adjust-height: 266px;
      } 
    }
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
  ul {
    margin: 0px;
  }
  #text {
    display: flex;
    flex-direction: column;
    min-height: var(--adjust-height);

    h3 {
      font-size: 21px;
      color: var(--heading-color);
      margin-top: 0px;
      text-align: left;
    }
    p {
      margin-top: 20px;
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

