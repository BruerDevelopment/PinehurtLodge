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
import { useIsMobile } from "@/hooks/useIsMobile";
import { isMobile } from "../../../../../styles/GlobalStyles";
import { Section } from "../../../../../styles/Section";
import ExportedImage from "next-image-export-optimizer";

export default () => {
  
  return (
    <>
      <Section varient={2} maxSize={1200}>
        <Title className="section-heading">Amazing Amenities For All Kinds of Scrapbooking and Crafts</Title>
        <TwoColumns>
          <div>
            <TwoStackedImages>
              <ExportedImage
                src="/images/pro_house/photo_0043.jpg"
                alt="Scrapbooking Photo"
                width={200}
                height={133}
                loading="lazy"
              />
              <ExportedImage
                src="/images/pro_house/photo_0044.jpg"
                alt="Scrapbooking Photo"
                width={246}
                height={164}
                loading="lazy"
              />
            </TwoStackedImages>
          </div>
          <div>
            <h2>2 Full Laundries</h2>
            <p>
              This retreat features a laundry room both upstairs and downstairs, each offering a full-sized washer and dryer.
            </p>
            
          </div>
        </TwoColumns>
        <TwoColumns data-reverse="true">
          <div>
            <div>
              <ExportedImage
                src="/images/am_house/photo_0007.jpg"
                alt="Scrapbooking Photo"
                width={195}
                height={130}
                loading="lazy"
              />
              <ExportedImage
                src="/images/pro_house/photo_0037.jpg"
                alt="Scrapbooking Photo"
                width={195}
                height={130}
                loading="lazy"
              />
            </div>
            <div>
            <ExportedImage
                src="/images/am_house/photo_0015.jpg"
                alt="Dining Table Photo"
                width={175}
                height={130}
                loading="lazy"
                
              />
              <ExportedImage
                src="/images/am_house/photo_0016.jpg"
                alt="Beverage Fridge Photo"
                width={97}
                height={130}
                loading="lazy"
                style={{"width":"25%"}}
              />
              <ExportedImage
                src="/images/am_house/photo_0017.png"
                alt="Coffee Bar Photo"
                width={97}
                height={130}
                loading="lazy"
                style={{"width":"25%"}}
              />
            </div>
          </div>
          <div>
            <h2>2 Fully Equipped Kitchens</h2>
            <p>
              Each kitchen comes fully equipped with appliances, cookware, dishware, utensils, glassware & silverware. Each kitchen comes with a large dining table that expands with stored leaves inside the table offering plenty of additional work or gathering space.
            </p>
            
          </div>
        </TwoColumns>
        <MoreLink href="/accommodations">View All Accommodations & Amenities <br/> For Your Scrapbooking Retreat</MoreLink>
      </Section>
    </>
  );
}

const Title = styled.h1`
  &.section-heading {
    font-size: 26px !important;
  }
`


const MoreLink = styled(Link)`
  background-color: var(--theme-color-3);
  text-decoration: none;
  color: white;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  margin-top: 50px;
`

const TwoColumns = styled.div`
  width: 90%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  &[data-reverse="true"] {
    flex-direction: row-reverse;
    margin-top: 120px;
    @media screen and (max-width: 810px) {
      margin-top: 0px;
    }
  }
  ${isMobile(css`
    &, &[data-reverse="true"] {
      flex-direction: column-reverse;
    }
  `)}
  
  div {
    display: flex;
  }
  
  h3 {
    margin: 0px;
  }
  h2 {
    margin-bottom: 0px;
    text-align: center;
  }
  & > div {
    padding: 20px;
    box-sizing: border-box;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    & > div {
      gap: 20px;
      width: 100%;
      justify-content: center;
      img {
        max-height: 130px;
        object-fit: cover;
        border-radius: 6px;
        width: 50%;

      }
    }
  }
`

const TwoStackedImages = styled.div`
  position: relative;
  padding: 20px;
  flex: 1;
  img {
    aspect-ratio: 3 / 2;
    max-height: none !important;
    object-fit: cover;
    border-radius: 6px;
    width: 100%;

  }
  img:first-child {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 200px;
  }
  img:last-child {
    position: absolute;
    top: 85px;
    right: 30px;
    width: 60%;
  }
  @media screen and (max-width: 810px) {
    & {
      display: flex;
      flex-direction: column;
      width: 50%;
    }
    img:first-child {
      position: relative;
      width: 100%;
      top: auto;
      right: auto;
      left: auto;
    }
    img:last-child {
      position: relative;
      width: 100%;
      top: auto;
      right: auto;
      left: auto;
    }
  }
  ${isMobile(css`
    & {
      display: flex;
      flex-direction: row;
      padding: 0px;
    }
    img:first-child {
      position: relative;
      width: 50%;
      top: auto;
      right: auto;
      left: auto;
    }
    img:last-child {
      position: relative;
      width: 50%;
      top: auto;
      right: auto;
      left: auto;
    }
  `)}
  
`
