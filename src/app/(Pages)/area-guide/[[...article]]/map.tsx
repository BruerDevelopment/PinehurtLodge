"use client";

import { PlaceMeta, getPlacesData } from "@/hooks/getPostData"
import { ComponentType, ReactElement, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { GoogleMap, Marker, MarkerClusterer, useLoadScript } from "@react-google-maps/api";
import styled from "styled-components";
import { useRouter, useSearchParams } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoMdOptions } from "react-icons/io";

export const Map = (props: {
    places: (PlaceMeta & {
        PostComp: JSX.Element | undefined;
    })[],
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
    places: (PlaceMeta & {
        PostComp: JSX.Element | undefined;
    })[],
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
    let [showClusterLabels, setShowClusterLabels] = useState(zoom < 14);
    const onLoad = useCallback((map: any) => {
        map.addListener('zoom_changed', () => {
            const zoom = map.getZoom();
            console.log("zoom changed", zoom)
            if (zoom > 14) {
                setShowClusterLabels(false);
            } else {
                setShowClusterLabels(true);

            }
        });
        return (mapRef.current = map)
    }, []);
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
            window.history.pushState(undefined, "", url)
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
        <MapContainer data-hidenav={ hideNav}>
            <div id="backnav" className={selectedPlace.join("/") == "" ? "hidden" : ""} onClick={() => {
                let id = "";
                let t = selectedPlace?.slice(0, selectedPlace.length-1);
                if (t != undefined) {
                    id = t?.join("/")
                }
                console.log("back", id)
                nav(id);
            }}><IoChevronBackOutline /></div>
            <div id="filterbutton"><IoMdOptions /></div>
            <GoogleMap
                zoom={zoom}
                center={center}
                mapContainerClassName="map-container"
                options={options}
                onLoad={onLoad}
            >
                {groups.map((g) => {
                    let groupMeta = props.places.filter(p => p.isGroup ==true && p.groupid == g)[0]
                    let places = props.places.filter(p => p.isGroup !=true && p.group == g)
                    return (
                        <>
                            <Marker
                                key={"main"+g}
                                position={convertLocationArrayToPos(places[0].location)}
                                clickable={false}
                                visible={showClusterLabels && places.length > 1}
                                icon={{
                                    url: "https://transparenttextures.com/patterns/debut-light.png",
                                    size: new google.maps.Size(20, 20)
                                }}
                                label={{
                                    text: groupMeta.title,
                                    className: "marker_label group_label " + (groupMeta.isHome == true ? "home_marker" : ""),
                                    color:"white"
                                    
                                }}
                            />
                        <MarkerClusterer
                            key={g}
                            zoomOnClick={false}
                            onClick={(e) => {
                                nav(g)
                                return false;
                            }}
                        >
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
                                        
                                        label={{
                                            text: p.title,
                                            className: "marker_label " + (p.isHome == true ? "home_marker" : ""),
                                            color:"white"
                                        }}
                                        />
                                    ))}
                                </>
                            )}
                        </MarkerClusterer>
                            </>
                    )
                })}
                
                {ungrouped_markers.map(p => (
                    <Marker key={p.id} position={convertLocationArrayToPos(p.location)}/>
                ))}
            </GoogleMap>
            <div id="details" key={selectedMeta.id}  className={(selectedMeta == undefined || selectedMeta.isGroup) ? "hidden" : ""}>
                <div>{Details}</div>
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
    &[data-hidenav="false"] {
        top: 40px;
    }
    #backnav {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 100;
        background-color: white;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            min-width: 30px;
            min-height: 30px;
        }
        &.hidden {
            display: none;
        }
    }
    #filterbutton {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 100;
        background-color: white;
        border-radius: 20px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            min-width: 30px;
            min-height: 30px;
        }
        &.hidden {
            display: none;
        }
    }
    .map-container {
        flex: 1;
        .marker_label {
            background-color: var(--theme-color-5);
            color: white;
            position: absolute;
            top: 50%;
            transform: translate(0px, -50%);
            left: 10px;
            padding: 5px;
            border-radius: 4px;
            &.group_label {
                top: auto;
                bottom: 40%;
                transform: translate(0px, 50%);
                left: 20px;
            }
            &.home_marker::before {
                color: white;
                margin-right: 10px;
                content: "HO";
                background-image: url("/Icons/home.svg");
                background-size: cover;
                color: transparent;
                svg {
                    color: white;
                }
                width: 20px;
                min-width: 20px;
                height: 100%;
            }
        }
    }
    #details {
        &.hidden {
            max-height: 0px;
        }
        max-height: 100vh;
        flex: 3;
        display: flex;
        justify-content: center;
        background-color: var(--theme-color-2);
        overflow: hidden;
        overflow-y: scroll;
        & > div {
            width: 80%;
            max-width: 900px;
            transition: max-height 1s;
            gap: 10px;
            display: flex;
            flex-direction: column;
            h1 {
                text-align: center;
                margin-bottom: 0px;
            }
        }
    }
    display: flex;
    flex-direction: column;
`