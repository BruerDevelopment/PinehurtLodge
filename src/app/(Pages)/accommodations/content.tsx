"use client";

import styled from "styled-components";

import Bedrooms from "./(Sections)/Bedrooms";
import Kitchens from "./(Sections)/Kitchens";
import LivingRooms from "./(Sections)/LivingRooms";
import CraftingArea from "./(Sections)/CraftingArea";
import Activities from "./(Sections)/Activities";
import Bathrooms from "./(Sections)/Bathrooms";
import Garage from "./(Sections)/Garage";

export default () => {
  return (
    <>
      <Bedrooms />
      <Kitchens />
      <LivingRooms />
      <CraftingArea />
      <Activities />
      <Bathrooms />
      <Garage />
    </>
  );
}

