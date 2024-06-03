"use client";

import styled from "styled-components";
import DesktopClipart from "@/assets/DesktopClipart.svg"
import { CiServer } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { PageFooter, AlternateSection, Section, responsiveMobileWidth } from "@/app/globalStyles";
import Link from "next/link";
import SetupOfferings from "./(Sections)/SetupOfferings";
import Amenities from "./(Sections)/Amenities";
import LocalActivities from "./(Sections)/LocalActivities";
import OutdoorExploration from "./(Sections)/OutdoorExploration";
import CraftingArea from "./(Sections)/CraftingArea";

export default () => {
  return (
    <>
      <Section style={{ "paddingTop": "0px" }}>
        <h1 className="heading">The Pinehurst Lodge Scrapbooking Retreat</h1>
        <SubTitle>This cozy getaway is ideal for scrapbooking, quilting, crafting, sewing & gaming, or groups of friends and family.</SubTitle>
        <IntroArea>
          <img src="/HousePhotos/craft_area/craft_1.jpg"></img>
          <div id="text">
            <h3>
              Surrounded by the beautiful Rocky Mountains, enjoy the breathtaking view of the Continental Divide while you scrapbook, craft or sew with friends at the Pinehurst Scrapbooking Retreat.
            </h3>
            <p>
              Our setup includes 6 each:
              </p>
              <ul>
                <li>
                  3’x6’ folding resin table
                </li>
                <li>
                  -padded folding chair
                  
                </li>
                <li>
                  -waste bin

                </li>
                <li>
                  -magnifying ring craft light
                </li>
              </ul>

            <p>
              Our retreat features ultra amenities:
            </p>
              <ul>
                <li>
              -2 full kitchens
                  
                </li>
                <li>
              -2 laundries with washer & dryer

                </li>
                <li>
              -garage parking for two vehicles

                </li>
                <li>
              -many additional tables & work spaces

                </li>
              </ul>


  
          </div>
        </IntroArea>
      </Section>
      <CraftingArea />
      <Amenities />
      <LocalActivities />
      <SetupOfferings />
      
    </>
  );
}

const SubTitle = styled.h2`
  padding: 0px 2.5%;
  @media screen and (max-width: ${()=>responsiveMobileWidth}) {
    & {
      //width: 95%;
    }
  }
`

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
  @media screen and (max-width: ${()=>responsiveMobileWidth}) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }
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
    @media screen and (max-width: ${()=>responsiveMobileWidth}) {
      & {
        --adjust-width: 100%;
        --adjust-height: auto;
      } 
    }
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

