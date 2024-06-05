"use client";

import styled from "styled-components";
import DesktopClipart from "@/assets/DesktopClipart.svg"
import { CiServer } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import Link from "next/link";
import { Section } from "../../../../../styles/Section";

export default () => {
  return (
    <>
      <Section varient={2}>
        <Title className="section-heading">Crafting Area With Spacious Surfaces</Title>
        
      </Section>
    </>
  );
}
const Title = styled.h1`
  font-size: 21px;
`
