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
import { isMobile } from "../../../../../styles/GlobalStyles";

export default () => {
  return (
    <>
      <Section varient={2}>
        <h1 className="section-heading" id="LivingRooms">Spacious Gathering Spaces / Living Rooms</h1>
        <TwoColumns data-reverse="true">
          <div>
            <div>
              <img src="/HousePhotos/upstairs_living/main.jpg" />
              <img src="/HousePhotos/upstairs_living/living_room_entrance5.jpg" />
            </div>
            <div>
              <img src="/HousePhotos/upstairs_kitchen/upstairs_dining_table.jpg" />
              <img src="/HousePhotos/upstairs_living/living_room_dining_area.jpg" />
            </div>
          </div>
          <div>
            <h2>Upstairs Living Room</h2>
            <p>
              The upstairs living room offers seating for 8, a wood-burning fireplace, a Google smart TV, a weather station and a breathtaking view of the Continental Divide! An open layout with the kitchen and dining area offers expansive space for socializing, cooking and relaxing.
            </p>
            
          </div>
        </TwoColumns>
        <TwoColumns>
          <div>
            <TwoStackedImages>
              <img src="/HousePhotos/craft_area/craft_20.jpg" />
              <img src="/HousePhotos/craft_area/craft_1.jpg" />
            </TwoStackedImages>
          </div>
          <div>
            <h2>Downstairs Games & Activities  </h2>
            <p>
              Large open spacious downstairs living area has space for games, crafting, gathering or projects. With easy access to the deck and hot tub, this area also boasts a beautiful mountain view of the Continental Divide of the Front Range. A pool table offers an additional gathering space and fun!
            </p>
            
          </div>
        </TwoColumns>
        <MoreLink>
          <Link href="/gallery#living_rooms">View More Of The Living Rooms <br /> In Our Photos Gallery</Link>
        </MoreLink>
      </Section>
    </>
  );
}

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
const Spacer = styled.div`
  height: 20px;
  ${isMobile(css`
    height: 40px;
  `)}
  
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
const TwoColumns = styled.div`
  width: 90%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  &[data-reverse="true"] {
    flex-direction: row-reverse;
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
      img {
        flex: 1;
        aspect-ratio: 3 / 2;
        max-height: 130px;
        background-color: red;
        width: 50%;
        object-fit: cover;
        border-radius: 6px;

      }
    }
  }
`


