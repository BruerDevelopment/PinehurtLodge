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
        <h1 className="heading">Photo Gallery</h1>
        <h2>Explore The Lodge Digitally</h2>
      </Section>
      <AlternateSection>
        <Gallery>
          <h3 className="heading" id="bedrooms">Bedrooms</h3>
          <div>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img />
          </div>
          <h3 className="heading" id="bathrooms">Bathrooms</h3>
          <div>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img />
          </div>
          <h3 className="heading" id="entertainment">Entertainment</h3>
          <div>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img />
          </div>
          <h3 className="heading" id="scrapbooking">Scrapbooking / Crafting / Work Areas</h3>
          <div>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img />
          </div>
          <h3 className="heading" id="garage">Garage</h3>
          <div>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img />
          </div>
          <h3 className="heading" id="kitchens">Kitchens</h3>
          <div>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img />
          </div>
          <h3 className="heading" id="living_rooms">Living Rooms</h3>
          <div>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img src="/HousePhotos/craft_area/craft_21.jpg"/>
            <img />
          </div>
        </Gallery>
      </AlternateSection>
    </>
  );
}

const Gallery = styled.div`
  width: 90%;
  max-width: 1200px;
  h3.heading {
    text-align: left;
  }
  & > div {
    overflow-x: scroll;
    display: flex;
    gap: 10px;
    & > img {
      min-width: auto;
      height: 300px;
      border-radius: 6px;
    }
  }
`
