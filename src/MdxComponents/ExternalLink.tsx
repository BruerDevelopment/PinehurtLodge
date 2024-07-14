"use client";

import { FaLink } from "react-icons/fa";
import styled from "styled-components";


export default (props: {href:string, children:any}) => {
    let url = props.href;
    let newTab = false;
    let linkIcon = false;
    let spaceSplit = url.split("|").join("%7C").split("%7C")
    console.log("spaceSplit", spaceSplit)
    if (spaceSplit.length > 1) {
        let configs = spaceSplit[0]
        url = spaceSplit[1]
        if (configs.includes("!")) {
            newTab = true;
        }
        if (configs.includes("#")) {
            linkIcon = true;
        }
    }
    return <Link href={url} target={newTab ? "_blank" : ""}>{props.children}{linkIcon && <FaLink />}</Link>
}

const Link = styled.a`
    position: relative;
    & > svg {
        position: absolute;
        right: -24px;
        top: 50%;
        transform: translateY(-50%);
    }
`