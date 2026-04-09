"use client";

import styled from "styled-components";
import { Section } from "../../../../../styles/Section";

const photos: { src: string; label: string; rotate?: number }[] = [
  { src: "PXL_20240701_125731979.jpg", label: "Dish Cupboard" },
  { src: "PXL_20240627_172907980.jpg", label: "Silverware Drawer" },
  { src: "PXL_20240627_172631475.jpg", label: "Dining Set" },
  { src: "PXL_20240701_134951863.MP.jpg", label: "Glass Drinkware" },
  { src: "PXL_20240623_192317950.jpg", label: "Blender" },
  { src: "PXL_20240623_192608418.jpg", label: "Slow Cooker" },
  { src: "PXL_20240625_174608550.jpg", label: "Baking Pans & Sheets" },
  { src: "PXL_20240627_172941855.jpg", label: "Baking & Misc Utensils" },
  { src: "PXL_20240627_173111060.jpg", label: "Cooking Utensils" },
  // { src: "PXL_20240627_173655271.jpg", label: "" },
  { src: "PXL_20240627_173753970.jpg", label: "Cooking Pots & Pans" },
  { src: "PXL_20240627_174130502.jpg", label: "Lids For Pots & Pans" },
  { src: "PXL_20240627_180026202.jpg", label: "Collindar, Grater & Measuring Cup" },
  { src: "PXL_20240628_211013920.jpg", label: "Toast Oven" },
  { src: "PXL_20240628_211120516.jpg", label: "Microwave" },
  { src: "PXL_20240630_011047665.jpg", label: "Spice Cupboard With Communal Spices" },
  { src: "PXL_20240630_011711981.jpg", label: "Glass Pie Backing Dishes" },
  { src: "PXL_20240630_012104010.jpg", label: "Adventure Cooler" },
  { src: "PXL_20240630_012251395.jpg", label: "" },
  { src: "PXL_20240630_025547641.jpg", label: "" },
  { src: "PXL_20240630_235244916.jpg", label: "" },
  { src: "PXL_20240701_004023549.jpg", label: "" },
  // { src: "PXL_20240701_135152079.MP.jpg", label: "" },
  { src: "PXL_20240701_135223348.jpg", label: "" },
  // { src: "PXL_20240701_135234824.jpg", label: "" },
  { src: "PXL_20241129_002437848.jpg", label: "" },
  { src: "PXL_20241130_020639482.jpg", label: "" },
];

export default () => {
  return (
    <Section varient={1}>
      <h1 className="section-heading" id="Upstairs">Upstairs Kitchen Contents</h1>
      <PhotoGrid>
        {photos.map((photo) => (
          <GridItem key={photo.src}>
            <img
              src={`/HousePhotos/kitchen_contents/upstairs/${photo.src}`}
              alt={photo.label || "Upstairs kitchen item"}
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
