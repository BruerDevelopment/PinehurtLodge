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
        <IFrame src="/area-guide?hideNav"></IFrame>
      </Section>
    </>
  );
}

const IFrame = styled("iframe")`
  width: 90%;
  max-width: 900px;
  aspect-ratio: 3/2;
  @media screen and (max-width: ${() => responsiveMobileWidth}) {
    aspect-ratio: 3/4;
  }
`
