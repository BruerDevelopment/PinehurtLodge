import L from "leaflet";
import { ConstructReviewPanel } from "./ReviewPanel";
import { ConstructGeoJSON } from "./CorkPubs";
import { ConstructRatingLegend } from "./RatingLegend";
import { MapConfigs, geo_data } from "./GeoData";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
export function start(nav:(path:string)=>void, starting_id?:string[]) {
    // Main Setup / Process Flow
    let mymap = ConstructLeafletMap();
    let ReviewPanel = ConstructReviewPanel(mymap);
    ConstructGeoJSON(nav, mymap, ReviewPanel, starting_id);
    ConstructRatingLegend(mymap);
    if (starting_id != undefined) {
        let feature = geo_data.features.filter(a => {
            return a.properties.id.join("/") == starting_id.join("/")
        })[0];
        if (feature == undefined) return;
        let props = feature.properties;
        //half a side length
        let radius = props.zoomRadius;
        //Bound corners
        var corner1 = L.latLng(props.lat - radius, props.long - radius);
        var corner2 = L.latLng(props.lat + radius, props.long + radius);
        
        //Bounds
        let bounds = L.latLngBounds(corner1, corner2);
        map_obj.fitBounds(bounds);
    }
}




var map_obj:any;

function ConstructLeafletMap() {
    map_obj = L.map('area-guide-map', MapConfigs.mapOptions);
    
    //Tilemap
    //const TilemapURL = 'https://api.mapbox.com/styles/v1/bruersh/clvdvvqxl01x301phdzrv45pv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJ1ZXJzaCIsImEiOiJjbHU3NGI1OGswMjVtMmtvajR4N2EzbXV1In0.57h-WWEL0ulj_ywXWyRgVQ';
    //const TilemapURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const TilemapURL = 'https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.png';
    L.tileLayer(TilemapURL).addTo(map_obj)
    
    //Scale bar
    L.control.scale({ position: 'bottomright' }).addTo(map_obj);
    return map_obj;
}

export function stop() {
    map_obj.remove();
}
