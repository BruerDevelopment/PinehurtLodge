"use client";

import styled from "styled-components";
import { Section } from "../../../../../styles/Section";

const photos: { src: string; label: string; rotate?: number }[] = [
  { src: "PXL_20240628_212945699.jpg", label: "" },
  { src: "PXL_20240628_213006636.jpg", label: "" },
  { src: "PXL_20240628_213452132.jpg", label: "" },
  { src: "PXL_20240628_213437660.jpg", label: "" },
  { src: "PXL_20240628_212707560.jpg", label: "" },
  { src: "PXL_20240628_212904510.jpg", label: "" },
  { src: "PXL_20240628_212722962.jpg", label: "" },
  { src: "PXL_20240628_212746038.jpg", label: "Electric Kettle" },
  { src: "PXL_20240628_213049320.jpg", label: "" },
  { src: "PXL_20240628_213105546.jpg", label: "Seperate Downstairs Fridge" },
  { src: "PXL_20240628_213419765.jpg", label: "" },
  { src: "PXL_20240628_213032300.jpg", label: "" },
  // { src: "PXL_20240628_211013920.jpg", label: "" },
  // { src: "PXL_20240628_211120516.jpg", label: "" },
];

export default () => {
  return (
    <Section varient={2}>
      <h1 className="section-heading" id="Downstairs">Downstairs Kitchen Contents</h1>
      <PhotoGrid>
        {photos.map((photo) => (
          <GridItem key={photo.src}>
            <img
              src={`/HousePhotos/kitchen_contents/downstairs/${photo.src}`}
              alt={photo.label || "Downstairs kitchen item"}
              loading="lazy"
              style={photo.rotate ? { transform: `rotate(${photo.rotate}deg)` } : undefined}
            />
            {photo.label && <span>{photo.label}</span>}
          </GridItem>
        ))}
      </PhotoGrid>
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
