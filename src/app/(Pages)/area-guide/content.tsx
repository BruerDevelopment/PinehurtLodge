"use client";

import Link from "next/link";
import { Section } from "../../../../styles/Section";


export default () => {
    return (
        <>
        <Section varient={1} maxSize={1200}>

        </Section>
        <Section varient={2} maxSize={1200}>
            <Link href={"/area-guide/articles"}>Articles</Link>
            <Link href={"/area-guide/map"}>Map</Link>
        </Section>
    </>
    );
  }