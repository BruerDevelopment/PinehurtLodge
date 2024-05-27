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
      <AlternateSection>
        <h1 className="heading" id="Kitchens">Two Fully Equipped Kitchens</h1>
        <h2>Enjoy Every Meal with a View!</h2>
        <P>
        The lodge comes with two full kitchens for all your culinary needs. Each kitchen comes fully equipped with appliances, cookware, dishware, utensils, glassware & silverware. Each kitchen comes with a large dining table that expands with stored leaves inside the table, offering plenty of gathering space.
        </P>
        <P>
        Don’t forget about the large outdoor grill when planning your mountainside dining experience!
        </P>
        <TwoColumns>
          <div className="centerImages">
            <div>
              <img src="#" style={{"maxHeight":"275px"}} />
            </div>
            <div>
              <img src="#" />
              <img src="#" />
              <img src="#" />
            </div>
          </div>
          <div>
            <h2>Upstairs Kitchen</h2>
            <p>
              Amenities include: double door fridge with freezer drawer, double oven, deluxe cooktop, quiet dishwasher, microwave, deluxe toaster oven, coffee maker, espresso machine, press pot, manual coffee grinder, tea kettle, blender, crock pot, stoneware dishes for 8, flatware for 8, numerous utensils, bakeware, Granitestone nonstick cookware, glassware, wine glasses
            </p>
          </div>
        </TwoColumns>
        <TwoColumns data-reverse="true">
          <div className="centerImages">
            <div>
              <img src="#" />
              <img src="#" />
            </div>
          </div>
          <div>
            <h2 className="centerHeading">Deck Grill</h2>
            <p>
              On the Deck: Large outdoor grill, 2 tables, 6 chairs and such a view!
            </p>
          </div>
        </TwoColumns>
        <TwoColumns>
          <div className="centerImages">
            <div>
              <img src="#" />
              <img src="#" />
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
          <Link href="#">View More Of the Crafting Setup <br /> In Our Photos Gallery</Link>
        </MoreLink>
      </AlternateSection>
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
const P = styled.p`
  width: 90%;
  max-width: 900px;
  box-sizing: border-box;
  padding: 20px;
`
const Spacer = styled.div`
  height: 20px;
  @media screen and (max-width: ${() => responsiveMobileWidth}) {
    & {
      height: 40px;
    }
  }
`
const TwoColumns = styled.div`
  width: 90%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  &[data-reverse="true"] {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: ${()=>responsiveMobileWidth}) {
    &, &[data-reverse="true"] {
      flex-direction: column-reverse;
    }
  }
  div {
    display: flex;
  }
  img {
    flex: 1;
    aspect-ratio: 3 / 2;
    max-height: 130px;
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


