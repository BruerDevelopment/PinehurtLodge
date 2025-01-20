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
import { useIsMobile } from "@/hooks/useIsMobile";
import { Section } from "../../../../../styles/Section";
import { isMobile } from "../../../../../styles/GlobalStyles";
import ExportedImage from "next-image-export-optimizer";

export default () => {
  let Accom = [
    <div key="Accom 1">
      <span>Upstairs Master Suite</span>
      <div className="images">
        <ExportedImage
          src="/images/pro_house/photo_0027.jpg"
          alt="Upstairs Master Suite"
          width={150}
          height={120}
          loading="lazy"
        />
        <ExportedImage
          src="/images/pro_house/photo_0025.jpg"
          alt="Upstairs Master Suite"
          width={150}
          height={120}
          loading="lazy"
        />
      </div>
      <div id="more">
        <Link href="/accommodations#UpstairsBedrooms">Learn More</Link>
      </div>
    </div>,
    <div key="Accom 2">
      <span>Upstairs Queen</span>
      <div className="images">
        <ExportedImage
          src="/images/pro_house/photo_0029.jpg"
          alt="Upstairs Master Suite"
          width={150}
          height={120}
          loading="lazy"
        />
        <ExportedImage
          src="/images/am_house/photo_0001.jpg"
          alt="Upstairs Queen"
          width={150}
          height={120}
          loading="lazy"
        />
      </div>
      <div id="more">
        <Link href="/accommodations#UpstairsBedrooms">Learn More</Link>
      </div>
    </div>,
    <div key="Accom 3">
    <span>Downstairs Master</span>
    <div className="images">
      <ExportedImage
        src="/images/am_house/photo_0002.jpg"
        alt="Downstairs Master Suite"
        width={150}
        height={120}
        loading="lazy"
      />
      <ExportedImage
        src="/images/pro_house/photo_0041.jpg"
        alt="Downstairs Master Suite"
        width={150}
        height={120}
        loading="lazy"
      />
    </div>
    <div id="more">
      <Link href="/accommodations#DownstairsBedrooms">Learn More</Link>
    </div>
  </div>,
    <div key="Accom 4">
      <span>Downstairs Queen & Bunks</span>
      <div className="images">
        <ExportedImage
          src="/images/pro_house/photo_0039.jpg"
          alt="Upstairs Master Suite"
          width={150}
          height={120}
          loading="lazy"
        />
        <ExportedImage
          src="/images/pro_house/photo_0040.jpg"
          alt="Upstairs Master Suite"
          width={150}
          height={120}
          loading="lazy"
        />
      </div>
      <div id="more">
        <Link href="/accommodations#DownstairsBedrooms">Learn More</Link>
      </div>
    </div>,
    <div key="Accom 5" style={{"marginTop":"40px"}}>
      <span style={{"justifyContent":"center", "display":"flex"}}>Trundled Twins to King</span>
      <div className="images">
        <ExportedImage
          src="/images/am_house/photo_0005.jpg"
          alt="Trundled Bed Photo"
          width={150}
          height={120}
          loading="lazy"
        />
        <ExportedImage
          src="/images/am_house/photo_0006.jpg"
          alt="Trundled Bed Photo"
          width={150}
          height={120}
          loading="lazy"
        />
      </div>
      <div id="more">
        <Link href="/accommodations#DownstairsBedrooms">Learn More</Link>
      </div>
    </div>
  ]
  let Amenities = [
    <div key="Amenities 1">
      <span>2 Fully Equipped Kitchens</span>
      <div className="images">
        <ExportedImage
          src="/images/am_house/photo_0007.jpg"
          alt="Upstairs Kitchen Photo"
          width={150}
          height={120}
          loading="lazy"
        />
        <ExportedImage
          src="/images/pro_house/photo_0038.jpg"
          alt="Downstairs Kitchen Photo"
          width={150}
          height={120}
          loading="lazy"
        />
      </div>
      <div id="more">
        <Link href="/accommodations#Kitchens">Learn More</Link>
      </div>
    </div>,
    <div key="Amenities 2">
      <span>2 Spacious Living Rooms</span>
      <div className="images">
        <ExportedImage
          src="/images/pro_house/photo_0036.jpg"
          alt="Upstairs Living Room Photo"
          width={150}
          height={120}
          loading="lazy"
        />
        <ExportedImage
          src="/images/pro_house/photo_0011.jpg"
          alt="Downstairs Living Room Photo"
          width={150}
          height={120}
          loading="lazy"
        />
      </div>
      <div id="more">
        <Link href="/accommodations#LivingRooms">Learn More</Link>
      </div>
    </div>,
    <div key="Amenities 3">
    <span>Scrapbooking / Crafting Area</span>
    <div className="images">
      <ExportedImage
        src="/images/am_house/photo_0009.jpg"
        alt="Scrapbooking Photo"
        width={150}
        height={120}
        loading="lazy"
      />
      <ExportedImage
        src="/images/am_house/photo_0008.jpg"
        alt="Crafting Area Photo"
        width={150}
        height={120}
        loading="lazy"
      />
    </div>
    <div id="more">
      <Link href="/accommodations#Scrapbooking">Learn More</Link>
    </div>
  </div>,
    <div key="Amenities 4">
      <span>Hot Tub & Pool Table</span>
      <div className="images">
        <ExportedImage
          src="/images/pro_house/photo_0033.jpg"
          alt="Hot Tub Photo"
          width={150}
          height={120}
          loading="lazy"
        />
        <ExportedImage
          src="/images/pro_house/photo_0031.jpg"
          alt="Pool Table Photo"
          width={150}
          height={120}
          loading="lazy"
        />
      </div>
      <div id="more">
        <Link href="/accommodations#Activities">Learn More</Link>
      </div>
    </div>
  ]
  let is_mobile = useIsMobile();
  return (
    <>
      <Section varient={2}>
        <h1 className="section-heading">Deluxe Accommodations</h1>
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
        <PictureCollumns>
          <div id="column">
            {is_mobile == false ? (
              <>
                {Accom[4]}
              </>
            ) : (
              <>
                {Accom[4]}
              </>
            )}
          </div>
         
        </PictureCollumns>

        <MarginHeading className="section-heading">Top-Tier Amenities</MarginHeading>
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
const MarginHeading = styled.h1`
  margin-top: 40px;
`
const PictureCollumns = styled.div`
  max-width: 900px;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 20px;  
  ${isMobile(css`
    flex-direction: column;
  `)}
  h1.section-heading {
    margin-top: 20px;
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
      span {
        text-align: center;
      }

      .images {
        display: flex;
        flex-direction: row;
        gap: 10px;
        img {
          width: 150px;
          aspect-ratio: 5/4;
          border-radius: 6px;
          object-fit: cover;
          ${isMobile(css`
            width: 50%;
          `)}
        }
      }
      #more {
        display: flex;
        justify-content: center;
        flex-direction: row;
        a {
          background-color: var(--theme-color-3);
          text-decoration: none;
          color: white;
          padding: 10px;
          border-radius: 6px;
          width: 130px;
          text-align: center;
        }
      }
    }
  }
`

