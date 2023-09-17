import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./MapComponent.css";


const App = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAdqvxf4AO_Dr6SAjauxDUfmzhvG2kK1vo"
    });
    const center = useMemo(() => ({ lat: 34.022415, lng: -118.285530 }), []);

    return (
        <div className="App">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={13}
                >
                    <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
                </GoogleMap>
            )}
            hi
        </div>
    );
};

export default App;