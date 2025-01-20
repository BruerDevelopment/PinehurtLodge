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
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Section } from "../../../../../styles/Section";
import { isMobile } from "../../../../../styles/GlobalStyles";
import ExportedImage from "next-image-export-optimizer";
import RockyMountainNationalPark from "@/components/LocalActivities/RockyMountainNationalPark";
import RedRocks from "@/components/LocalActivities/RedRocks";
import GoldDirt from "@/components/LocalActivities/GoldDirt";
import TossPizza from "@/components/LocalActivities/TossPizza";

export default () => {
  return (
    <>
      <Section varient={1} maxSize={1200}>
        <h1 className="section-heading">Plenty of Local Activities</h1>
        <CardWrapper>
        <div className="Card">
            <TwoColumns data-reverse="true">
              <RockyMountainNationalPark />
            </TwoColumns>
          </div>
          <div className="Card">
            <TwoColumns>
              <RedRocks />
            </TwoColumns>
          </div>
          <div className="Card">
            <TwoColumns data-reverse="true">
              <GoldDirt />
            </TwoColumns>
          </div>
          <div className="Card">
            <TwoColumns>
              <TossPizza />
            </TwoColumns>
          </div>
         
        </CardWrapper>
      </Section>
    </>
  );
}


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 900px;
  gap: 20px;
  
  .Card {
    border-radius: 10px;
    width: 100%;
    background-color: var(--theme-color-1);
    padding: 10px;
  }

`

const TwoColumns = styled.div`
  display: flex;
  flex-direction: row;
  &[data-reverse="true"] {
    flex-direction: row-reverse;
  }
  ${isMobile(css`
    &, &[data-reverse="true"] {
      flex-direction: column;
    }
  `)}
  img {
    width: 100px;
    aspect-ratio: 5 / 4;
  }
  div {
    flex: 1;
  }
`

const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;

  h3 {
    color: black;
    font-size: 20px;
    margin-bottom: 0px;
    text-align: center;
    
    ${isMobile(css`
      margin-top: 0px;
    `)}
  }
  p {
    color: black;
    font-size: 16px;
  }
  a {
    width: 80%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: var(--theme-color-3);
    text-decoration: none;
    margin: 10px 0px;
    gap: 10px;
    svg {
      width: 20px;
      height: 20px;
      color: white;
    }
    font-size: 15px;
    ${isMobile(css`
      font-size: 12px;
    `)}
  }
`
const TwoImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  gap: 10px;
  
  img {
    border-radius: 6px;
    flex: 1;
    object-fit: cover;
    width: 50%;
      
  }
`