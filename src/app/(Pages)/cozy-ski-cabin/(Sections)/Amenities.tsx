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
  
  let is_mobile = useIsMobile();
  return (
    <>
      <Section>
        <h1 className="heading">Amazing Amenities For All Kinds of Scrapbooking and Crafts</h1>
        
      </Section>
    </>
  );
}

const PictureCollumns = styled.div`
  max-width: 900px;
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
    
    & > div { //line
      margin-top: 40px;
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
          aspect-ratio: 3/2;
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

