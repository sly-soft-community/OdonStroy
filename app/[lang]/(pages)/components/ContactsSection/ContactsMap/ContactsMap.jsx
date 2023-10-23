"use client";

import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function ContactsMap() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const center = {
        //42.874301, 74.599050
        lat: 40.52856961740336,
        lng: 72.79583363535384,
    };

    return isLoaded ? (
        <GoogleMap
            id="circle-example"
            mapContainerStyle={{
                height: "100%",
                width: "100%",
            }}
            zoom={14}
            center={center}
        >
            <Marker position={center} />
            <></>
        </GoogleMap>
    ) : (
        <></>
    );
}

export default React.memo(ContactsMap);
