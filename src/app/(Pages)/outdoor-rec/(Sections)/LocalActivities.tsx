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
import { BsBoxArrowUpRight } from "react-icons/bs";
import { isMobile } from "../../../../../styles/GlobalStyles";
import { Section } from "../../../../../styles/Section";

export default () => {
  return (
    <>
      <Section varient={2} maxSize={1200}>
        <h1 className="section-heading">Plenty of Local Activities</h1>
        <CardWrapper>
          <div className="Card">
            <TwoColumns data-reverse="true">
              <TwoImages>
                <img src="/AreaAttractions/Toss_Pizza.jpg"  loading="lazy"></img>
                <img src="/AreaAttractions/Toss_Pizza_exterior.png"  loading="lazy"></img>
              </TwoImages>
              <CenterColumn>
                <h3>Toss Pizza </h3>
                <p>Within walking distance on Main Street in Rollinsville is the best pizza in the surrounding area, Toss Wood Fired Pizza. Featuring fresh ingredients, salads, small plate veggies, local beverages and more. It’s a dining delight not to be missed and a gift to be so nearby!</p>
                <Link href="https://www.tosswoodfired.com/" target="_blank">View The Toss Website <BsBoxArrowUpRight /></Link>
              </CenterColumn>
            </TwoColumns>
          </div>
          <div className="Card">
            <TwoColumns>
              <TwoImages>
                <img src="/AreaAttractions/Redrocks.jpg"  loading="lazy"></img>
                <img src="/AreaAttractions/Red-Rocks-Amphitheatre.jpeg"  loading="lazy"></img>
              </TwoImages>
              <CenterColumn>
                <h3>Red Rocks Park & Amphitheatre</h3>
                <p>
                  One of the most beautiful and renowned concert venues in the United States, Red Rocks Park & Amphitheatre draws a vast array of well-known artists from around the world. At 36 miles away, it is easily accessible to the Pinehurst Lodge.
                </p>
                <Link href="https://www.redrocksonline.com/" target="_blank">Visit Redrocks Online <BsBoxArrowUpRight /></Link>
              </CenterColumn>
            </TwoColumns>
          </div>
          <div className="Card">
            <TwoColumns data-reverse="true">
              <TwoImages>
                <img src="/AreaAttractions/GoldDirtDistillery3.jpg"  loading="lazy"></img>
                <img src="/AreaAttractions/GoldDirtBuilding.webp"  loading="lazy"></img>
              </TwoImages>
              <CenterColumn>
                <h3>Gold Dirt Distillery </h3>
                <p>
                  Located just down the street from Pinehurst Lodge sits one of the finest distilleries of quality craft spirits. Open Wed - Sun, they offer a delicious variety of hand crafted cocktails and an array of spirits including Rose Gin, Lavender Infused Gin, Honey Spirit, High & Dry Gin and more.
                </p>
                <Link href="https://www.golddirtdistillery.com/" target="_blank">Explore Gold Dirt's Website<BsBoxArrowUpRight /></Link>
              </CenterColumn>
            </TwoColumns>
          </div>
          <div className="Card">
            <TwoColumns>
              <TwoImages>
                <img src="/StockPhotos/rocky_mountain_state_park_1.jpg"  loading="lazy"></img>
                <img src="/StockPhotos/rocky_mountain_state_park.jpg"  loading="lazy"></img>
              </TwoImages>
              <CenterColumn>
                <h3>Rocky Mountain National Park </h3>
                <p>
                  33 miles north of the PInehurst Lodge lies the spectacular Rocky Mountain National Park. With over 300 miles of hiking trails, abundant wildlife, towering peaks and glistening alpine lakes, there is something for everyone to explore and enjoy!
                </p>
                <Link href="#" target="_blank">Checkout The Park's Website  <BsBoxArrowUpRight /></Link>
              </CenterColumn>
            </TwoColumns>
          </div>
         
        </CardWrapper>
      </Section>
    </>
  );
}


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 900px;
  gap: 20px;

  .Card {
    border-radius: 10px;
    width: 100%;
    background-color: var(--theme-color-1);
    padding: 10px;
  }

`

const TwoColumns = styled.div`
  display: flex;
  flex-direction: row;
  &[data-reverse="true"] {
    flex-direction: row-reverse;
  }
  ${isMobile(css`
    &, &[data-reverse="true"] {
      flex-direction: column;
    }
  `)}
  
  img {
    width: 100px;
    aspect-ratio: 3 / 2;
  }
  div {
    flex: 1;
  }
`

const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;

  h3 {
    color: black;
    font-size: 20px;
    margin-bottom: 0px;
    text-align: center;
    ${isMobile(css`
      margin-top: 0px;
      
    `)}
    
  }
  p {
    color: black;
    font-size: 16px;
  }
  a {
    width: 80%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: var(--theme-color-3);
    text-decoration: none;
    margin: 10px 0px;
    gap: 10px;
    svg {
      width: 20px;
      height: 20px;
      color: white;
    }
    font-size: 15px;
    ${isMobile(css`
      font-size: 12px;
    `)}
    
  }
`
const TwoImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  gap: 10px;
  
  img {
    border-radius: 6px;
    flex: 1;
    object-fit: cover;
    width: 50%;
    
  }
`