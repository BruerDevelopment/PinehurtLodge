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
        <IFrame src="/area-guide?hideNav"></IFrame>
      </Section>
    </>
  );
}

const Spacer = styled.div`
  height: 20px;
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
