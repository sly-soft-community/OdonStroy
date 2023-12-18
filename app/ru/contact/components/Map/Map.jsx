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
        //42.874301, 74.599050
        lat: 42.893498022858616,
        lng: 74.68226654704037,
    };

    useEffect(() => {
        // gsap.to("#card-wrapper", {
        //     duration: 10,
        //     ease: "none",
        //     repeat: -1,
        //     scale: 0.2,
        //     duration: 1.5
        // })
        var scales = [{ scale: 0 }, { scale: 1 }];

        // gsap.to('#card-wrapper', {
        //     motionPath: {
        //         path: [
        //             { scale: 0.5, rotation: 160, x: 180 },
        //             { scale: 0.8, rotation: 280, x: 380, y: 30 },
        //             { scale: 0.8, rotation: 360, x: 500, y: 60 },
        //             { scale: 0.8, rotation: 280, x: 320, y: 30 },
        //             { scale: 0.8, rotation: 280, x: 180, y: 30 },
        //             { scale: 0.5, rotation: 160, x: 60 },

        //             // { scale: 0.8, rotation: 3 },
        //         ],
        //         curviness: 0
        //     },
        //     duration: 3,
        //     ease: "none",
        //     repeat: -1,
        //     repeatDelay: 1
        // });

    }, [isLoaded])

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