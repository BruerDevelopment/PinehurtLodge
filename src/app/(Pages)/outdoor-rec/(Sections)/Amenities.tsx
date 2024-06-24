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
import { isMobile, isNotMobile } from "../../../../../styles/GlobalStyles";
import { Section } from "../../../../../styles/Section";

export default () => {
  
  return (
    <>
      <Section varient={2}>
        <h1 className="section-heading">Amazing Amenities For All Kinds of Outdoor Recreation</h1>
        <IntroArea>
          <img src="/HousePhotos/downstairs_deck/hot_tub1.jpg"></img>
          <div id="text">
            <h3>
              7-Person Hot Tub!
            </h3>
            <p>
              A relaxing soak after gnarly day on the slopes or out in the forest. Sit back and enjoy a spacious Arctic Spas tub with strong massaging jets and a double ozonating purification system.
            </p>
              
          </div>
        </IntroArea>
        <IntroArea data-direction="reverse">
          <img src="/HousePhotos/craft_area/craft_10.jpg"></img>
          <div id="text">
            <h3>
              Pool Table and Game Room
            </h3>
            <p>
              The perfect place to hang out after a relaxing soak in the hot tub. Enjoy a pool table, a Google smart TV and a wide variety of tabletop board games, all within close proximity to the kitchen for snacks and refreshments, and the lower deck offering beautiful views, fresh mountain air and access to the large back yard.
            </p>
              
          </div>
        </IntroArea>
        <MoreLink href="/accommodations#Activities">View All Accommodations & Amenities</MoreLink>
      </Section>
    </>
  );
}

const MoreLink = styled(Link)`
  background-color: var(--theme-color-3);
  text-decoration: none;
  color: white;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  margin-top: 50px;
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
  ${isMobile(css`
    &, &[data-direction="reverse"] {
      flex-direction: column;
      align-items: center;
    }
  `)}
  
  --adjust-height: 300px;
  --adjust-width: 400px;
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
    ${isNotMobile(css`
      justify-content: center;
    `)}
    ${isMobile(css`
      min-height: 150px;
    `)}
    min-height: var(--adjust-height);

    h3 {
      font-size: 21px;
      color: var(--heading-color);
      margin-top: 0px;
      text-align: center;
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