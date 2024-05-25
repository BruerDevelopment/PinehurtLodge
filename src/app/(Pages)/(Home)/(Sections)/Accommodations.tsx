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
        <h1 className="heading">Cozy Accommodations</h1>
        <PictureCollumns>
          <div id="column">
            <div>
              <span>Master Suite</span>
              <div className="images">
                <img src="#"></img>
                <img src="#"></img>
              </div>
              <div id="more">
                <Link href="/accommodations#">Learn More</Link>
              </div>
            </div>
            <div>
              <span>Bedroom 2</span>
              <div className="images">
                <img src="#"></img>
                <img src="#"></img>
              </div>
              <div id="more">
                <Link href="/accommodations#">Learn More</Link>
              </div>
            </div>
          </div>
          <div id="column">
            <div>
              <span>Bedroom 1</span>
              <div className="images">
                <img src="#"></img>
                <img src="#"></img>
              </div>
              <div id="more">
                <Link href="/accommodations#">Learn More</Link>
              </div>
            </div>
            <div>
              <span>Bedroom 3</span>
              <div className="images">
                <img src="#"></img>
                <img src="#"></img>
              </div>
              <div id="more">
                <Link href="/accommodations#">Learn More</Link>
              </div>
            </div>

          </div>
        </PictureCollumns>

        <h1 className="heading">With Top-Class Amenities</h1>
        <PictureCollumns>
          <div id="column">
            <div>
              <span>Master Suite</span>
              <div className="images">
                <img src="#"></img>
                <img src="#"></img>
              </div>
              <div id="more">
                <Link href="/accommodations#">Learn More</Link>
              </div>
            </div>
            <div>
              <span>Bedroom 2</span>
              <div className="images">
                <img src="#"></img>
                <img src="#"></img>
              </div>
              <div id="more">
                <Link href="/accommodations#">Learn More</Link>
              </div>
            </div>
          </div>
          <div id="column">
            <div>
              <span>Bedroom 1</span>
              <div className="images">
                <img src="#"></img>
                <img src="#"></img>
              </div>
              <div id="more">
                <Link href="/accommodations#">Learn More</Link>
              </div>
            </div>
            <div>
              <span>Bedroom 3</span>
              <div className="images">
                <img src="#"></img>
                <img src="#"></img>
              </div>
              <div id="more">
                <Link href="/accommodations#">Learn More</Link>
              </div>
            </div>

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
  #column {
    display: flex;
    flex-direction: column;
    div { //line
      display: flex;
      flex-direction: column;
      gap: 10px;

      .images {
        display: flex;
        flex-direction: row;
        gap: 10px;
        img {
          width: 150px;
          height: 150px;
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

