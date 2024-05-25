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
import Accommodations from "./(Sections)/Accommodations";
import LocalActivities from "./(Sections)/LocalActivities";
import OutdoorExploration from "./(Sections)/OutdoorExploration";

export default () => {
  return (
    <>
      <Section style={{ "paddingTop": "0px" }}>
        <h1 className="heading">Welcome to the Pinehurst Lodge</h1>
        <IntroArea>
          <img src="/HousePhotos/downstairs_living/downstairs_living_room_6.jpg"></img>
          <div id="text">
            <h3>Surrounded by the beautiful Rocky Mountains, 10 minutes from the historic town of Black Hawk, lies The Pinehurst Lodge. </h3>
            <p>In historic, quaint and tiny Rollinsville, Colorado sits Pinehurst Lodge. Easily accessible at just a 1/4 mile off the Peak to Peak Highway, the lodge has a deep-in-the-mountains feel, offering a breathtaking view of the Continental Divide in the Front Range. At 8900’, the lodge overlooks the valley and passing trains below and offers constantly changing scenery with the continual change of light and weather. Come adventure in the great Colorado outdoors and then refresh, renew and relax with plenty of space for friends and family at Pinehurst Lodge.</p>
          </div>
        </IntroArea>
      </Section>
      <SetupOfferings></SetupOfferings>
      <Accommodations />
      <LocalActivities />
      <OutdoorExploration />
      
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
      flex: 1;
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

