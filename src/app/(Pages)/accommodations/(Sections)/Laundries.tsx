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
import ExportedImage from "next-image-export-optimizer";

export default () => {
  return (
    <>
      <Section varient={2}>
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
              <ExportedImage
                src="/images/pro_house/photo_0043.jpg"
                alt="Upstairs Laundry Photo"
                width={440}
                height={394}
                loading="lazy"
              />  
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
              <ExportedImage
                src="/images/pro_house/photo_0044.jpg"
                alt="Downstairs Laundry Photo"
                width={440}
                height={394}
                loading="lazy"
              />
            </div>
          </div>
          
        </Columns>
        <MoreLink>
          <Link href="/gallery#laundries">View More Of The Laundry Rooms <br /> In Our Photos Gallery</Link>
        </MoreLink>
      </Section>
    </>
  );
}
const Title = styled.h1`
  font-size: 21px;
`
const MoreLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  @media screen and (max-width: 810px) {
    margin-top: 0px;
  }
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
