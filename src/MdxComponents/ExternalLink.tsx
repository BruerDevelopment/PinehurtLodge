"use client";

import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { FaLink } from "react-icons/fa";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
export default (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
    let url = props.href;
    let flags:{[key:string]:any} = {
        "newTab":false,
        "linkIcon":false
    }
    let spaceSplit = url == undefined ? [] : url.split("|").join("%7C").split("%7C")
    if (spaceSplit.length > 1) {
        let configs = decodeURI(spaceSplit[0]);
        url = spaceSplit[1]
        let i = 0;
        while (i < configs.length && i < 100) {
            let c = configs[i];
            if (c == "!") {
                flags.newTab = true;
                i++;
                continue;
            }
            if (c == "#") {
                flags.linkIcon = true;
                i++;
                continue;
            }
            console.log("c", c)
            if (c == "{") {
                i++;
                c = configs[i];
                let str = ""
                while (c != "}" && i < 100) {
                    str += c;
                    i++;
                    c = configs[i];
                    console.log("c2", c)
                }
                console.log("str", str)
                let params = str.split(":");
                let k = params[0]
                let val = params[1];
                flags[k] = val;
                i++;
                continue;
            }
            i++;
        }
        console.log("flags", flags)
    }
    return (
        <Link href={url} target={flags.newTab ? "_blank" : ""}>
            {props.children}{flags.linkIcon && (
                flags["type"] == "map"
                    ? <FaLocationDot /> 
                    : <FaLink /> 
            )}
        </Link>
    )
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