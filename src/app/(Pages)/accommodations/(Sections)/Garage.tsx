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
        <h1 className="heading">Garage</h1>
        <TwoColumns>
          <img src="/HousePhotos/garage/garage.jpg"/>
          <div>
            <h2>Indoor Parking for 2 Vehicles!</h2>
            <p>
            Enjoy the luxury of indoor parking for two large vehicles at Pinehurst Lodge. Although no remote is provided, the door is opened easily from a button inside. Let the snow melt and keep your gear secure inside the garage which is available to our guests.
            </p>
            <p>
            Please keep the garage door closed at all times. There are many wild animals that enjoy roaming our area, including bears. We ask your assistance in keeping our garage area secure.
            </p>
          </div>
        </TwoColumns>
        <MoreLink>
          <Link href="/gallery#garage">View More Of the Crafting Setup <br /> In Our Photos Gallery</Link>
        </MoreLink>
      </Section>
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

const TwoColumns = styled.div`
  width: 95%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  padding: 20px 0px;
  
  &[data-reverse="true"] {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: ${()=>responsiveMobileWidth}) {
    &, &[data-reverse="true"] {
      flex-direction: column-reverse;
    }
  }
  div {
    display: flex;
  }
  img {
    flex: 1;
    aspect-ratio: 3 / 2;
    border-radius: 6px;
    background-color: red;
    object-fit: cover;
    margin: 20px;
    box-sizing: border-box;
    width: 90%;
  }
  h3 {
    margin: 0px;
  }
  h2 {
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: center;
  }
  & > div {
    padding: 20px;
    box-sizing: border-box;
    flex: 1;
    flex-direction: column;
    gap: 20px;
    & > div {
      gap: 20px;
    }
  }
`