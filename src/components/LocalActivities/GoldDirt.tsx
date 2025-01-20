import styled, { css } from "styled-components"
import { isMobile } from "../../../styles/GlobalStyles"
import ExportedImage from "next-image-export-optimizer"
import Link from "next/link"
import { BsBoxArrowUpRight } from "react-icons/bs"

export default () => {
    return (
        <>
            <TwoImages>
                <ExportedImage
                  src="/images/local_attractions/restaurants/gold_dirt/photo_0004.jpg"
                  alt="Mountain View Photo"
                  width={195}
                  height={156}
                  loading="lazy"
                />
                <ExportedImage
                  src="/images/local_attractions/restaurants/gold_dirt/photo_0003.webp"
                  alt="Mountain View Photo"
                  width={195}
                  height={156}
                  loading="lazy"
                />
              </TwoImages>
              <CenterColumn>
                <h3>Gold Dirt Distillery </h3>
                <p>
                  Located just down the street from Pinehurst Lodge sits one of the finest distilleries of quality craft spirits. Open Wed - Sun, they offer a delicious variety of hand crafted cocktails and an array of spirits including Rose Gin, Lavender Infused Gin, Honey Spirit, High & Dry Gin and more.
                </p>
                <Link href="https://www.golddirtdistillery.com/" target="_blank">Explore Gold Dirt's Website<BsBoxArrowUpRight /></Link>
              </CenterColumn>
        </>
    )
}

const TwoColumns = styled.div`
  display: flex;
  flex-direction: row;
  &[data-reverse="true"] {
    flex-direction: row-reverse;
  }
  ${isMobile(css`
    &, &[data-reverse="true"] {
      flex-direction: column;
    }
  `)}
  
  img {
    width: 100px;
    aspect-ratio: 5 / 4;
  }
  div {
    flex: 1;
  }
`

const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;

  h3 {
    color: black;
    font-size: 20px;
    margin-bottom: 0px;
    text-align: center;
    ${isMobile(css`
      margin-top: 0px;
    
    `)}
    
  }
  p {
    color: black;
    font-size: 16px;
  }
  a {
    width: 80%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: var(--theme-color-3);
    text-decoration: none;
    margin: 10px 0px;
    gap: 10px;
    svg {
      width: 20px;
      height: 20px;
      color: white;
    }
    font-size: 15px;
    ${isMobile(css`
      font-size: 12px;
    
    `)}
    
  }
`
const TwoImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  gap: 10px;
  
  img {
    border-radius: 6px;
    flex: 1;
    object-fit: cover;
    width: 50%;
    
  }
`
