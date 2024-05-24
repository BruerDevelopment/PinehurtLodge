"use client";

import styled from "styled-components";
import DesktopClipart from "@/assets/DesktopClipart.svg"
import { CiServer } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { PageFooter, AlternateSection, Section, responsiveMobileWidth } from "@/app/globalStyles";
import Link from "next/link";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { geo_data } from "./(Map)/GeoData";
import { useMemo } from "react";
import { MDXProps } from "mdx/types";
export default (props:{params:{areaDetails:string[]}}) => {
  let pathname = usePathname();
  const Map = dynamic(() => import("./map"), {
    loading: () => <div id="area-guide-map"></div>,
    ssr: false
  })
  let filteredFeatures = useMemo(() => {
    let starting_id = props.params.areaDetails;
    return geo_data.features.filter(a => {
      let comp_id = a.properties.id;
      if (starting_id == undefined)
          return comp_id.length == 1
      if (comp_id.length == 1) return;
      for (let i = 0; i < starting_id.length; i++) {
          if (starting_id[i] != comp_id[i]) return false;
      }
      return true
    });
  }, [props.params.areaDetails])
  let recommendedFeatures = useMemo(() => {
    let starting_id = props.params.areaDetails;
    return geo_data.features.filter(a => {
      let comp_id = a.properties.id;
      if (starting_id == undefined)
          return comp_id.length == 1
      if (comp_id.length == 1) return;
      if (starting_id.join("/") == comp_id.join("/")) return false;
      for (let i = 0; i < starting_id.length - 1; i++) {
          if (starting_id[i] != comp_id[i]) return false;
      }
      return true
    });
  }, [props.params.areaDetails])


  let selectedFeature = useMemo(() => {
    let starting_id = props.params.areaDetails;
    if (starting_id == undefined) return undefined;
    return geo_data.features.filter(a => {
      return a.properties.id.join("/") == starting_id.join("/")
    })[0];
  }, [props.params.areaDetails])
  return (
    <>
      <ContentWrapper style={{ "paddingTop": "0px" }}>
        <div id="titlebar">
          <div>
            {props.params.areaDetails != undefined && (
              <Link href={pathname.split("/").slice(0, -1).join("/")} replace={true} prefetch={true}>Back</Link>
            )}
          </div>
          <h1 className="heading">Pinehurst Lodge Area Guide - { pathname}</h1>
        </div>
        <MapWrapper>
          <div id="sidebar">
            {(selectedFeature == undefined || selectedFeature.properties.details == undefined) && (
              <div>{
                filteredFeatures.map((feature) => {
                  return (
                    <Link href={`/area-guide/${feature.properties.id.join("/")}`} replace={true} prefetch={true}>
                      {feature.properties.name}
                    </Link>
                  )
                })
              }</div>
            )}
            {(selectedFeature != undefined && selectedFeature.properties.details != undefined) && (
            <div>
                <WhatsNearbyLabel>What's Nearby</WhatsNearbyLabel>
                {recommendedFeatures.map((feature) => {
                  return (
                    <Link href={`/area-guide/${feature.properties.id.join("/")}`} replace={true} prefetch={true}>
                      {feature.properties.name}
                    </Link>
                  )
                })}
            </div>
            )}
          </div>
          <div id="mapWrapper">
            <Map params={props.params} />
            <div id="place_details" data-open={selectedFeature != undefined && selectedFeature.properties.details != undefined}>
              <PlaceDetails comp={selectedFeature?.properties.details?.description} />
            </div>
          </div>
        </MapWrapper>
      </ContentWrapper>
      
    </>
  );
}

const WhatsNearbyLabel = styled.div`
  display: flex;
  background-color: transparent;
  padding: 10px;
  pointer-events: none;
  color: white;
  font-weight: bold;
`

function PlaceDetails(props:{comp?:((props: MDXProps) => JSX.Element)}) {
  let Details = props.comp;
  if (Details == undefined) return <div></div>
  return <Details />

}
const ContentWrapper = styled.div`
  padding: 20px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: var(--theme-color-5);
  --sidebar-width: 200px;
  #titlebar {
    color: white;
    display: flex;
    flex-direction: row;
    h1 {
      @media screen and (max-width: 900px) {
        & {
          font-size: 23px;
        }
      }
      @media screen and (max-width: 600px) {
        & {
          font-size: 15px;
          padding-top: 30px;
        }
      }
    }
    div {
      min-width: var(--sidebar-width);
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        background-color: var(--theme-color-4);
        color: white;
        text-decoration: none;
        padding: 10px;
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
      }
    }
  }
`

const MapWrapper = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: row;

  #sidebar {
    min-width: var(--sidebar-width);
    height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    div {
      display: flex;
      flex-direction: column;
      a {
        box-sizing: border-box;
        background-color: var(--theme-color-4);
        width: 100%;
        height: 60px;
        color: white;
        text-decoration: none;
        padding: 0px 10px;
        padding-top: 10px;
        border-bottom: 1px solid white;
        &:last-child {
          border-bottom: 0px;
          
        }
      }
    }
  }
  #mapWrapper {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 90px);
    #place_details {
      height: 1000px;
      max-height: 0px;
      background-color: var(--theme-color-2);
      overflow: hidden;
      transition: max-height 1s;
      &[data-open="true"] {
        padding: 20px;
        max-height: 70%;
        overflow-y: scroll;
      }
    }
  }
  #area-guide-map {width: 100%; height: 100%; flex: 1; margin:0; background: #fff; }
`

