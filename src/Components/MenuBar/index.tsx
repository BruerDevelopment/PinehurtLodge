"use client";

import { responsiveMobileWidth } from "@/app/globalStyles";
import { useMenuState } from "@/hooks/useMenuState";
import { useScrollPos } from "@/hooks/useScrollPos";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default () => {
  let scroll = useScrollPos();
  let pathname = usePathname();
  let router = useRouter();
  let [menuOpen, setMenuOpen] = useMenuState();
  let nav = (el: any) => {
    let href = el.getAttribute("href");
    router.push(href)
    setMenuOpen(false);
  }
  //if (pathname.includes("/area-guide")) return;
  if (scroll == 0 && pathname == "/") return;
  return (
    <>
      <Bar>
        <Link href="/"><h1>The Pinehurst Lodge</h1></Link>
        <div id="spacer"></div>
        <div id="nav"></div>
        <Link id="book_now" href="https://www.airbnb.com/rooms/1043540721907281297">Book Now</Link>
        <Menu onClick={() => {
          setMenuOpen(!menuOpen);
        }} >
          <div></div>
          <div></div>
          <div></div>
        </Menu>
      </Bar>
      <MobileMenu data-open={menuOpen}>
        <Link href="/" onClick={(e:any)=>nav(e.target)}>Home</Link>
        <Link href="/accommodations" onClick={(e:any)=>nav(e.target)}>Accommodations</Link>
        <Link href="/area-guide" onClick={(e:any)=>nav(e.target)}>Area Guide</Link>
      </MobileMenu>
    </>
  );
}

const Menu = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 30px;
  margin-left: 10px;
  padding: 0px 10px;

  div {
    width: 100%;
    height: 5px;
    background-color: black;
  }
  @media screen and (max-width: ${()=>responsiveMobileWidth}) {
      & {
        display: flex;
      }
    }
`

const MobileMenu = styled.div`
  position: fixed;
  top: 0px;
  left: 100%;
  bottom: 0px;
  width: 100vw;
  z-index: 101;
  background-color: var(--theme-color-5);
  transition: left 0.25s;
  display: flex;
  flex-direction: column;
  &[data-open="true"] {
    left: 0px;
  }
  a {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
  }
`
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
    @media screen and (max-width: ${()=>responsiveMobileWidth}) {
      & {
        font-size: 16px;
      }
    }
  }
  div#nav {
    flex: 1;
    @media screen and (max-width: ${()=>responsiveMobileWidth}) {
      & {
        display: none;
      }
    }
  }
  div#spacer {
    flex: 1;
    display: none;
    @media screen and (max-width: ${()=>responsiveMobileWidth}) {
      & {
        display: flex;
      }
    }
  }
  #book_now {
    background-color: var(--theme-color-2);
    padding: 5px 10px;
    color: black;
    text-decoration: none;
    border-radius: 6px;
  }
`