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
import ExportedImage from "next-image-export-optimizer";

export default () => {
  return (
    <>
      <Section varient={2} maxSize={1200}>
        <h1 className="section-heading">The Pinehurst Lodge ~ Your Luxury Base Camp</h1>
        <h2 className="section-subheading">
          This cozy getaway is ideal for hikers, fishermen, rafters, mountain bikers and rock climbers 
          or groups of friends and family.
        </h2>
        <IntroArea>
          <ExportedImage
            src="/images/local_attractions/railroad/photo_0004.jpg"
            alt="Railroad and Train Photo"
            width={530}
            height={400}
            loading="lazy"
          />
          <div id="text">
            <h3>
              Surrounded by the beautiful Rocky Mountains, enjoy the breathtaking view of the Continental Divide while you relax, soak in the hot tub and plan the next days’ adventures!
            </h3>
            <p>
              Nestled in the cozy Front Range town of Rollinsville, Colorado, Pinehurst Lodge offers a mountain cabin not far off the beaten path. Access is easy, less than a 1/4 mile off the Peak to Peak Scenic Byway. Yet the neighbors are few and the breathtaking view is visible from both the interior and decks of the house.
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

