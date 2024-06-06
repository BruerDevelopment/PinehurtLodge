"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaAirbnb } from "react-icons/fa";
export default (props:{children:any, "data-align":any}) => {
  
  return (
    <LinkRow data-align={props["data-align"]}>
      {props.children}
    </LinkRow>
  );
}

const LinkRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  &[data-align="left"] {
    justify-content: start;
  }
  a {
    padding: 10px;
    background-color: var(--theme-color-3);
    border-radius: 6px;
    text-decoration: none;
    color: white;
  }
`
