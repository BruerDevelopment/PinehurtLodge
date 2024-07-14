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
import GoogleMap from "@/components/GoogleMap";

export default () => {
  return (
    <>
      <Section varient={1}>
        <h1 className="section-heading">Close to a Plethora of Colorado’s Finest Ski Resorts</h1>
        <ToolBar>
          <Link href="/area-guide" target="_blank">Expore The Full Guide<BsBoxArrowUpRight /></Link>
        </ToolBar>
        <GoogleMap _type="ski-mountains"/>
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

