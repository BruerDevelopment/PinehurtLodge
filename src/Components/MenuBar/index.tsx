"use client";

import { responsiveMobileWidth } from "@/app/globalStyles";
import { useMenuState } from "@/hooks/useMenuState";
import { useScrollPos } from "@/hooks/useScrollPos";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
function getDialog(id:string) {
  let el: any = document.getElementById(id);
  if (el == null) return;
  let dialog: HTMLDialogElement = el;
  return dialog;
}
export default () => {
  let scroll = useScrollPos();
  let pathname = usePathname();
  let router = useRouter();
  let [menuOpen, setMenuOpen] = useMenuState();
  let nav = (el: any) => {
    let href = el.getAttribute("href");
    router.push(href)
    setMenuOpen(false);
    getDialog("exper_dialog")?.close();
  }
  //if (pathname.includes("/area-guide")) return;
  if (scroll == 0 && pathname == "/") return;
  return (
    <>
      <Bar aria-hidden={!menuOpen}>
        <Link href="/"><h1>The Pinehurst Lodge</h1></Link>
        <div id="spacer"></div>
        <div id="nav">
          <Link href="/" onClick={(e: any) => nav(e.target)}>Home</Link>
          <MenuDropdown
            onClick={() => {
              getDialog("exper_dialog")?.show();
            }}
            onMouseEnter={() => {
              getDialog("exper_dialog")?.show();
            }}
            onMouseLeave={() => {
              getDialog("exper_dialog")?.close();
            }}
            
          >
            <span>Experiences</span>
            <dialog id="exper_dialog" open={false}
              onMouseEnter={() => {
                getDialog("exper_dialog")?.show();
              }}
              onMouseLeave={() => {
                getDialog("exper_dialog")?.close();
              }}
            >
              <Link href="/outdoor-rec" onClick={(e:any)=>nav(e.target)}>Outdoor Recreation “Base-Camp”</Link>
              <Link href="/scrapbooking-crafting-retreat" onClick={(e:any)=>nav(e.target)}>Crafting Retreat</Link>
              <Link href="/cozy-ski-cabin" onClick={(e:any)=>nav(e.target)}>Ski Lodge</Link>
            </dialog>
          </MenuDropdown>
          <Link href="/gallery" onClick={(e:any)=>nav(e.target)}>Gallery</Link>
          <Link href="/accommodations" onClick={(e:any)=>nav(e.target)}>Accommodations</Link>
          <Link href="/area-guide" onClick={(e:any)=>nav(e.target)}>Area Guide</Link>
        </div>
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
        <h1>The Pinehurst Lodge</h1>
        <Link href="/" onClick={(e: any) => nav(e.target)}>Home</Link>
        <div className="subtab">
          <span>Experiences</span>
          <Link href="/outdoor-rec" onClick={(e:any)=>nav(e.target)}>Outdoor Recreation “Base-Camp”</Link>
          <Link href="/scrapbooking-crafting-retreat" onClick={(e:any)=>nav(e.target)}>Crafting Retreat</Link>
          <Link href="/cozy-ski-cabin" onClick={(e:any)=>nav(e.target)}>Ski Lodge</Link>
        </div>
        <Link href="/gallery" onClick={(e:any)=>nav(e.target)}>Gallery</Link>
        <Link href="/accommodations" onClick={(e:any)=>nav(e.target)}>Accommodations</Link>
        <Link href="/area-guide" onClick={(e: any) => nav(e.target)}>Area Guide</Link>
        <div id="link_buttons">

          <Link href="https://www.airbnb.com/rooms/1043540721907281297" id="book_now">Book Now</Link>
          <Link href="/area-guide" id="instagram"><FaInstagram />Follow Us</Link>
        </div>
      </MobileMenu>
    </>
  );
}

const MenuDropdown = styled.div`
  position: relative;
  dialog {
    &[open=""] {
      display: flex;
    }
    position: absolute;
    top: 100%;
    left: 0px;
    flex-direction: column;
    background-color: var(--theme-color-5);
    z-index: 102;
    box-shadow: 0px 10px 10px 0px black;
    border: 0px;
    padding: 0px;
    
    a {
      min-height: 20px;
      padding: 10px;
      width: 230px;
    }
  }
  
`

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
  h1 {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 30px;
    text-shadow: 0 4px 6px black;
  }
  a {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: start;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 30px;
    padding: 10px 0px;
    padding-left: 20px;
  }
  .subtab {
    span {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: start;
      align-items: center;
      color: white;
      font-size: 30px;
      padding: 10px 0px;
      padding-left: 20px;
    }
    a {
      padding-left: 40px;
      font-size: 20px;
    }
  }
  #link_buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;

    #book_now {
      width: 60%;
      background-color: var(--theme-color-2);
      padding: 5px 10px;
      color: black;
      text-decoration: none;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #instagram {
      width: 60%;
      background-color: var(--theme-color-4);
      padding: 5px 10px;
      color: black;
      text-decoration: none;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 20px;
      color: white;
      svg {
        width: 30px;
        height: 30px;
        color: white;
      }
    }
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
    display: flex;
    justify-content: end;
    padding-right: 20px;
    @media screen and (max-width: ${()=>responsiveMobileWidth}) {
      & {
        display: none;
      }
    }
    a, div {
      color: white;
      text-decoration: none;
      cursor: pointer;
      min-height: 20px;
      padding: 10px;

      &:hover {
        background-color: var(--theme-color-4);
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