"use client";

import styled from "styled-components";

import Intro from "./(Sections)/Intro";
import Upstairs from "./(Sections)/Upstairs";
import Downstairs from "./(Sections)/Downstairs";

export default () => {
  return (
    <>
      <Intro />
      <Upstairs/>
      <Downstairs/>
    </>
  );
}

