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

export default () => {
  
  return (
    <>
      <Section varient={2} maxSize={1200}>
        <Title className="section-heading">Amazing Amenities For All Kinds of Scrapbooking and Crafts</Title>
        <TwoColumns>
          <div>
            <TwoStackedImages>
              <img src="/HousePhotos/laundry/downstairs_laundry.jpg" />
              <img src="/HousePhotos/laundry/upstairs_laundry2.jpg" />
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
              <img src="/HousePhotos/upstairs_kitchen/kitchen_main.jpg" />
              <img src="/HousePhotos/downstairs_kitchen/kitchen_main.jpg" />
            </div>
            <div>
              <img style={{"width":"45%"}} src="/HousePhotos/upstairs_kitchen/upstairs_dining_table.jpg" />
              <img style={{ "width": "25%" }} src="/HousePhotos/upstairs_kitchen/coffee_area.jpg" />
              <img style={{"width":"25%"}} src="/HousePhotos/upstairs_kitchen/BeverageFridge.png" />
            </div>
          </div>
          <div>
            <h2>2 Fully Equipped Kitchens</h2>
            <p>
              Each kitchen comes fully equipped with appliances, cookware, dishware, utensils, glassware & silverware. Each kitchen comes with a large dining table that expands with stored leaves inside the table offering plenty of additional work or gathering space.
            </p>
            
          </div>
        </TwoColumns>
        <MoreLink href="/accommodations">View All Accommodations & Amenities <br/> For Your Srapbooking Retreat</MoreLink>
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
        background-color: red;
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
    background-color: red;
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
