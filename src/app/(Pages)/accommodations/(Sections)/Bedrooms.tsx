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
import ExportedImage from "next-image-export-optimizer";

export default () => {
  return (
    <>
      <Section varient={2}>
        <h1 className="section-heading">Pinehurst Lodge <br /> Accommodations & Amenities</h1>
        <h2 className="section-heading">Bedrooms</h2>
        <TwoColumns data-reverse="true">
          <div>
            <h3>Upstairs Master Suite</h3>
            <div>
              <ExportedImage
                src="/images/pro_house/photo_0027.jpg"
                alt="Upstairs Master Suite"
                width={173}
                height={130}
                loading="lazy"
              />
              <ExportedImage
                src="/images/pro_house/photo_0025.jpg"
                alt="Upstairs Master Suite"
                width={173}
                height={130}
                loading="lazy"
              />
            </div>
            <h3>Upstairs Queen Bedroom</h3>
            <div>
              <ExportedImage
                src="/images/pro_house/photo_0029.jpg"
                alt="Upstairs Queen Bedroom"
                width={173}
                height={130}
                loading="lazy"
              />
              <ExportedImage
                src="/images/am_house/photo_0018.jpg"
                alt="Upstairs Queen Bedroom"
                width={173}
                height={130}
                loading="lazy"
              />
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
            <ExportedImage
                src="/images/am_house/photo_0019.jpg"
                alt="Upstairs Queen Bedroom"
                width={173}
                height={130}
                loading="lazy"
              />
              <ExportedImage
                src="/images/pro_house/photo_0041.jpg"
                alt="Upstairs Queen Bedroom"
                width={173}
                height={130}
                loading="lazy"
              />
            </div>
            <h3>Downstairs Queen & Bunks</h3>
            <div>
              <ExportedImage
                src="/images/pro_house/photo_0039.jpg"
                alt="Downstairs Queen & Bunks Photo"
                width={173}
                height={130}
                loading="lazy"
              />
              <ExportedImage
                src="/images/pro_house/photo_0040.jpg"
                alt="Downstairs Queen & Bunks Photo"
                width={173}
                height={130}
                loading="lazy"
              />
            </div>
            <h3>Trundle Bed in Downstairs Living Room</h3>
            <div>
              <ExportedImage
                src="/images/am_house/photo_0005.jpg"
                alt="Trundle Bed Photo"
                width={173}
                height={130}
                loading="lazy"
              />
              <ExportedImage
                src="/images/am_house/photo_0006.jpg"
                alt="Trundle Bed Photo"
                width={173}
                height={130}
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <h2 id="DownstairsBedrooms">Downstairs Bedrooms</h2>
            <div className="GapP">
              
            <p>
              The Downstairs Master Suite has a queen sized bed along with a desk, a large closet and a spectacular view!
            </p>
            <p>
              The other downstairs bedroom has a queen bed and two twin beds (bunked) with stairs for easy access. There is also a dresser, chair and hooks with space for your suitcases and clothing.
            </p>
            <p>
              Often arranged as a sofa/daybed in the downstairs living room, this trundle bed can be set up as a king size bed or two separated twins.
            </p>
            </div>
          </div>
        </TwoColumns>
        <MoreLink>
          <Link href="/gallery#bedrooms">View More Of the Bedrooms <br /> In Our Photos Gallery</Link>
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
      flex-direction: column;
    }
  `)}
  
  .GapP {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin-bottom: 35px;
    ${isMobile(css`
      gap: 10px;
    `)}
    
  }
  div {
    display: flex;
  }
  img {
    //flex: 1;
    max-height: 130px;
    //width: 100%;
    object-fit: cover;
    border-radius: 6px;
    width: 50%;

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


