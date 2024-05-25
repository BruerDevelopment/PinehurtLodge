"use client";

import { useScrollPos } from "@/hooks/useScrollPos";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";

export default () => {
  let scroll = useScrollPos();
  let pathname = usePathname();
  if (pathname.includes("/area-guide")) return;
  if (scroll == 0 && pathname == "/") return;
  return (
    <Bar>
      <Link href="/"><h1>The Pinehurst Lodge</h1></Link>
      <div></div>
      <Link id="book_now" href="https://www.airbnb.com/rooms/1043540721907281297">Book Now</Link>
    </Bar>
  );
}
  
const Bar = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 40px;
  background-color: var(--theme-color-5);
  z-index: 100;
  box-shadow: 0px 0px 10px 0px black;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 10px;
  h1 {
    text-shadow: 0 4px 6px black;
    padding: 0px;
    padding-left: 0px;
    margin: 0px;
    color: white;
    font-size: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div {
    flex: 1;
  }
  #book_now {
    background-color: var(--theme-color-2);
    padding: 5px 10px;
    color: black;
    text-decoration: none;
    border-radius: 6px;
  }
`