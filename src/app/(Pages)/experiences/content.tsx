"use client";

import styled from "styled-components";


import { Section } from "../../../../styles/Section";
import SetupOfferings from "./(Sections)/SetupOfferings";

export default () => {
  return (
    <>
      <Section varient={2}>
        <h1 className="section-heading">Experiences</h1>
        <p>
          Welcome to Pinehurst Lodge, where each stay is designed to provide unforgettable experiences tailored to your
          preferences and desires. Whether you're in search of relaxation, adventure, or cultural immersion, we have something
          unique to offer every guest. Beyond providing comfortable accommodations, we are committed to creating personalized
          experiences that enrich your visit. Whether you're here for a weekend getaway or a longer vacation, every moment at
          Pinehurst Lodge is dedicated to ensuring you find joy, discover something new, and feel completely at ease.
          Explore all that awaits you and create memories that will last a lifetime during your stay with us.
        </p>
      </Section>
      <SetupOfferings />
    </>
  );
}

