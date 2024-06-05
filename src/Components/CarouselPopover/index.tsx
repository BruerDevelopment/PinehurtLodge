"use client";

import styled from "styled-components";
import { DIALOG_HOOK } from "../../hooks/useDialog";
import { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FullCarousel from "../FullCarousel";
import { ImCross } from "react-icons/im";
export default (props: {
  state: [number, Dispatch<SetStateAction<number>>],
  images: {
    heading?:string,
    src:string
  }[],
  controls: DIALOG_HOOK
}) => {
  let newSTate = useState(0);
  let [currIndex, setCurrIndex] = props.state != undefined ? props.state : newSTate;
  let imgCount = props.images.length;
  let atBeginning = (currIndex - 1 < 0);
  let atEnd = (currIndex + 1 >= imgCount);
  let currImage = useMemo(() => props.images[currIndex], [currIndex]);
  let reloadRef = useRef<()=>void>(()=>{})
  useEffect(() => {
    props.controls.addEventListener("open", () => {
      
      reloadRef.current();
    })
  }, [])
  if (currImage == undefined) return;
  return (
    <Dialog ref={props.controls.ref}>
      <div>
        <button id="exit" onClick={()=>props.controls.close()}><ImCross /></button>
        {currImage.heading && <h1>{ currImage.heading}</h1>}
        <FullCarousel startingIndex={currIndex}  reloadRef={reloadRef} images={props.images} />
      </div>
    </Dialog>
  );
}

const Dialog = styled.dialog`
  width: 100vw;
  height: 100vh;
  padding: 0px;
  border: 0px;
  outline: none;
  background: transparent;

  &::backdrop {
    background-color: black;
    opacity: 0.6;
  }
  #exit {
    color: white;
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    outline: none;
    border: 0px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  & > div {
    background-color: var(--theme-color-5);
    border-radius: 6px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      color: white;
    }
    & > div {
      width: 100%;
      height: 90%;
      background-color: black;
      color: white;
    }
  }
  
`
