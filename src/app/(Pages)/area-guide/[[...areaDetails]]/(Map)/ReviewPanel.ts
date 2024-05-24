import L from "leaflet";

//Add section that adds Reviews best and worst
export function ConstructReviewPanel(map_obj:any) {

    // var panel = L.control({position: 'bottomleft'});
    
    // panel.onAdd = function (map:any) {
    //     this._div = L.DomUtil.create('div', 'panel');
    //     this.update();
    //     return this._div;
    // }; 
    
    // panel.update = function (props:any) {
    //     this._div.innerHTML = `
    //         <h4> Best and Worst Reviews</h4>
    //         ${(props != undefined
    //             ? `
    //                 <b> Best:  </b><br />"${props.highest}" <br /> 
    //                 <b> Worst: </b><br />"${props.lowest}"
    //             ` 
    //             : 'Hover over a Pub'
    //         )}
    //     `//End Panel Contents
    // };

    // panel.addTo(map_obj);
    // return panel;
}

