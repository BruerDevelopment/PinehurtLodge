"use client";

import { ComponentType, ReactElement } from "react";
import { Section } from "../../../../../../styles/Section";
import styled from "styled-components";

export default (props: { children?: ReactElement }) => {
    let Content = props.children;
    return (
        <>
            <Section varient={2}>
                <StylingDiv>
                    {Content}
                </StylingDiv>
            </Section>
        </>
    )
}

const StylingDiv = styled.div`
    margin-top: 100px;
    width: 100%;

    h1 {
        font-size: 26px;
    }
`