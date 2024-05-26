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
import { BsBoxArrowUpRight } from "react-icons/bs";

export default () => {
  return (
    <>
      <Section>
        <h1 className="heading">Outdoor Exploration</h1>
        <Paragraph>
          Whether you're seeking outdoor adventures, cultural exploration, or culinary delights,
          our guide is your passport to discovering the hidden gems and cherished landmarks
          that make our area so special. Each recommendation in our guide has been handpicked
          to ensure you make the most of your stay. So, grab your map, lace up your hiking boots,
          and get ready to embark on a journey of discovery in the enchanting surroundings of Pinehurst Lodge.
        </Paragraph>
        <Spacer />
        <Paragraph>
          Click the different locations to explore! 
        </Paragraph>
        <Spacer />
        <ToolBar>

          <Link href="/area-guide" target="_blank">Expore The Full Guide<BsBoxArrowUpRight /></Link>
        </ToolBar>
        <IFrame src="/area-guide?hideNav"></IFrame>
      </Section>
    </>
  );
}

const Spacer = styled.div`
  height: 20px;
`
const ToolBar = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 90%;
  max-width: 900px;
  box-sizing: border-box;
  z-index: 10;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    background-color: var(--theme-color-4);
    padding: 5px 10px;
    gap: 5px;
    border-radius: 6px 6px 0px 0px;
  }
`

const Paragraph = styled.div`
  max-width: 900px;
  width: 90%;
`
const IFrame = styled("iframe")`
  width: 90%;
  max-width: 900px;
  aspect-ratio: 3/2;
  @media screen and (max-width: ${() => responsiveMobileWidth}) {
    aspect-ratio: 3/4;
  }
`
