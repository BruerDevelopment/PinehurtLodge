import { GeoJsonObject } from 'geojson';
import TossPizza from "../../../../../posts/toss_pizza.mdx"
import PinehurstLodge from "../../../../../posts/pinehurst_lodge.mdx"
import { ReactElement } from 'react';
export const MapConfigs: {
    mapOptions:L.MapOptions
} = {
    mapOptions:{
        center:[39.92045455108784, -105.2],
        zoom: 10,
        maxZoom: 17,
        minZoom: 1,
    }
}

export const geo_data = {
    "type": "FeatureCollection",
    "name": "CorkPubs_1",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        
        newFeature({
            id: ["rollinsville"],
            isHome: true,
            name: "Rollinsville",
            zoomRadius:0.005,
            coords:[39.91799228205519, -105.50102393425145]
        }),
        newFeature({
            id: ["rollinsville", "pinehurst"],
            isHome: true,
            name: "Pinehurst Lodge",
            zoomRadius:0.0005,
            coords: [39.917881821148285, -105.49984261378904],
            details: {
                markdown:PinehurstLodge
            }
        }),
        newFeature({
            id: ["rollinsville", "toss"],
            name: "Toss: Wood Fired Eatery",
            zoomRadius:0.0005,
            coords: [39.91703686820486, -105.50130467180907],
            details: {
                markdown:TossPizza
            }
        }),
        newFeature({
            id: ["boulder"],
            name:"Bolder",
            coords:[40.015609194989395, -105.27637299175895]
        }),
        newFeature({
            id: ["nederland"],
            name:"Nederland",
            coords:[39.96227746050687, -105.51067504388459]
        }),
        newFeature({
            id: ["blackhawk"],
            name:"Black Hawk",
            coords:[39.79673144532503, -105.4945931592563]
        }),
        newFeature({
            id: ["central-city"],
            name:"Central City",
            coords:[39.80188592555517, -105.51293278149296]
        }),
        newFeature({
            id: ["golden"],
            name:"Golden",
            coords:[39.75610617941747, -105.22202642473411]
        }),
        newFeature({
            id: ["morrison"],
            name:"Morrison",
            coords:[39.65337924802037, -105.19097738694664]
        }),
        newFeature({
            id: ["denver"],
            name:"Denver",
            coords:[39.74099475068646, -104.97322781748655]
        }),
    ]
}

function newFeature(options: {
    id: string[],
    name?: string,
    isHome?: boolean,
    coords: number[],
    zoomRadius?: number,
    details?: {
        markdown:typeof TossPizza
    }
}) {
    return {
        "type": "Feature",
        "properties": {
            "id":options.id,
            "isHome":options.isHome == true ? true :false,
            "name": options.name != undefined ? options.name :"Unknown",
            "lat": options.coords[0],
            "long": options.coords[1],
            "zoomRadius": options.zoomRadius != undefined ? options.zoomRadius : 0.01,
            "details": options.details != undefined ? options.details : undefined,
        },
        "geometry": {
            "type": "Point",
            "coordinates": [options.coords[1], options.coords[0]]
        }
    }
}


//@ts-ignore
export function getGeoData(starting_id?:string[]): GeoJsonObject {
    let filtered_features = geo_data.features.filter(a => {
        let comp_id = a.properties.id;
        if (starting_id == undefined)
            return comp_id.length == 1
        if (comp_id.length == 1) return;
        for (let i = 0; i < starting_id.length; i++) {
            if (starting_id[i] != comp_id[i]) return false;
        }
        return true
    });
    let data:any = {
        ...geo_data,
        features:filtered_features
    }
    return data;
};
