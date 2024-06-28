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
import { isNotBrowser, isBrowser, isMobile } from "../../../../../styles/GlobalStyles";

export default () => {
  return (
    <>
      <Section varient={1}>
        <h1 className="section-heading">Bathrooms</h1>
        <Rooms>
          <div>
            <div>
              <h3>Master Bathroom</h3>
              <p>
              The Master Bedroom comes with an en suite bathroom which features a glass shower, two sinks and a fabulous view! The shower offers shampoo, conditioner & body wash dispensers. The sink area offers handsoap, Q-tips & cotton swabs.
              </p>
            </div>
            <img src="/HousePhotos/bathrooms/master_bath1.jpg"/>
          </div>
          <div>
            <div>
              <h3>Upstairs Bathroom</h3>
              <p>
                The central bathroom upstairs has a tub/shower combination and a heater/temperature controlled tile floor. The shower offers shampoo, conditioner & body wash dispensers. The sink area offers hand soap, Q-tips & cotton swabs.
              </p>
            </div>
            <img src="/HousePhotos/bathrooms/hallway_bathroom1.jpg"/>
          </div>
          <div>
            <div>
              <h3>Downstairs Bathroom</h3>
              <p>
                The downstairs bathroom has a tub/shower combination and a heater/temperature controlled tile floor. The shower offers shampoo, conditioner & body wash dispensers. The sink area offers hand soap, Q-tips & cotton swabs.
              </p>
            </div>
            <div id="double">

              <img style={{"aspectRatio":"3 / 4"}} src="/HousePhotos/bathrooms/DownstairsBathroom2.png"/>
              <img style={{"aspectRatio":"3 / 4"}} src="/HousePhotos/bathrooms/DownstairsBathroom.png"/>
            </div>
          </div>
        </Rooms>
        <MoreLink>
          <Link href="/gallery#bathrooms">View More Of the Bathrooms <br /> In Our Photos Gallery</Link>
        </MoreLink>
      </Section>
    </>
  );
}
const Rooms = styled.div`
  width: 90%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0px;
  & > div {
    display: flex;
    gap: 10px;
    align-items: center;
    ${isMobile(css`
      flex-direction: column;
    `)}
    #double {
      display: flex;
      gap: 10px;
      min-width: 350px;
      img {
        width: 170px;
      }
      ${isMobile(css`
        & {
          min-width: 100%;
          width: 100%;
        }
        img {
          width: 50%;
        }  
      `)}
      
    }
    img {
      
      box-sizing: border-box;
      width: 260px;
      background-color: red;
      object-fit: cover;
      border-radius: 6px;
      aspect-ratio: 3 / 2;
      ${isMobile(css`
        width: 100%;
      `)}
    }
  }
`
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
