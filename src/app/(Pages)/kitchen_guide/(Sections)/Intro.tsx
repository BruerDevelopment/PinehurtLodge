"use client";

import styled from "styled-components";
import { Section } from "../../../../../styles/Section";

export default () => {
  return (
    <Section varient={2}>
      <h1 className="section-heading">Pinehurst Lodge's Kitchen Guide</h1>        
      <p>
        Both kitchens are fully stocked for everything from a quick breakfast to a big family dinner — we cook real meals here and want you to feel at home doing the same.        
      </p>
    </Section>
  );
};

const PhotoGrid = styled.div`
  width: 90%;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  padding: 20px 0;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: contain;
    border-radius: 6px;
  }
  span {
    text-align: center;
    font-size: 0.85rem;
    font-weight: bold;
  }
`;
