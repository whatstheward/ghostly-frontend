import React, {useState} from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './MapContainer.css'

const MapContainer = () => {

    const [ lat, setLat ] = useState(37.318562)
    const [ long, setLong ] = useState(-121.951071)
    const [ zoom, setZoom ] = useState(18)
    const position = [lat, long]



    return(
        <Map id="map-id" center={position} zoom={zoom}>
            <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                maxZoom={18}
                edgeBufferTiles={2}
            />
           
           
            <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </Map>
    )
}

export default MapContainer