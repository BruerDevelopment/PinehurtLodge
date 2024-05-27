import L from "leaflet";
import { getGeoData, geo_data } from "./GeoData";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
/**
 * 
 * @param {*} map_obj 
 * @param {*} ReviewPanel 
 */
export function ConstructGeoJSON(nav: (path: string) => void, map_obj: any, ReviewPanel: any, starting_id?: string[]) {
    let selectedFeature = geo_data.features.filter(a => a.properties.id.join("/") == starting_id?.join("/"))[0];
    let isDetailedLocation = selectedFeature?.properties.details != undefined
    let BlankMarkerIcon = L.icon({
        iconUrl: '/marker.png',
        className:"marker",
        iconSize:     [38, 38], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [19, 38], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    })
    let RedMarkerIcon = L.icon({
        iconUrl: '/red_marker.png',
        className:"marker",
        iconSize:     [38, 38], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [19, 38], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    })
    let HomeMarkerIcon = L.icon({
        iconUrl: '/home.png',
        className:"marker",
        iconSize:     [38, 38], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [19, 38], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    })

    let getIcon = (marker: string) => {
        if (marker == "blue_home_teardrop") return HomeMarkerIcon;
        if (marker == "red_teardrop") return RedMarkerIcon;
        return BlankMarkerIcon
    }
    let CorkPubs = null;
    /**
     * Defines how GeoJSON points spawn Leaflet layers. It is internally called when data is added, 
     * passing the GeoJSON point feature and its LatLng. 
     */
    let pointToLayer = (feature:any, latlng:any) => {
        var id = 0;
        if (feature.properties.rating >= 4.7)  id = 3; 
        else if (feature.properties.rating >= 4.4) id = 2; 
        else if (feature.properties.rating >= 4.0) id = 1;
        else if (feature.properties.rating <= 4.0) id = 0; 

        return L.marker(latlng, {
            icon: getIcon(feature.properties.marker),
        })
    }
    /**
     * Called once for each created Feature, after it has been created and styled. 
     * Useful for attaching events and popups to features.
     */
    let onEachFeature = (feature:any, layer:any) => {
        var rating = `
        ${feature.properties.name} 
        `
        let tooltip = L.tooltip({
            content: rating,
            offset: L.point(10, -20),
            permanent: isDetailedLocation ? false : true,
            className: 'leaflet-tooltip'
        })
        layer.bindTooltip(tooltip);

        //Add listener for map interaction
        function mouseoverEventListener(e:any) {

        }
        
        function mouseoutEventListener(e:any) {
            //ReviewPanel.update();
        }
        
        function onClick(e:any) {
            
            nav(`/area-guide/${feature.properties.id.join("/")}`)
        }
        layer.on({
            mouseover: mouseoverEventListener, 
            mouseout: mouseoutEventListener,
            click: onClick
        });
    }
    let data = getGeoData(starting_id);

    CorkPubs = L.geoJSON(data, {
        pointToLayer,
        onEachFeature,
        attribution: '&copy; https://Pinehurst-Lodge.com',
    })

    //Add the data to the map
    CorkPubs.addTo(map_obj);    
}