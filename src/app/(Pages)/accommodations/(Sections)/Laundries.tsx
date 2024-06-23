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
import { Section } from "../../../../../styles/Section";
import { isMobile, isNotMobile } from "../../../../../styles/GlobalStyles";

export default () => {
  return (
    <>
      <Section varient={1}>
        <Title className="section-heading">Two Full Laundries</Title>
        <Columns>
          <div>
            <div>
              <h2>Upstairs Laundry</h2>
              <p>
                A top-loading washer and front-loading dryer are just a few steps away from the kitchen. Fragrance-free detergent is provided. You can also find the vacuum and recycling containers in this room.
              </p>
            </div>

            <div className="singleImage">
              <img src="/HousePhotos/laundry/upstairs_laundry2.jpg"></img>
            </div>
          </div>
          <div className="reverse">
            <div>
              <h2>Downstairs Laundry</h2>
              <p>
                The downstairs laundry is located behind the stairs, adjacent to the craft area. Along with detergent, you’ll find stored tables, chairs, lamps & waste cans, as well as cleaning supplies.
              </p>
            </div>
            <div className="singleImage">
              <img src="/HousePhotos/laundry/downstairs_laundry.jpg"></img>
            </div>
          </div>
          
        </Columns>
      </Section>
    </>
  );
}
const Title = styled.h1`
  font-size: 21px;
`

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  ${isMobile(css`
    flex-direction: column;
  `)}
  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    &.reverse {
      ${isNotMobile(css`
        flex-direction: column-reverse;
      `)}
      
    }
  }
  .singleImage {
    width: 100%;
    aspect-ratio: 3 / 2;
    img {
      background-color: black;
      width: 100%;
      height: 100%;
      min-width: 280px;
      border-radius: 6px;
    }
  }
  .doubleImage {
    width: 100%;
    img {
      border-radius: 6px;
      background-color: black;
      flex: 1;
    }
  }
`
