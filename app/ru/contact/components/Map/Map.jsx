"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import map from '@/media/map.svg'
import styles from "./Map.module.scss"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(MotionPathPlugin);

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const center = {
        lat: 42.893498022858616,
        lng: 74.68226654704037,
    };

    return isLoaded ? (
        <div id='card-wrapper' className={styles.cardWrapper}>
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
        </div>
    ) : (
        <>
            <div className={styles.plaseholder}/>
            {/* <Image src={map} alt="" className={styles.plaseholder} /> */}
        </>
    );
}

export default React.memo(Map);