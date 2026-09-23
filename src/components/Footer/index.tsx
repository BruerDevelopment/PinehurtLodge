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
  let email: { [key: string]: string } = {
    "subject":"Subtect Title",
    "body":
`
Hi,

I am reaching out to you from the Pinehurst Lodeg Website with a questions for you.

[Question or concern]

This is regarding my booking:
Confirmation Number: #00000000

[Please delete one and fill in the necassary info]
I would like to be contacted through the email i've sent this message from.

Please contact me through the following email:
`,
  }
  let pathname = usePathname();
  if (pathname.includes("/area-guide/map")) return
  return (
    <Footer>
      {/* <div>
        <a style={{ "color": "white" }} href={`mailto:example@example.com?${Object.keys(email).reduce((s, n) => {
          if (s == "") return n + "=" + email[n].replaceAll(" ", "%20").replaceAll("\n","%0A");
          return `${s}&${n}=` + email[n].replaceAll(" ", "%20").replaceAll("\n","%0A")
        }, "").trim()}`}
        
        >Contact US</a>
      </div> */}
      <div id="socials_links">
        <Link href="https://checkout.lodgify.com/pinehurst-lodge/846898/reservation?currency=USD" target="_blank">
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
