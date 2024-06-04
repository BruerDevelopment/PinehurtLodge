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
import { useMemo, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CarouselPopover from "@/Components/CarouselPopover";
const photos: {
  [key: string]: {
    heading: string,
    imgs:string[]
  }
} = {
  "bedrooms": {
    heading:"Bedrooms",
    imgs:[
        "/HousePhotos/craft_area/craft_21.jpg",
    ]
  },
  "living_rooms": {
    heading:"Upstairs Living Area",
    imgs:[
        "/HousePhotos/upstairs_living/living_room_dining_area.jpg",
        "/HousePhotos/upstairs_living/main.jpg",
        "/HousePhotos/upstairs_living/living_room_entrance4.jpg",
        "/HousePhotos/upstairs_living/weather_station.jpg",
    ]
  },
  "entertainment": {
    heading:"Entertainment",
    imgs:[
        "/HousePhotos/craft_area/craft_21.jpg",
    ]
  },
  "scrapbooking": {
    heading:"Scrapbooking / Crafting / Work Area",
    imgs:[
      "/HousePhotos/craft_area/craft_21.jpg",
    ]
  },
  "kitchens": {
    heading:"Two Full Kitchens",
    imgs:[
        "/HousePhotos/craft_area/craft_21.jpg",
    ]
  },
  "decks": {
    heading:"Two Large Decks",
    imgs:[
        "/HousePhotos/craft_area/craft_21.jpg",
    ]
  },
  "bathrooms": {
    heading:"3 Full Bathrooms",
    imgs:[
        "/HousePhotos/craft_area/craft_21.jpg",
    ]
  },
  "garage": {
    heading:"Garage",
    imgs:[
        "/HousePhotos/craft_area/craft_21.jpg",
    ]
  },
  "laundries": {
    heading:"Two Full Laundries",
    imgs:[
        "/HousePhotos/craft_area/craft_21.jpg",
    ]
  },
}
export default () => {
  let dialogControls = useDialog();
  let all_images = useMemo(() => {
      let _all_images = Object.keys(photos).reduce<{ src: string, key: string }[]>((curr, next) => {
        return [...curr, ...photos[next].imgs.map((src, i) => ({
          src,
          key: next
        }))];
      }, [])
      return _all_images.map((img, i) => ({ ...img, heading: photos[img.key].heading, index: i }));
  }, [])
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
            return <PhotoList all_images={all_images}  group_key={key} onPhotoClicked={(img) => {
              dialogControls[1]("modal")
              setCurrIndex(img.index)
            }} />
          })}
        </Gallery>
      </AlternateSection>
      <CarouselPopover state={ popoverSTate} images={all_images} controls={dialogControls}/>
    </>
  );
}


function PhotoList(props: {
  all_images:{
    index: number;
    src: string;
    key: string;
  }[],
  group_key:string,
  onPhotoClicked:(t:{
    index: number;
    src: string;
    key: string;
  })=>void
}) {
  let key = props.group_key;
  let group = photos[key];
  let by_group = props.all_images.filter(img => img.key == key)

  return (
    <div>
      <h3 className="heading" id={key}>{group.heading}</h3>
      <div>
        {by_group.map((img) => {
          return (
            <img src={img.src} onClick={() => {
              props.onPhotoClicked(img);
            }}/>
          )
        })}
      </div>
        <div
          id="backwards"
          style={{ "display": "" }}
          onClick={() => {
            
          }}
        ><FaChevronRight /></div>
        <div
          id="forward"
          style={{ "display": "" }}
          onClick={() => {
            
          }}
        ><FaChevronLeft /></div>
    </div>
  )
}

const Gallery = styled.div`
  width: 90%;
  max-width: 1200px;
  & > div {
    position: relative;
    h3.heading {
      text-align: left;
    }
    & > div {
      overflow-x: scroll;
      display: flex;
      gap: 10px;
      position: relative;
      & > img {
        min-width: auto;
        height: 300px;
        border-radius: 6px;
        cursor: pointer;
        
      }
    }
  }
  div#forward, div#backwards {
    position: absolute;
    top: 40px;
    bottom: 0px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      svg {
        opacity: 1;
      }
    }
    svg {
      opacity: 0.2;
      width: 100px;
      height: 100px;
      color: white;
    }
  }

  div#forward {
    left: 0px;
    svg {
      left: 0px;
    }
  }
  div#backwards {
    right: 0px;
    svg {
      right: 0px;
    }
  }
`

