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
                  src="/images/local_attractions/red_rocks/photo_0002.jpg"
                  alt="Mountain View Photo"
                  width={195}
                  height={156}
                  loading="lazy"
                />
                <ExportedImage
                  src="/images/local_attractions/red_rocks/photo_0003.jpg"
                  alt="Mountain View Photo"
                  width={195}
                  height={156}
                  loading="lazy"
                />
              </TwoImages>
              <CenterColumn>
                <h3>Red Rocks Park & Amphitheatre</h3>
                <p>
                  One of the most beautiful and renowned concert venues in the United States, Red Rocks Park & Amphitheatre draws a vast array of well-known artists from around the world. At 36 miles away, it is easily accessible to the Pinehurst Lodge.
                </p>
                <Link href="https://www.redrocksonline.com/" target="_blank">Visit Redrocks Online <BsBoxArrowUpRight /></Link>
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
