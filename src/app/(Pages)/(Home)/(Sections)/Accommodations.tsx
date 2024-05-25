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
import { useIsMobile } from "@/hooks/useIsMobile";

export default () => {
  let Accom = [
    <div key="Accom 1">
      <span>Master Suite</span>
      <div className="images">
        <img src="#"></img>
        <img src="#"></img>
      </div>
      <div id="more">
        <Link href="/accommodations#">Learn More</Link>
      </div>
    </div>,
    <div key="Accom 2">
      <span>Bedroom 1</span>
      <div className="images">
        <img src="#"></img>
        <img src="#"></img>
      </div>
      <div id="more">
        <Link href="/accommodations#">Learn More</Link>
      </div>
    </div>,
    <div key="Accom 3">
    <span>Bedroom 2</span>
    <div className="images">
      <img src="#"></img>
      <img src="#"></img>
    </div>
    <div id="more">
      <Link href="/accommodations#">Learn More</Link>
    </div>
  </div>,
    <div key="Accom 4">
      <span>Bedroom 3</span>
      <div className="images">
        <img src="#"></img>
        <img src="#"></img>
      </div>
      <div id="more">
        <Link href="/accommodations#">Learn More</Link>
      </div>
    </div>
  ]
  let Amenities = [
    <div key="Amenities 1">
      <span>Fully Equipped Kitchen</span>
      <div className="images">
        <img src="#"></img>
        <img src="#"></img>
      </div>
      <div id="more">
        <Link href="/accommodations#">Learn More</Link>
      </div>
    </div>,
    <div key="Amenities 2">
      <span>Spacious Living Room</span>
      <div className="images">
        <img src="#"></img>
        <img src="#"></img>
      </div>
      <div id="more">
        <Link href="/accommodations#">Learn More</Link>
      </div>
    </div>,
    <div key="Amenities 3">
    <span>Work / Crafting Area</span>
    <div className="images">
      <img src="#"></img>
      <img src="#"></img>
    </div>
    <div id="more">
      <Link href="/accommodations#">Learn More</Link>
    </div>
  </div>,
    <div key="Amenities 4">
      <span>Games and Indoor Activities</span>
      <div className="images">
        <img src="#"></img>
        <img src="#"></img>
      </div>
      <div id="more">
        <Link href="/accommodations#">Learn More</Link>
      </div>
    </div>
  ]
  let is_mobile = useIsMobile();
  return (
    <>
      <Section>
        <h1 className="heading">Cozy Accommodations</h1>
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

        <h1 className="heading">With Top-Class Amenities</h1>
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
  max-width: 1200px;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 20px;  
  @media screen and (max-width: ${()=>responsiveMobileWidth}) {
    & {
      flex-direction: column;
    }
  }
  #column {
    display: flex;
    flex-direction: column;

    div { //line
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
          aspect-ratio: 1 / 1;
          border-radius: 6px;
          @media screen and (max-width: ${()=>responsiveMobileWidth}) {
            & {
              width: 50%;
            }
          }
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
          width: 100px;
          text-align: center;
        }
      }
    }
  }
`

