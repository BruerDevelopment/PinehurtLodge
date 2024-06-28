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
      <Section varient={1} maxSize={1200}>
        <h1 className="section-heading">Plenty of Local Activities</h1>
        <CardWrapper>
          
          <div className="Card">
            <TwoColumns data-reverse="true">
              <CenterDiv>
                <TwoImages>
                  <img src="/AreaAttractions/nordic_skier.jfif"  loading="lazy"></img>
                  <img src="/AreaAttractions/NordicOverview_2.27.21.webp"  loading="lazy"></img>
                </TwoImages>
                <p>
                  Less than a 20 minute drive from the lodge!
                </p>
              </CenterDiv>
              <CenterColumn>
                <h3>ELDORA NORDIC CENTER</h3>
                <p>
                  Eldora Nordic trails are open 9:00-4:00 seven days a week. With 40 kilometers of trails for classic and skate skiing, a full rental  service, various instructional opportunities, and an onsite retail  store, the Nordic Center offers something for snow lovers of every kind. 
                  
                </p>
                <Link href="https://www.redrocksonline.com/" target="_blank">Visit Redrocks Online <BsBoxArrowUpRight /></Link>
              </CenterColumn>
            </TwoColumns>
          </div>
          <div className="Card">
            <TwoColumns>
              <TwoImages>
                <img src="/AreaAttractions/Nederland_bridge.jpg"  loading="lazy"></img>
                <img src="/AreaAttractions/Nederland.jpg"  loading="lazy"></img>
              </TwoImages>
              <CenterColumn>
                <h3>The Town of Nederland</h3>
                <p>
                  This scenic mountain town, located 17 miles west of Boulder, is the gateway to the Indian Peaks Wilderness Area. There are many recreational, historical, dining and retail opportunities that await the Colorado visitor.
                </p>
                <Link href="https://www.redrocksonline.com/" target="_blank">Visit Nederland <BsBoxArrowUpRight /></Link>
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
         
        </CardWrapper>
      </Section>
    </>
  );
}

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

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
    color: black;
    font-size: 16px;
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
    aspect-ratio: 5 / 4;
  }
  & > div {
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