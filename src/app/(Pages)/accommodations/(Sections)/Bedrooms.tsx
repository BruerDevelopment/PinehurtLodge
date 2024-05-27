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
        <h1 className="heading">Pinehurst Lodge <br /> Accommodations & Amenities</h1>
        <TwoColumns data-reverse="true">
          <div>
            <h3>Upstairs Master Suite</h3>
            <div>
              <img src="#" />
              <img src="#" />
            </div>
            <h3>Upstairs Queen Bedroom</h3>
            <div>
              <img src="#" />
              <img src="#" />
            </div>
          </div>
          <div>
            <h2 id="UpstairsBedrooms">Upstairs Bedrooms</h2>
            <p>
              The Master Suite upstairs bedroom comes equipped with a king-size bed, while the other upstairs bedroom comes with a queen. 
            </p>
            <p>
              Both rooms have a dresser for you to set your suitcase on and unpack your clothes.
            </p>
            <p>
              The Master Suite comes with a desk that can be used as a remote work space, an en suite bathroom and an amazing view!
            </p>
          </div>
        </TwoColumns>
        <TwoColumns>
          <div>
            <h3>Downstairs Master Suite</h3>
            <div>
              <img src="#" />
              <img src="#" />
            </div>
            <h3>Downstairs Queen & Bunks</h3>
            <div>
              <img src="#" />
              <img src="#" />
            </div>
          </div>
          <div>
            <h2 id="DownstairsBedrooms">Downstairs Bedrooms</h2>
            <p>
              The Downstairs Master Suite has a queen sized bed along with a desk, a large closet and a spectacular view!
            </p>
            <p>
              The other downstairs bedroom has a queen bed and two twin beds (bunked) with stairs for easy access. There is also a dresser, chair and hooks with space for your suitcases and clothing.
            </p>
            
          </div>
        </TwoColumns>
        <MoreLink>
          <Link href="#">View More Of the Crafting Setup <br /> In Our Photos Gallery</Link>
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
      flex-direction: column;
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
    scroll-margin-top: 300px;
  }
  h2 {
    margin-bottom: 0px;
    scroll-margin-top: 300px;
  }
  & > div {
    padding: 20px;
    box-sizing: border-box;
    flex: 1;
    flex-direction: column;
    gap: 20px;
    & > div {
      gap: 20px;
    }
  }
`


