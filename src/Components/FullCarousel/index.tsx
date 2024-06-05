"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
export default (props: {
    images: {
        src:string
    }[],
    reloadRef?: MutableRefObject<() => void>,
    onImageSelected?: (id: number) => void,
    startingIndex:number,
}) => {
    let Wref = useRef<HTMLDivElement>(null);
    
    let [currIndex, setCurrIndex] = useState(0)
    
    useEffect(() => {
        if (Wref.current == null) return;
        let ref = Wref.current;
        
        ref.addEventListener("scroll", (e) => {
            let children = ref.childNodes;
            if (children == undefined) return;
            var parentRect = ref.getBoundingClientRect();
            let least_distance = null;
            let index = null;
            
            for (let i = 0; i < children.length; i++) {
                
                // Where is the child
                var childRect = (children[i] as any).getBoundingClientRect();
                const scrollTop = childRect.left - parentRect.left;
                if (scrollTop < 0) continue;
                if (least_distance == null) {
                    least_distance = scrollTop;
                    index = i;
                    continue;
                }
                if (scrollTop < least_distance) {
                    least_distance = scrollTop;
                    index = i;
                }
            }
            if (index != null) setCurrIndex(index)
            else setCurrIndex(currIndex)
        })
        let downPoint:false | {x:number, y:number, scrollLeft:number} = false;
        ref.addEventListener("pointerdown", (e) => {
            downPoint = { x: e.clientX, y: e.clientY, scrollLeft:ref.scrollLeft };
        })
        ref.addEventListener("pointerup", (e) => {
          downPoint = false;
          let children = ref.childNodes;
          if (children == undefined) return;
          var parentRect = ref.getBoundingClientRect();
          let least_distance = null;
          let index = null;
          
          for (let i = 0; i < children.length; i++) {
              
              // Where is the child
              var childRect = (children[i] as any).getBoundingClientRect();
              const scrollTop = (childRect.left + (childRect.right-childRect.left) / 2) - parentRect.left;
              if (scrollTop < 0) continue;
              if (least_distance == null) {
                  least_distance = scrollTop;
                  index = i;
                  continue;
              }
              if (scrollTop < least_distance) {
                  least_distance = scrollTop;
                  index = i;
              }
          }
          if (Wref.current == null) return;
          let ele = Wref.current.querySelector(`#slider_image_${index}`) as HTMLImageElement;
          if (ele == null) return;
          scrollParentToChild(Wref.current, ele);
        })
        ref.addEventListener("pointermove", (e) => {
            if (downPoint == false) return;
            let x_distance = e.clientX - downPoint.x;
            ref.scrollTo({
                left: downPoint.scrollLeft - x_distance
            })
        })
    }, [])
    useEffect(() => {
        if (Wref.current == null) return;
        let ele = Wref.current.querySelector(`#slider_image_${props.startingIndex}`) as HTMLImageElement;
        if (ele == null) return;
        scrollParentToChild(Wref.current, ele);
    }, [props.startingIndex])
    return (
        <Wrapper>
            <div id="images" ref={Wref}>

            {props.images.map((img, i) => (
                <img
                    key={img.src}
                    src={img.src}
                    id={`slider_image_${i}`}
                    draggable={false}
                    onClick={() => {
                        props.onImageSelected?.(i);
                    }}
                />
            ))}
            </div>
            <div
                id="forward"
                onClick={() => {
                    if (Wref.current == null) return;
                    let ele = Wref.current.querySelector(`#slider_image_${currIndex + 1}`) as HTMLImageElement;
                    if (ele != null) {
                        setCurrIndex(currIndex + 1)
                        scrollParentToChild(Wref.current, ele);
                        return;   
                    }
                    ele = Wref.current.querySelector(`#slider_image_${currIndex}`) as HTMLImageElement;
                    setCurrIndex(currIndex)
                    scrollParentToChild(Wref.current, ele);
                    
                }}
            ><FaChevronRight /></div>
            <div
                id="backwards"
                onClick={() => {
                    if (Wref.current == null) return;
                    let ele = Wref.current.querySelector(`#slider_image_${currIndex - 1}`) as HTMLImageElement;
                    if (ele != null) {
                        setCurrIndex(currIndex - 1)
                        scrollParentToChild(Wref.current, ele);
                        return;   
                    }
                    ele = Wref.current.querySelector(`#slider_image_${currIndex}`) as HTMLImageElement;
                    setCurrIndex(currIndex)
                    scrollParentToChild(Wref.current, ele);
                }}
            ><FaChevronLeft /></div>
        </Wrapper>
    );
}

function scrollParentToChild(parent:HTMLElement, child:HTMLElement) {
    // Where is the parent on page
    var parentRect = parent.getBoundingClientRect();
  
    // Where is the child
    var childRect = child.getBoundingClientRect();
  
    // Should we scroll using top or bottom? Find the smaller ABS adjustment
    const scrollTop = childRect.left - parentRect.left;
    parent.scrollLeft += scrollTop;  
  }

const Wrapper = styled.div`
    position: relative;
    height: 100%;
    #images {
        overflow-x: scroll;
        height: 100%;
        width: 100%;
        position: relative;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        display: flex;
        gap: 20px;
        img {
            height: 100%;
            min-width:100%;
            object-fit: contain;
        }
    }
    #forward, #backwards {
        position: absolute;
        top: 0px;
        bottom: 0px;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        svg {
            width: 50px;
            height: 50px;
        }
    }
    #forward {
        right: 0px;

    }
    #backwards {
        left: 0px;
    }
`
