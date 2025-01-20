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
      <Section varient={1}>
        <Title className="section-heading">Crafting Area With Spacious Surfaces</Title>
        <Columns>
          <div>
            <div>

              <h2>Ready For All Your Friends and Family</h2>
              <div className="singleImage">
                <ExportedImage
                  src="/images/am_house/photo_0011.jpg"
                  alt="Pinehurst Lodge Scrapbooking Retreat Work Area"
                  width={440}
                  height={394}
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h2>Work Stations just steps from a Full Laundry & Full Kitchen</h2>
              <div className="doubleImage">
                <ExportedImage
                  src="/images/pro_house/photo_0037.jpg"
                  alt="Pinehurst Lodge Scrapbooking Retreat Kitchens"
                  width={211}
                  height={160}
                  loading="lazy"
                />
                <ExportedImage
                  src="/images/pro_house/photo_0043.jpg"
                  alt="Pinehurst Lodge Scrapbooking Retreat Laundries"
                  width={211}
                  height={160}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="reverse">
            <div>
              <h2>Comfy Gathering Space with Large Center Table</h2>
              <h3>great for shared scrapbooking, puzzles or even tabletop RPGs!</h3>
              <div className="singleImage">
                <ExportedImage
                  src="/images/am_house/photo_0014.jpg"
                  alt="Pinehurst Lodge Scrapbooking Retreat Living Room"
                  width={440}
                  height={394}
                  loading="lazy"
                />  
              </div>
            </div>
            <div>
              <h2>Plenty of Natural Light</h2>
              <h3>as well as 6 flex arm ring lights with magnifying lenses</h3>
              <div className="doubleImage">
                <ExportedImage
                  src="/images/am_house/photo_0012.jpg"
                  alt="Pinehurst Lodge Scrapbooking Retreat Amenities"
                  width={211}
                  height={160}
                  loading="lazy"
                />
                <ExportedImage
                  src="/images/am_house/photo_0013.jpg"
                  alt="Pinehurst Lodge Scrapbooking Retreat Craft Area"
                  width={211}
                  height={160}
                  loading="lazy"
                />
              </div>
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
  h2 {
    font-size: 15px;
    text-align: center;
  }
  h3 {
    font-size: 15px;
    font-weight: normal;
    text-align: center;
    
  }
  & > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    gap: 20px;
    &.reverse {
      flex-direction: column-reverse;
      ${isMobile(css`
        flex-direction: column;
        
      `)}
    }
    & > div {
      display: flex;
      flex-direction: column;

    }
  }
  img {
    border-radius: 6px;
    object-fit: cover;

  }
  .singleImage {
    width: 100%;
    aspect-ratio: 3 / 2;
    img {
      background-color: black;
      width: 100%;
      height: 100%;
    }
  }
  .doubleImage {
    width: 100%;
    display: flex;
    justify-content: space-between;
    img {
      flex: 1;
      background-color: black;
      max-width: 48%;
    }
  }
`
