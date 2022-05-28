import * as React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
  } from "react-simple-maps";

  const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function Map(){
    return (
        <section
        aria-labelledby="section-map"
        className="max-w-full mx-auto pt-18 px-4 sm:pt-10 sm:px-20 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                CryptoMap
            </h2>
            <p className="mt-0 text-xl text-gray-500">
                Global Map of Cryptococcal Meningitis Epidemiologic Data
            </p>
            <div className="mt-4 mx-auto drop-shadow-lg">
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                    scale: 147
                    }}>
                    <ZoomableGroup zoom={0.8}>
                        <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#9998A3"
                                stroke="#EAEAEC"
                            />
                            ))
                        }
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        <div className="my-4 drop-shadow-lg">
            <p>Info Text Pending</p>
        </div>
        </section>
    );
};

export default Map;