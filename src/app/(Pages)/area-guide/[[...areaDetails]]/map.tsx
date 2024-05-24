"use client";

import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import L from "leaflet"
import { useEffect } from "react"
import { start, stop } from "./(Map)"
import { usePathname, useRouter } from "next/navigation";

export default function MyMap(props: { params: { areaDetails: string[] } }) {
    let router = useRouter();
    let nav = (path:string) => {
        router.push(path)
    }
    useEffect(() => {
        start(nav, props.params.areaDetails)
        return () => {
          stop()
        }
    }, [nav, props.params.areaDetails])
    return (
        <div id="area-guide-map"></div>
    )
}