import styled, { css } from "styled-components";
import { matchProp } from "./GlobalStyles";

export function Section(props: {
    children?: any,
    varient?: number,
    maxSize?: number,
    fillSize?: number,
    hasPadding?: boolean,
    align?:"left"|"center"
}) {
    return (
        <SectionVarient1
            $varient={props.varient != undefined ? props.varient : 1}
            $size={props.maxSize || 900}
            $align={props.align || "center"}
            $hasPadding={props.hasPadding}
            $fillSize={props.fillSize || 95}
        >
            <div>
                {props.children}
            </div>
        </SectionVarient1>
    )
}
const SectionVarient1 = styled.section<{$varient:number, $size:number, $align:"left"|"center", $hasPadding?:boolean, $fillSize:number}>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100px;
    position: relative;
    ${props => props.$hasPadding != false ? css`
        padding-top: 60px;
        padding-bottom: 60px;
    ` : ""}
    h1, h2, h3 {
        font-weight: bold;

    }
    .section-heading {
        text-align: center;
        scroll-margin-top: 100px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    h1.section-heading {
        font-size: 32px;
    }
    h2.section-heading {
        font-size: 21px;
    }
    .section-subheading {
        font-size: 21px;
        text-align: center;
        font-weight: bold;
        padding: 10px;
    }

    ${matchProp("$varient", 1, css`
        --heading-color: white;
        background-color: var(--theme-color-5);
        color: white;
        .section-heading {
            color: white;
        }
    `)}
    ${matchProp("$varient", 2, css`
        background-color: var(--theme-color-2);
        color: black;
        --heading-color: var(--theme-color-5);
        .section-heading {
            color: var(--heading-color);
        }
    `)}
    & > div {
        ${props => css`
            width: ${props.$fillSize}%;
        `}
        max-width: ${props => props.$size}px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        ${matchProp("$align", "center", css`
            align-items: center;
        `)}
        ${matchProp("$align", "left", css`
            align-items: start;
        `)}
    }

`