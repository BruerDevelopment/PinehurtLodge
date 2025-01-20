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
                src="/images/local_attractions/towns/nederland/photo_0002.jpg"
                alt="Mountain View Photo"
                width={195}
                height={156}
                loading="lazy"
              />
              <ExportedImage
                src="/images/local_attractions/towns/nederland/photo_0001.png"
                alt="Mountain View Photo"
                width={195}
                height={156}
                loading="lazy"
              />
            </TwoImages>
            <CenterColumn>
              <h3>The Town of Nederland</h3>
              <p>
                This scenic mountain town, located 17 miles west of Boulder, is the gateway to the Indian Peaks Wilderness Area. There are many recreational, historical, dining and retail opportunities that await the Colorado visitor.
              </p>
              <Link href="https://www.redrocksonline.com/" target="_blank">Visit Nederland <BsBoxArrowUpRight /></Link>
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
