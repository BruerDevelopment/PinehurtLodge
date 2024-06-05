"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaAirbnb } from "react-icons/fa";
import { isMobile } from "../../../styles/GlobalStyles";
export default () => {
  
  let pathname = usePathname();
  if (pathname.includes("/area-guide")) return
  return (
    <Footer>
      <div id="socials_links">
        <Link href="https://www.airbnb.com/rooms/1043540721907281297" target="_blank">
          <FaAirbnb />
        </Link>
        <Link href="https://www.instagram.com/pinehurst_lodge_co" target="_blank">
          <FaInstagram />
        </Link>
      </div>
      <span id="copywrite">&copy; 2024 Big Pinehurst LLP | All Rights Reserved</span>
    </Footer>
  );
}

const Footer = styled.div`
  background-color: var(--theme-color-4);
  height: 300px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  #socials_links {
    display: flex !important;
    gap: 10px;
    svg {
      width: 50px;
      height: 50px;
      color: white;
    }
  }
  #copywrite {
    
    color: white;
    font-size: 23px;
    ${isMobile(css`
      font-size: 16px;
    `)}
  }
`
