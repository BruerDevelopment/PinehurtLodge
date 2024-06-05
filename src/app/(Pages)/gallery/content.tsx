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
import { useDialog } from "@/hooks/useDialog";
import { useEffect, useMemo, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import FullCarousel from "@/Components/FullCarousel";
import CarouselPopover from "@/Components/CarouselPopover";
import Carousel from "@/Components/Carousel";
const photos: {
  [key: string]: {
    heading: string,
    imgs: { src:string }[]
  }
} = {
  "bedrooms": {
    heading:"Bedrooms",
    imgs:[
      { src: "/HousePhotos/bedroom1/master_1.jpg" },
      { src: "/HousePhotos/bedroom1/master_2.jpg" },
      { src: "/HousePhotos/bedroom1/master_with_moons.jpg" },
    ]
  },
  "living_rooms": {
    heading:"Upstairs Living Area",
    imgs:[
      { src: "/HousePhotos/upstairs_living/living_room_dining_area.jpg" },
      { src: "/HousePhotos/upstairs_living/main.jpg" },
      { src: "/HousePhotos/upstairs_living/living_room_entrance4.jpg" },
      { src: "/HousePhotos/upstairs_living/weather_station.jpg" },
    ]
  },
  "entertainment": {
    heading:"Entertainment",
    imgs:[
      { src: "/HousePhotos/craft_area/craft_21.jpg" },
    ]
  },
  "scrapbooking": {
    heading:"Scrapbooking / Crafting / Work Area",
    imgs:[
      { src: "/HousePhotos/craft_area/craft_21.jpg" },
    ]
  },
  "kitchens": {
    heading:"Two Full Kitchens",
    imgs:[
      { src: "/HousePhotos/craft_area/craft_21.jpg" },
    ]
  },
  "decks": {
    heading:"Two Large Decks",
    imgs:[
      { src: "/HousePhotos/craft_area/craft_21.jpg" },
    ]
  },
  "bathrooms": {
    heading:"3 Full Bathrooms",
    imgs:[
      { src: "/HousePhotos/craft_area/craft_21.jpg" },
    ]
  },
  "garage": {
    heading:"Garage",
    imgs:[
      { src: "/HousePhotos/craft_area/craft_21.jpg" },
    ]
  },
  "laundries": {
    heading:"Two Full Laundries",
    imgs:[
      { src: "/HousePhotos/craft_area/craft_21.jpg" },
    ]
  },
}
export default () => {
  let dialogControls = useDialog();
  let [groupName, setGroupName] = useState("bedrooms")
  let photoGroup = useMemo(() => photos[groupName]?.imgs.map(p => ({
    src: p.src,
    heading:photos[groupName]?.heading
  })), [groupName])
  let popoverSTate = useState(0);
  let [currIndex, setCurrIndex] = popoverSTate;
 
  return (
    <>
      <Section>
        <h1 className="heading">Photo Gallery</h1>
        <h2>Explore The Lodge Digitally</h2>
      </Section>
      <AlternateSection>
        <Gallery>
          {Object.keys(photos).map(key => { 
            return (
              <div key={key}>
                <h1>{photos[key].heading}</h1>
                <Carousel images={photos[key].imgs} onImageSelected={(id) => {
                  let group = key;
                  setGroupName(group)
                  setCurrIndex(id)
                  dialogControls.open("modal");
                }}/>
              </div>
            )
          })}
        </Gallery>
      </AlternateSection>
      <CarouselPopover state={popoverSTate} controls={dialogControls}  images={photoGroup || []}/>
    </>
  );
}

const Gallery = styled.div`
  width: 90%;
  max-width: 1200px;
  & > div {
    position: relative;
    
  }

`

