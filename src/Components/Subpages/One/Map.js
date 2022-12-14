/*global google*/
import { map } from "@firebase/util";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

import { render } from "@testing-library/react";
import Click from "../Building/Building.js"

//JC marker




function LoadMap() {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyDAMOsNwu8yRKNyzlFtImYDsKFHJdxC6sA", });

    if (!isLoaded) return <div>Loading... </div>;
    return <Map />;
}

function Map() {
    const map = <GoogleMap zoom={18} center={{ lat: 38.83001, lng: -77.30747 }} mapContainerClassName="map-container">
        <Marker position={{ lat: 38.83001, lng: -77.30747 }} onClick={Click} />
    </GoogleMap>;

    return map;
}



export default LoadMap;
