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
import { Section } from "../../../../../styles/Section";
import { isMobile } from "../../../../../styles/GlobalStyles";

export default () => {
  let Accom = [
    <div key="Accom 1">
      <span>Upstairs Master Suite</span>
      <div className="images">
        <img src="/HousePhotos/bedroom1/master_with_moons.jpg" loading="lazy"></img>
        <img src="/HousePhotos/bedroom1/master_2.jpg" loading="lazy"></img>
      </div>
      <div id="more">
        <Link href="/accommodations#UpstairsBedrooms">Learn More</Link>
      </div>
    </div>,
    <div key="Accom 2">
      <span>Upstairs Queen</span>
      <div className="images">
        <img src="/HousePhotos/bedroom2/queen_1.jpg" loading="lazy"></img>
        <img src="/HousePhotos/bedroom2/queen_2.jpg" loading="lazy"></img>
      </div>
      <div id="more">
        <Link href="/accommodations#UpstairsBedrooms">Learn More</Link>
      </div>
    </div>,
    <div key="Accom 3">
    <span>Downstairs Master</span>
    <div className="images">
      <img src="/HousePhotos/bedroom3/down_master_8.jpg" loading="lazy"></img>
      <img src="/HousePhotos/bedroom3/down_master_1.jpg" loading="lazy"></img>
    </div>
    <div id="more">
      <Link href="/accommodations#DownstairsBedrooms">Learn More</Link>
    </div>
  </div>,
    <div key="Accom 4">
      <span>Downstairs Queen & Bunks</span>
      <div className="images">
        <img src="/HousePhotos/bedroom4/dorm_3.jpg" loading="lazy"></img>
        <img src="/HousePhotos/bedroom4/dorm_1.jpg" loading="lazy"></img>
      </div>
      <div id="more">
        <Link href="/accommodations#DownstairsBedrooms">Learn More</Link>
      </div>
    </div>,
    <div key="Accom 5" style={{"marginTop":"40px"}}>
      <span style={{"justifyContent":"center", "display":"flex"}}>Trundled Twins to King</span>
      <div className="images">
        <img src="/HousePhotos/downstairs_living/trundle_2.jpg" loading="lazy"></img>
        <img src="/HousePhotos/downstairs_living/trundle_6.jpg" loading="lazy"></img>
      </div>
      <div id="more">
        <Link href="/accommodations#DownstairsBedrooms">Learn More</Link>
      </div>
    </div>
  ]
  let Amenities = [
    <div key="Amenities 1">
      <span>2 Fully Equipped Kitchens</span>
      <div className="images">
        <img src="/HousePhotos/upstairs_kitchen/kitchen_main.jpg" loading="lazy"></img>
        <img src="/HousePhotos/downstairs_kitchen/kitchen_main.jpg" loading="lazy"></img>
      </div>
      <div id="more">
        <Link href="/accommodations#Kitchens">Learn More</Link>
      </div>
    </div>,
    <div key="Amenities 2">
      <span>2 Spacious Living Rooms</span>
      <div className="images">
        <img src="/HousePhotos/upstairs_living/main.jpg" loading="lazy"></img>
        <img src="/HousePhotos/craft_area/craft_20.jpg" loading="lazy"></img>
      </div>
      <div id="more">
        <Link href="/accommodations#LivingRooms">Learn More</Link>
      </div>
    </div>,
    <div key="Amenities 3">
    <span>Scrapbooking / Crafting Area</span>
    <div className="images">
      <img src="/HousePhotos/craft_area/craft_21.jpg" loading="lazy"></img>
      <img src="/HousePhotos/craft_area/magnifying_lamp_2.jpg" loading="lazy"></img>
    </div>
    <div id="more">
      <Link href="/accommodations#Scrapbooking">Learn More</Link>
    </div>
  </div>,
    <div key="Amenities 4">
      <span>Hot Tub & Pool Table</span>
      <div className="images">
        <img src="/HousePhotos/"  loading="lazy"></img>
        <img src="/HousePhotos/downstairs_living/pool_table3.jpg"  loading="lazy"></img>
      </div>
      <div id="more">
        <Link href="/accommodations#Activities">Learn More</Link>
      </div>
    </div>
  ]
  let is_mobile = useIsMobile();
  return (
    <>
      <Section varient={2}>
        <h1 className="section-heading">Cozy Accommodations</h1>
        <PictureCollumns>
          <div id="column">
            {is_mobile == false ? (
              <>
                {Accom[0]}
                {Accom[2]}
              </>
            ) : (
              <>
                {Accom[0]}
                {Accom[1]}
              </>
            )}
          </div>
          <div id="column">
          {is_mobile == false ? (
              <>
                {Accom[1]}
                {Accom[3]}
              </>
            ) : (
              <>
                {Accom[2]}
                {Accom[3]}
              </>
            )}
          </div>
        </PictureCollumns>
        <PictureCollumns>
          <div id="column">
            {is_mobile == false ? (
              <>
                {Accom[4]}
              </>
            ) : (
              <>
                {Accom[4]}
              </>
            )}
          </div>
         
        </PictureCollumns>

        <h1 className="section-heading">With Top-Class Amenities</h1>
        <PictureCollumns>
        <div id="column">
            {is_mobile == false ? (
              <>
                {Amenities[0]}
                {Amenities[2]}
              </>
            ) : (
              <>
                {Amenities[0]}
                {Amenities[1]}
              </>
            )}
          </div>
          <div id="column">
          {is_mobile == false ? (
              <>
                {Amenities[1]}
                {Amenities[3]}
              </>
            ) : (
              <>
                {Amenities[2]}
                {Amenities[3]}
              </>
            )}
          </div>
        </PictureCollumns>
      </Section>
    </>
  );
}

const PictureCollumns = styled.div`
  max-width: 900px;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 20px;  
  ${isMobile(css`
    flex-direction: column;
  `)}
  #column {
    display: flex;
    flex-direction: column;
    
    & > div { //line
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-weight: bold;

      .images {
        display: flex;
        flex-direction: row;
        gap: 10px;
        img {
          width: 150px;
          aspect-ratio: 3/2;
          border-radius: 6px;
          object-fit: cover;
          ${isMobile(css`
            width: 50%;
          `)}
        }
      }
      #more {
        display: flex;
        justify-content: end;
        flex-direction: row;
        a {
          background-color: var(--theme-color-3);
          text-decoration: none;
          color: white;
          padding: 10px;
          border-radius: 6px;
          width: 130px;
          text-align: center;
        }
      }
    }
  }
`

