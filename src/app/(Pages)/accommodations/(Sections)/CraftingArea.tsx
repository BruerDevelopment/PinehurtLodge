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

export default () => {
  return (
    <>
      <AlternateSection>
        <h1 className="heading" id="Scrapbooking">Scrapbooking / Crafting Setup & Work Areas</h1>
        
        <TwoColumns>
          <div className="centerImages">
            <PosterboardImages>
              <img id="image1" src="#" />
              <img id="image2" src="#" />
              <img id="image6" src="#" />
              <img id="image4" src="#" />
              <img id="image5" src="#" />
              <img id="image3" src="#" />
            </PosterboardImages>
          </div>
          <div>
            <h2>Plenty of Work Surfaces</h2>
            <p>
              We have foldable resin tables that can be set up before your stay on request, but are always available and their location is detailed in the welcome package.
            </p>
            <p>
              In addition to the 6 (3’x6’) tables, you’ll find a collection of 6 desk lamps with magnifying lenses to make scrapbooking & crafting with precision easier! 6 padded folding chairs and 6 waste bins round out the work station.
            </p>
          </div>
        </TwoColumns>
        <MoreLink>
          <Link href="#">View More Of the Crafting Setup <br /> In Our Photos Gallery</Link>
        </MoreLink>
      </AlternateSection>
    </>
  );
}

const MoreLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    background-color: var(--theme-color-3);
    border-radius: 6px;
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 30px;
    text-align: center;
  }
`
const P = styled.p`
  width: 90%;
  max-width: 900px;
  box-sizing: border-box;
  padding: 20px;
`
const PosterboardImages = styled.div`
  position: relative;
  padding: 0px;
  box-sizing: unset;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  img {
    flex: 0.5;
    aspect-ratio: 3 / 2;
    --width: calc(50% - 10px);
    width: var(--width);
    min-width: var(--width);
    max-width: var(--width);
  }

  @media screen and (min-width: 940px) {
    img {
      --width: auto;
      position: absolute;
    }
    #image1 {
      top: 0px;
      left: 5px;
      width: 150px;
      background-color: red;
    }
    #image2 {
      top: 10px;
      right: 5px;
      width: 150px;
      background-color: blue;
    }
    #image3 {
      top: 80px;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      background-color: #ffd606;
    }
    
    #image4 {
      bottom: 10px;
      left: 5px;
      width: 150px;
      background-color: red;
    }
    #image5 {
      bottom: -25px;
      right: -25px;
      width: 200px;
      background-color: blue;
    }
    #image6 {
      bottom: -140px;
      left: calc(50% - 35px);
      transform: translateX(-50%);
      width: 200px;
      background-color: #ffd606;
    }
  }
  @media screen and (min-width: 1090px) {
    img {
      --width: auto;
      position: absolute;
    }
    #image1 {
      top: 0px;
      left: 5px;
      width: 200px;
      background-color: red;
    }
    #image2 {
      top: 10px;
      right: 5px;
      width: 150px;
      background-color: blue;
    }
    #image3 {
      top: 80px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      background-color: #ffd606;
    }
    
    #image4 {
      bottom: -120px;
      left: 5px;
      width: 200px;
      background-color: red;
    }
    #image5 {
      bottom: -150px;
      right: -25px;
      width: 240px;
      background-color: blue;
    }
    #image6 {
      bottom: -260px;
      left: calc(50% + 10px);
      transform: translateX(-50%);
      width: 200px;
      background-color: #ffd606;
    }
  }
`
const Spacer = styled.div`
  height: 20px;
  @media screen and (max-width: ${() => responsiveMobileWidth}) {
    & {
      height: 40px;
    }
  }
`
const TwoColumns = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  &[data-reverse="true"] {
    flex-direction: row-reverse;
  }
  margin-bottom: 125px;
  @media screen and (max-width: 940px) {
    &, &[data-reverse="true"] {
      margin-bottom: 0px;
    }
  }
  @media screen and (min-width: 1090px) {
    &, &[data-reverse="true"] {
      margin-bottom: 250px;
    }
  }
  @media screen and (max-width: ${()=>responsiveMobileWidth}) {
    &, &[data-reverse="true"] {
      margin-bottom: 0px;
      flex-direction: column-reverse;
    }
  }
  div {
    display: flex;
  }
  img {
    flex: 1;
    aspect-ratio: 3 / 2;
  }
  h3 {
    margin: 0px;
  }
  h2 {
    margin: 0px;
    &.centerHeading {
      text-align: center;
    }
  }
  & > div {
    padding: 20px;
    box-sizing: border-box;
    flex: 1;
    flex-direction: column;
    gap: 20px;
    &.centerImages {
      justify-content: center;
    }
    & > div {
      gap: 20px;
    }
  }
`


