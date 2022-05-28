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
        const { ADMIN, total_crag_pos_with_cm_string } = e.target.feature.properties;
        setOnselect({
            country:ADMIN,
            crypto:total_crag_pos_with_cm_string,
        });


    });
    /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
    const resetHighlight= (e =>{
        setOnselect({});
        e.target.setStyle(style(e.target.feature));
    })
    /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
     highlightFeature and resetHighlight*/
    const onEachFeature= (feature, layer)=> {
        layer.on({
            mouseover: highlightFeature,
            mouseleave: resetHighlight,
        });
        layer.bindTooltip(`<div><b>Country:</b> ${feature.properties.ADMIN}<p><b>Cryptococcal Meningitis Cases (2020):</b> ${feature.properties.total_crag_pos_with_cm_string ? feature.properties.total_crag_pos_with_cm_string : "No data"}</p></div>`, 
            {
                direction: "right",
                sticky: true,
                offset: [10, 0],
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
        height: '55vh',
        width: '85%',
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
                CryptoMap
            </h2>
            <p className="mt-0 text-xl text-gray-500">
                Global Map of Cryptococcal Meningitis Epidemiologic Data
            </p>
            <div className="">
                <div className="">

                <MapContainer 
                    zoom={2}
                    maxZoom={6}
                    minZoom={1}
                    maxBoundsViscosity={1.0}
                    scrollWheelZoom={true} 
                    style={mapStyle} 
                    center={[32.616276686609176, 3.4219812261325426]}>
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
                {!onselect.country && (
                <div className="census-info-hover">
                    <strong>Cryptococcus Statistics by Country</strong>
                    <p>Hover on each county for more details</p>
                </div>
                )}
                {onselect.country && (
                    <ul className="census-info">
                        <li><strong>Cryptococcus Statistics by Country</strong></li>
                        <li><strong>{onselect.country}</strong></li><br/>
                        <li>Total Crypto: {onselect.crypto ? onselect.crypto : "No data"}</li>
                    </ul>
                )}
                </div>
            </div>

        </section>

    )

}

export default Map;