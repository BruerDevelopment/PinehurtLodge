"use client";

import { PlaceMeta, getPlacesData } from "@/hooks/getPostData"
import { ComponentType, ReactElement, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { GoogleMap, Marker, MarkerClusterer, useLoadScript } from "@react-google-maps/api";
import styled from "styled-components";
import { useRouter, useSearchParams } from "next/navigation";

export const Map = (props: {
    places: {
        PostComp: JSX.Element | undefined;
        id: string;
        date: Date;
        title: string;
        visibility: "public" | "unlisted" | "private";
        isGroup: boolean;
        zoom: number;
        location: [number, number];
        cover: string;
        groupid: string;
        group: string;
    }[],
    selectedID: string[],
}) => {
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        libraries: ["places"],
    });
    if (isLoaded == false) return (
        <div>
            Loading Map
        </div>
    )
    return <MapComp {...props} />
}

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;
function convertLocationArrayToPos(location:[number, number]) {
    return { lat: location[0], lng: location[1] }
}
const MapComp = (props: {
    places: {
        PostComp: JSX.Element | undefined;
        id: string;
        date: Date;
        title: string;
        visibility: "public" | "unlisted" | "private";
        isGroup: boolean;
        zoom: number;
        location: [number, number];
        cover: string;
        groupid: string;
        group: string;
    }[],
    selectedID: string[]
}) => {
    const mapRef = useRef<GoogleMap>();
    let [selectedPlace, setSelectedPlace] = useState<string[]>(props.selectedID || [""])
    let selectedMeta = useMemo(
        () => props.places.filter(p => p.id == selectedPlace.join("/") || `${p.id}/index` == selectedPlace.join("/"))[0]
        , [selectedPlace]
    )
    let Details = useMemo(() => selectedMeta.PostComp, [selectedMeta])
    const default_pos = useMemo<[number, number]>(()=>[39.85015455108784, -105.2], [])
    const center = useMemo<LatLngLiteral>(
        () => (selectedMeta != undefined
            ? convertLocationArrayToPos(selectedMeta.location)
            : convertLocationArrayToPos(default_pos)
        ), []
    );
    const zoom = useMemo(()=>selectedMeta != undefined ? selectedMeta.zoom : 10, []);
    const options = useMemo<MapOptions>(() => ({
        mapId: "b181cac70f27f5e6",
        disableDefaultUI: true,
        clickableIcons: false,
    }), []);
    let groups = props.places.filter(p => p.isGroup).map(p=>p.groupid);
    let ungrouped_markers = props.places.filter(p => p.isGroup != true && p.group == undefined);
    const onLoad = useCallback((map:any) => (mapRef.current = map), []);
    let router = useRouter();
    let searchParams = useSearchParams();
    let hideNav = searchParams.has("hideNav");
    let nav = (path: string | undefined) => {
        if (mapRef.current == undefined) return;
        let map = mapRef.current;
        let nextSelected = props.places.filter(p => p.id == path || `${p.id}/index` == path)[0]
        if (nextSelected) {
            //@ts-expect-error
            map.setZoom(nextSelected.zoom)
            map.panTo(convertLocationArrayToPos(nextSelected.location))
        } 
        if (path == undefined || path == "") {
            let url = "/area-guide"+(hideNav ? "?hideNav" : "");
            window.history.pushState(url, "", url)
            return setSelectedPlace([""]);
        }
        let url = "/area-guide/"+(path + (hideNav ? "?hideNav" : ""));
        window.history.pushState(undefined, "", url)
        setSelectedPlace(path.split("/"))
    }
    useEffect(() => {
        window.addEventListener("popstate", (e) => {
            //@ts-expect-error
            let url = new URL(e.target.location);
            let pID = url.pathname.replace("/area-guide/", "").replace("/area-guide", "")
            console.log(pID);
            if (mapRef.current == undefined) return;
            let map = mapRef.current;
            let nextSelected = props.places.filter(p => p.id == pID || `${p.id}/index` == pID)[0]
            if (nextSelected) {
                //@ts-expect-error
                map.setZoom(nextSelected.zoom)
                map.panTo(convertLocationArrayToPos(nextSelected.location))
            } 
            
            setSelectedPlace(pID.split("/"))
        })
    }, [])
    return (
        <MapContainer>
            <div id="backnav" className={selectedPlace.join("/") == "" ? "hidden" : ""} onClick={() => {
                let id = "";
                let t = selectedPlace?.slice(0, selectedPlace.length-1);
                if (t != undefined && t.length > 0) {
                    id = t?.join("/")
                }
                nav(id);
            }}>back</div>
            <GoogleMap
            zoom={zoom}
            center={center}
            mapContainerClassName="map-container"
            options={options}
            onLoad={onLoad}
            >
                {groups.map((g) => {
                    let places = props.places.filter(p => p.isGroup !=true && p.group == g)
                    return (
                        <MarkerClusterer key={g} zoomOnClick={false} onClick={(e) => {
                            nav(g)
                            return false;
                        }}>
                            {(clusterer) => (
                                <>
                                    {places.map(p => (
                                        <Marker
                                            key={p.id}
                                            position={convertLocationArrayToPos(p.location)}
                                            clusterer={clusterer}
                                            onClick={() => {
                                                nav(p.id)
                                            }}
                                        />
                                    ))}
                                </>
                            )}
                        </MarkerClusterer>
                    )
                })}
                
                {ungrouped_markers.map(p => (
                    <Marker key={p.id} position={convertLocationArrayToPos(p.location)}/>
                ))}
            </GoogleMap>
            <div id="details" key={selectedMeta.id}  className={(selectedMeta == undefined || selectedMeta.isGroup) ? "hidden" : ""}>
                {Details}
            </div>
            
        </MapContainer>
    )
}

const MapContainer = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    #backnav {
        position: absolute;
        top:0px;
        left: 0px;
        padding: 10px;
        z-index: 100;
        background-color: white;
        &.hidden {
            display: none;
        }
    }
    .map-container {
        flex: 1;
    }
    #details {
        &.hidden {
            max-height: 0px;
        }
        max-height: 100vh;
        transition: max-height 1s;
        flex: 3;
    }
    display: flex;
    flex-direction: column;
`