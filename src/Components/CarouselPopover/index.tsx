"use client";

import styled from "styled-components";
import { DIALOG_HOOK } from "../../hooks/useDialog";
import { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
  let [translateAmount, setTranslateAmount] = useState(0);
  let mouseRef = useRef<false | { x: number, y: number }>(false);
  let amountRef = useRef(0);
  let currImage = useMemo(() => props.images[currIndex], [currIndex]);
  return (
    <Dialog ref={props.controls[0]}>
      <div>
        {currImage.heading && <h1>{ currImage.heading}</h1>}
        <div
          id="image"
          onMouseDown={(e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY }
            amountRef.current = 0;
          }}
          onMouseUp={(e) => {
            mouseRef.current = false
            if (amountRef.current < -10) {
              if (!atEnd) return setCurrIndex(currIndex + 1)
            } else if (amountRef.current > 10) {
              if (!atBeginning) return setCurrIndex(currIndex - 1)
            }
            let nodes: HTMLElement[]= ((e.target as HTMLElement).parentElement?.childNodes) as any;
            if (nodes == undefined) return;
            amountRef.current = 0
            for (let i = 0; i < nodes.length; i++) {
              nodes[i].style.transform = `translateX(calc(calc(${currIndex} * -100%) + ${amountRef.current}px)`
            }
          }}
          onMouseLeave={() => {
            mouseRef.current = false
          }}
          onMouseMove={(e) => {
            if (mouseRef.current == false) return;
            let x_distance = e.clientX - mouseRef.current.x;
            let nodes: HTMLElement[]= ((e.target as HTMLElement).parentElement?.childNodes) as any;
            if (nodes == undefined) return;
            amountRef.current += x_distance
            mouseRef.current = {x:e.clientX, y:e.clientY}
            for (let i = 0; i < nodes.length; i++) {
              nodes[i].style.transform = `translateX(calc(calc(${currIndex} * -100%) + ${amountRef.current}px)`
            }
          }}
        >
          {props.images.map((img, i) => (
            <img draggable={false}  style={{
              "left":`calc(${i} * 100%)`,
              "transform": `translateX(calc(calc(${currIndex} * -100%)`
            }} src={img.src}></img>
          ))}
        </div>
        <div
          id="backwards"
          style={{ "display": atEnd ? "none" : "" }}
          onClick={() => {
            if (atEnd) return;
            setCurrIndex(currIndex + 1)
          }}
        ><FaChevronRight /></div>
        <div
          id="forward"
          style={{"display": atBeginning ? "none" : ""}}
          onClick={() => {
            if (atBeginning) return;
            setCurrIndex(currIndex - 1)
          }}
        >
          <FaChevronLeft />
        </div>
      </div>
    </Dialog>
  );
}

const Dialog = styled.dialog`
  width: fit-content;
  height: fit-content;
  padding: 0px;
  border: 0px;
  outline: none;
  background: transparent;
  &::backdrop {
    background-color: black;
    opacity: 0.6;
  }
  h1 {
    color: white;
    text-decoration: none;
    font-size: 30px;
    text-shadow: 0 4px 6px black;
    text-align: center;
  }
  & > div {
    position: relative;
    padding: 0px 40px;
  }
  div#image {
    height: 80vh;
    aspect-ratio: 3 / 2;
    position: relative;
    overflow: clip;
  }
  img {
    transition: transform 0.2s linear;
    object-fit: contain;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  div#forward, div#backwards {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      svg {
        opacity: 1;
      }
    }
    svg {
      opacity: 0.2;
      width: 100px;
      height: 100px;
      color: white;
    }
  }

  div#forward {
    left: 0px;
    svg {
      left: 0px;
    }
  }
  div#backwards {
    right: 0px;
    svg {
      right: 0px;
    }
  }
`
