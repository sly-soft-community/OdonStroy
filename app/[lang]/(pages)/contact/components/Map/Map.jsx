"use client";
import React from 'react';
import Image from 'next/image';
import map from '@/media/map.svg'
import styles from "./Map.module.scss"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";


function Map() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const center = {
        //42.874301, 74.599050
        lat: 42.893498022858616,
        lng: 74.68226654704037,
    };

    return isLoaded ? (
        <GoogleMap
            id="circle-example"
            mapContainerStyle={{
                height: "100%",
                width: "100%",
                minHeight: '496px'
            }}
            zoom={14}
            center={center}
        >
            <Marker position={center} />
            <></>
        </GoogleMap>
    ) : (
        <><Image src={map} alt="" className={styles.plaseholder} /></>
    );
}

export default React.memo(Map);