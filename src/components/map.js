import React, {useState} from "react";
import "leaflet/dist/leaflet.css";
import {
    MapContainer, 
    GeoJSON, 
    TileLayer} from "react-leaflet";
import features from "../data/countries.json";
import Legend from "./legend";

function Map() {
    const [onselect, setOnselect] = useState({});
    /* function determining what should happen onmouseover, this function updates our state*/
    const highlightFeature = (e=> {
        //var layer = e.target;
        const { 
            ADMIN, 
            total_crag_pos_with_cm_string, 
            adults_w_hiv, 
            total_crag_pos_cm_deaths, 
            num_know_status, 
            percent_know_status,
            on_art, 
            cd4_under_200,
            percent_hiv_cd4_under_200,
            crag_prevalence_cd4_under_200, 
            num_crag_pos, 
            num_crag_pos_not_on_art,
            cost_crag_screening,
            cost_cm_treatment } = e.target.feature.properties;
        setOnselect({
            country:ADMIN,
            crypto:total_crag_pos_with_cm_string,
            hiv: adults_w_hiv,
            deaths: total_crag_pos_cm_deaths,
            numKnow: num_know_status,
            percentKnow: percent_know_status,
            onART: on_art,
            //percentART: Math.ceil(parseInt((on_art.replace(/,/g,""))/parseInt(adults_w_hiv.replace(/,/g,""))*100)).toString(),
            CD4: cd4_under_200,
            percentCD4: percent_hiv_cd4_under_200,
            cragPrev: crag_prevalence_cd4_under_200,
            cragPos: num_crag_pos,
            cragPosART: num_crag_pos_not_on_art,
            costScreening: cost_crag_screening,
            costTreatment: cost_cm_treatment
            //percentCragPosART: (100 - Math.ceil(parseInt((num_crag_pos_not_on_art.replace(/,/g,""))/parseInt(num_crag_pos.replace(/,/g,""))*100))).toString(),
        });


    });
    /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
    /*const resetHighlight= (e =>{
        setOnselect({});
        e.target.setStyle(style(e.target.feature));
    })*/
    /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
     highlightFeature and resetHighlight*/
    const onEachFeature= (feature, layer)=> {
        layer.on({
            //mouseover: highlightFeature,
            //mouseleave: resetHighlight,
            click: highlightFeature,
            //mousedown: highlightFeature,
        });
        //const cm_cases = Math.floor(parseInt((feature.properties.total_crag_pos_with_cm.replace(/,/g,"")))/10)*10;
        layer.bindTooltip(`<div><b>Country:</b> ${feature.properties.ADMIN}<p><b>Cryptococcal Meningitis Cases (2020):</b> ${feature.properties.total_crag_pos_with_cm_string ? (feature.properties.total_crag_pos_with_cm > 10 ? Math.floor(feature.properties.total_crag_pos_with_cm / 10) * 10 : feature.properties.total_crag_pos_with_cm) : "No data"}</p></div>`, 
            {
                direction: "top",
                sticky: true,
                offset: [0, 0],
                opacity: 0.85,
                className: 'leaflet-tooltip'
            });
        layer.openTooltip()
    }
        
    const mapPolygonColorToDensity=(crypto => {
        return crypto > 10000
            ? '#fe0131'
            : crypto > 5000
            ? '#e90069'
            : crypto > 2500
            ? '#bd2d8f'
            : crypto > 1000
            ? "#84489d"
            : crypto > 100
            ? "#4b5294"
            : crypto > 1
            ? "#265079"
            : '#fee5d9';
    })
    const style = (feature => {
        return ({
            fillColor: mapPolygonColorToDensity(feature.properties.total_crag_pos_with_cm),
            weight: 1,
            opacity: 1,
            color: 'black',
            dashArray: '2',
            fillOpacity: 1
        });
    });
    const mapStyle = {
        height: '65vh',
        width: '95%',
        margin: '0 auto',
    }
    const feature = features.features.map(feature=>{
        return(feature);
    });

    return(
        <section
        aria-labelledby="section-map"
        className="max-w-full mx-auto pt-18 px-4 sm:pt-10 sm:px-20 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Global Burden of HIV-associated Cryptococcal Meningitis: 2020
            </h2>
            <br />
{/*             <p className="mt-0 text-xl text-gray-500">
                CrAg-positive Cryptococcal Meningitis Cases (2020)
            </p> */}

                <div className="h-full">
                <MapContainer 
                    zoom={3}
                    maxZoom={6}
                    minZoom={2}
                    maxBoundsViscosity={1.0}
                    scrollWheelZoom={true} 
                    style={mapStyle} 
                    center={[10.616276686609176, 3.4219812261325426]}>
                    <TileLayer
                        attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
                        url="https://cartocdn_{s}.global.ssl.fastly.net/base-eco/{z}/{x}/{y}.png"
                    />
                   {feature && (
                    <GeoJSON data={feature} 
                    style={style} 
                    onEachFeature={onEachFeature}/>
                    )}
                    <Legend />
                </MapContainer>
                </div>
                {!onselect.country ? (
                    <div className="bg-white overflow-hidden drop-shadow-xl rounded-lg divide-y divide-gray-200 mx-auto w-fit">
                        <div className="px-4 py-5 sm:px-6">
                            <strong>Cryptococcus Statistics by Country</strong>
                            {/* Content goes here */}
                            {/* We use less vertical padding on card headers on desktop than on body sections */}
                        </div>
                        <div className="px-4 py-5 sm:p-6">Select a country above{/* Content goes here */}</div>
                        <div className="px-4 py-4 sm:px-6">
                            Data source: <a href="https://www.unaids.org/en" className="underline text-blue-600 hover:text-rose-900">UNAIDS</a>
                        {/* Content goes here */}
                        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
                        </div>
                    </div>
                )
                 : (
                    <div className="bg-white overflow-hidden drop-shadow-xl rounded-lg divide-y divide-gray-200 mx-auto w-fit">
                    <div className="px-4 py-5 sm:px-6">
                        <strong>Cryptococcal Meningitis (CM) Statistics by Country</strong>
                        {/* Content goes here */}
                        {/* We use less vertical padding on card headers on desktop than on body sections */}
                    </div>
                    <div className="px-4 py-5 sm:p-6">
                        <ul>
                            <li><strong>{onselect.country}</strong></li>
                            <li className="text-left px-2"><u>Total Crag+</u>: {onselect.cragPos ? (onselect.cragPos > 10 ? Math.floor((parseInt((onselect.cragPos.replace(/,/g,"")))/10))*10 : onselect.cragPos) : "No data"}</li>
                            <li className="text-left px-2"><u>CrAg+ on ART</u>: {onselect.cragPosART ? `${onselect.cragPosART > 10 ? Math.floor((parseInt((onselect.cragPosART.replace(/,/g,"")))/10))*10 : onselect.cragPosART} (${(100 - Math.ceil(parseInt((onselect.cragPosART.replace(/,/g,""))/parseInt(onselect.cragPos.replace(/,/g,""))*100))).toString()}%)` : "No data"}</li>
                            <li className="text-left px-2"><u>Cryptococcal Meningitis</u>: {onselect.crypto ? (onselect.crypto > 10 ? Math.floor((parseInt((onselect.crypto.replace(/,/g,"")))/10))*10 : onselect.crypto) : "No data"}</li>
                            <li className="text-left px-2"><u>Cryptococcal Deaths</u>: {onselect.deaths ? (onselect.deaths > 10 ? Math.floor((parseInt((onselect.deaths.replace(/,/g,"")))/10))*10 : onselect.deaths) : "No data"}</li>
                            <li className="text-left px-2"><u>CrAg+, CD4 &lt; 200</u>: {onselect.cragPrev ? onselect.cragPrev : "No data"}</li>
                            <br />
                            <li className="text-left px-2"><u>People living with HIV - Adults (15+)</u>: {onselect.hiv ? onselect.hiv : "No data"}</li>
                            <li className="text-left px-2"><u>People living with HIV who know their status (%)</u>: {onselect.numKnow ? `${onselect.numKnow} (${onselect.percentKnow})` : "No data"}</li>
{/*                         <li className="text-left px-8"><u>HIV+, on ART</u>: {onselect.onART ? `${onselect.onART} (${onselect.percentART}%)` : "No data"}</li>
                            <li className="text-left px-8"><u>HIV+, CD4 &lt; 200</u>: {onselect.CD4 ? `${onselect.CD4} (${onselect.percentCD4})` : "No data"}</li>
 */}                          
                            <li className="text-left px-2"><u>People living with HIV receiving ART - Adults (15+)</u>: {onselect.onART ? `${onselect.onART} (${Math.ceil(parseInt((onselect.onART.replace(/,/g,""))/parseInt(onselect.hiv.replace(/,/g,""))*100)).toString()}%)` : "No data"}</li>
                            <li className="text-left px-2"><u>Adults living with HIV with CD4 cell count &lt; 200 cells/mcL</u>: {onselect.CD4 ? `${onselect.CD4} (${onselect.percentCD4})` : "No data"}</li>
                            {/* <li className="text-left px-8"><u>CrAg+, CD4 &lt; 200</u>: {onselect.cragPrev ? onselect.cragPrev : "No data"}</li> */}
                            <br />
                            <li className="text-left px-2"><u>Cost of CrAg screening for all with CD4 cell count &lt; 200 cells/mcL</u>: {onselect.costScreening ? `${onselect.costScreening}` : "No data"}</li>
                            <li className="text-left px-2"><u>Cost of treating cryptococcal meningitis</u>: {onselect.costTreatment ? `${onselect.costTreatment}` : "No data"}</li>
                        </ul>{/* Content goes here */}</div>
                    <div className="px-4 py-4 sm:px-6 ">
                        <ul>
                            <li className="text-left px-2 text-sm">HIV data source: <a href="https://aidsinfo.unaids.org/" className="underline text-blue-600 hover:text-rose-900">UNAIDS</a></li>
                            <li className="text-left px-2 text-sm">Screening cost data assumes $3.50/test in LMIC</li>
                            <li className="text-left px-2 text-sm">Treatment cost data source: <a href="https://www.croiconference.org/abstract/cost-effectiveness-of-the-ambition-regimen-for-hiv-associated-cryptococcal-meningitis/" className="underline text-blue-600 hover:text-rose-900">AMBITION Regimen Cost Effectiveness</a></li>
                        </ul>
                    {/* Content goes here */}
                    {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
                    </div>
                </div>
                )}
                <br />

        </section>

    )

}

export default Map;