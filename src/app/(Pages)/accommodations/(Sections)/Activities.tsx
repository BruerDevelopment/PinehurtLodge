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
        <h1 className="heading" id="Activities">Games & Activities at the Pinehurst Lodge</h1>
        <Content>
          <div id="images">
            <img alt="" src="#"/>
            <img alt="" src="#"/>
            <img alt="" src="#"/>
          </div>
          <div id="text">
            <h2 className="heading">Pool Table, 6-Person Hot Tub, Board-Games, and Two Smart TVs</h2>
            <p>
            Plenty of indoor activities for those rest days or if your just fully vegging.  Each of the two gathering space is equipped with a Smart TV where you can sign into all of your streaming services, perfect for movie nights or blasting music during a gaming session.
            </p>
            <p>
              Enjoy a large social Arctic Spas hot tub with a mountain view. Cleaned before every stay, with maintenance instructions and supplies detailed in the welcome package.
            </p>
          </div>
        </Content>
      </Section>
    </>
  );
}

const Content = styled.div`
  width: 90%;
  max-width: 900px;
  #images {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    img {
      width: 100%;
      flex: 1;
      aspect-ratio: 3 / 2;
      max-height: 200px;
    }
  }
  #text {
    h2 {
      text-align: left;
    }
  }
`