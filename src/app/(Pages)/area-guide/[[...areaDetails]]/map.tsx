"use client";

import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import L from "leaflet"
import { useEffect } from "react"
import { start, stop } from "./(Map)"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styled from "styled-components";

export default function MyMap(props: { params: { areaDetails: string[] } }) {
    let router = useRouter();
    let searchParams = useSearchParams();
    let hideNav = searchParams.has("hideNav");
    let nav = (path:string) => {
        router.push(path + (hideNav ? "?hideNav" : ""))
    }
    useEffect(() => {
        start(nav, props.params.areaDetails)
        return () => {
          stop()
        }
    }, [nav, props.params.areaDetails])
    return (
        <MapStyles id="area-guide-map"></MapStyles>
    )
}


const MapStyles = styled.div`
    .leaflet-tooltip-pane {
        z-index: 450;
    }
    .leaflet-tooltip {
        padding: 0px 10px;
        background-color: var(--theme-color-5);
        color: white;
        border: 1px solid var(--theme-color-5);
        font-weight: bold;
        font-size: 14px;
        z-index: 9;
        
    }
    .marker {
        z-index: 10;
    }
`