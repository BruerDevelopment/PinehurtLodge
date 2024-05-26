"use client";

import { responsiveMobileWidth } from "@/app/globalStyles";
import { useMenuState } from "@/hooks/useMenuState";
import { useScrollPos } from "@/hooks/useScrollPos";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export default () => {
  return (
    <Footer>
      hi
    </Footer>
  );
}

const Footer = styled.div`
  background-color: var(--theme-color-4);
  height: 300px;
  width: 100%;
`
