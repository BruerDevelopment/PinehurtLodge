"use client";

import styled from "styled-components";
import DesktopClipart from "@/assets/DesktopClipart.svg"
import { CiServer } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import Link from "next/link";
import { Section } from "../../../../../styles/Section";

export default () => {
  return (
    <>
      <Section varient={2}>
        <h1 className="section-heading" id="Activities">Games & Activities at the Pinehurst Lodge</h1>
        <Content>
          <div id="images">
            <img alt="" src="/HousePhotos/downstairs_living/pool_table4.jpg"/>
            <img alt="" src="/HousePhotos/downstairs_living/game_shelf.jpg"/>
            <img alt="" src="/HousePhotos/downstairs_living/pool_20.jpg"/>
          </div>
          <div id="text">
            <h2 className="section-heading">Pool Table, 7-Person Hot Tub, Board-Games, and Two Smart TVs</h2>
            <p>
              Pinehurst Lodge provides plenty of activities for after outdoor adventures and rest days.  Each of the two gathering spaces is equipped with a Smart TV where you can sign into all of your streaming services, perfect for movie nights or background music while socializing, scrapbooking, crafting or gaming.
            </p>
            <p>
              Enjoy a large social Arctic Spas hot tub with a mountain view. Cleaned before every stay, with maintenance instructions and supplies detailed in the welcome package, this brand new, top-of-the-line spa is the perfect place to unwind and relax with a beautiful view of the Continental Divide, the surrounding mountains and the Rollinsville valley below.
            </p>
          </div>
        </Content>
        <MoreLink>
          <Link href="/gallery#entertainment">View More Of The Entertainment <br /> In Our Photos Gallery</Link>
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

const Content = styled.div`
  width: 90%;
  max-width: 900px;
  #images {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    img {
      flex: 1;
      aspect-ratio: 3 / 2;
      max-height: 200px;
      background-color: red;
      width: 30%;
      object-fit: cover;
      border-radius: 6px;

    }
  }
  #text {
    h2 {
      text-align: left;
    }
  }
`