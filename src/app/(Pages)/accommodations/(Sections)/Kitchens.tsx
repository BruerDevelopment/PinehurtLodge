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
      <Section varient={1}>
        <h1 className="section-heading" id="Kitchens">Two Fully Equipped Kitchens</h1>
        <H2 className="section-heading">Enjoy Every Meal with a View!</H2>
        <P>
        The lodge comes with two full kitchens for all your culinary needs. Each kitchen comes fully equipped with appliances, cookware, dishware, utensils, glassware & silverware. Each kitchen comes with a large dining table that expands with stored leaves inside the table, offering plenty of gathering space.
        </P>
        <P>
        Don’t forget about the large outdoor grill when planning your mountainside dining experience!
        </P>
        <TwoColumns>
          <div className="centerImages">
            <div>
              <img src="/HousePhotos/upstairs_kitchen/kitchen_main.jpg" style={{"maxHeight":"275px"}} />
            </div>
            <div>
              <img src="/HousePhotos/upstairs_kitchen/coffee_area.jpg" style={{"maxWidth":"85px"}} />
              <img src="/HousePhotos/upstairs_kitchen/upstairs_dining_table.jpg" />
              <img src="/HousePhotos/upstairs_kitchen/BigFridge.png" style={{"maxWidth":"85px"}}/>
            </div>
          </div>
          <div>
            <h2>Upstairs Kitchen</h2>
            <p>
              Amenities include: double door fridge with freezer drawer, double oven, deluxe cooktop, quiet dishwasher, microwave, deluxe toaster oven, coffee maker, espresso machine, press pot, manual coffee grinder, tea kettle, blender, crock pot, stoneware dishes for 8, flatware for 8, numerous utensils, bakeware, Granitestone nonstick cookware, glassware, wine glasses
            </p>
          </div>
        </TwoColumns>
        <TwoColumns data-reverse="true" id="GrillDetails">
          <div className="centerImages">
            <div>
              <img src="/HousePhotos/upstairs_deck/up_deck1.jpg" />
              <img src="/HousePhotos/upstairs_deck/upstairs_deck1.jpg" />
            </div>
          </div>
          <div id="grillText">
            <h2>Deck Grill</h2>
            <p>
              On the Deck: Large outdoor grill, 2 tables, 6 chairs and such a view!
            </p>
          </div>
        </TwoColumns>
        <TwoColumns>
          <div className="centerImages">
            <div>
              <img src="/HousePhotos/downstairs_kitchen/kitchen_main.jpg" />
              <img src="/HousePhotos/downstairs_kitchen/down_kitchen2.jpg" />
            </div>
            
          </div>
          <div>
            <h2 className="centerHeading">Downstairs Kitchen</h2>
            <p>
              Amenities include: fridge, stove, oven, coffee maker, toaster oven, microwave, pots, pans, cutlery, utensils, flatware for 8, wheat straw plates, bowls, cups for 8
            </p>
            
          </div>
        </TwoColumns>
        <MoreLink>
          <Link href="/gallery#kitchens">View More Of the Kitchens <br /> In Our Photos Gallery</Link>
        </MoreLink>
      </Section>
    </>
  );
}
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
const H2 = styled.h2`
  width: 90%;
  max-width: 900px;
  box-sizing: border-box;
  padding: 0px 20px;
`
const P = styled.p`
  width: 90%;
  max-width: 900px;
  box-sizing: border-box;
  padding: 0px 20px;
`
const Spacer = styled.div`
  height: 20px;
  ${isMobile(css`
    height: 40px;
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
  
  &#GrillDetails {
    #grillText {
      ${isMobile(css`
        &, &[data-reverse="true"] {
          max-width: 200px;
        }
      `)}
      
      max-width: auto;
    }
    img {
      max-height: 215px;
    }
  }
  div {
    display: flex;
  }
  img {
    background-color: red;
    object-fit: cover;
    flex: 1;
    //aspect-ratio: 3 / 2;
    max-height: 130px;
    border-radius: 6px;
    width: 30%;
  }
  h3 {
    margin: 0px;
  }
  h2 {
    margin: 0px;
    &.centerHeading {
      text-align: center;
    }
  }
  & > div {
    padding: 20px;
    box-sizing: border-box;
    flex: 1;
    flex-direction: column;
    gap: 20px;
    &.centerImages {
      justify-content: center;
    }
    & > div {
      gap: 20px;
    }
  }
`


