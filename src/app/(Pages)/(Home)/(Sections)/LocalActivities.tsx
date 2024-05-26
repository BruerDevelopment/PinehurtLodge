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
        <h1 className="heading">Plenty of Local Activities</h1>
        <CardWrapper>
          <div className="Card">
            
          </div>
          <div className="Card">

          </div>
          <div className="Card">

          </div>
          <div className="Card">

          </div>
        </CardWrapper>
      </AlternateSection>
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
    height: 100px;
    background-color: var(--theme-color-1);
  }

`