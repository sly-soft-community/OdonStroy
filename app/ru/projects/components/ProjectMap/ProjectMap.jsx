"use client";
import React from 'react';
import styles from "./ProjectMap.module.scss"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function ProjectMap() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const center = {
        lat: 42.893498022858616,
        lng: 74.68226654704037,
    };
    const markerList = [
        { // // 42.892100357209536, 74.54593187510251
            lat: 42.892100357209536,
            lng: 74.54593187510251,
        },
        { //42.88834450163008, 74.53377487870266
            lat: 42.88834450163008,
            lng: 74.53377487870266,
        },
        { //42.895072585488144, 74.5751799375958
            lat: 42.895072585488144,
            lng: 74.5751799375958,
        },
        { //42.91593484214456, 74.6154217408746
            lat: 42.91593484214456,
            lng: 74.6154217408746,
        },
        { //42.98177142850606, 74.66758447340149
            lat: 42.98177142850606,
            lng: 74.66758447340149,
        },



        { //42.82643484047987, 74.54868455958457
            lat: 42.82643484047987,
            lng: 74.54868455958457,
        },
        { //42.84336351941636, 74.57331336650827
            lat: 42.84336351941636,
            lng: 74.57331336650827,
        },
        { //42.81396744436188, 74.57896607725543
            lat: 42.81396744436188,
            lng: 74.57896607725543,
        },
        { //42.81657169736113, 74.61208427791622
            lat: 42.81657169736113,
            lng: 74.61208427791622,
        },
        { //42.82288892738166, 74.61717710732421
            lat: 42.82288892738166,
            lng: 74.61717710732421,
        },
        { //42.84227678216458, 74.63224539027739
            lat: 42.84227678216458,
            lng: 74.63224539027739,
        },
        { //42.83024648239372, 74.27259429778053
            lat: 42.83024648239372,
            lng: 74.27259429778053,
        },
        { //42.83516315681221, 74.29838939794378
            lat: 42.83516315681221,
            lng: 74.29838939794378,
        },
        { //42.8519720270344, 74.33270132921845
            lat: 42.8519720270344,
            lng: 74.33270132921845,
        },
        { //42.817623591592685, 73.85710951898393
            lat: 42.817623591592685,
            lng: 73.85710951898393,
        },
        { //42.764977055003385, 74.92744133933293
            lat: 42.764977055003385,
            lng: 74.92744133933293,
        },
        { //42.70892689177829, 75.44756897888087
            lat: 42.70892689177829,
            lng: 75.44756897888087,
        },
        { //42.516298854092305, 78.38607231034065
            lat: 42.516298854092305,
            lng: 78.38607231034065,
        },
        { //42.48727546058937, 78.38790376734596
            lat: 42.48727546058937,
            lng: 78.38790376734596,
        },
    ]

    return isLoaded ? (
        <div id='card-wrapper' className={styles.cardWrapper}>
            <GoogleMap
                id="circle-example"
                mapContainerStyle={{
                    height: "100%",
                    width: "100%",
                    minHeight: '496px'
                }}
                zoom={7.5}
                center={center}

            >
                {markerList.map((item, key) =>
                    <Marker key={key} position={item} />
                )}
                <></>
            </GoogleMap>
        </div>
    ) : (
        <>
            <div className={styles.plaseholder} />
            {/* <Image src={map} alt="" className={styles.plaseholder} /> */}
        </>
    );
}

export default React.memo(ProjectMap);