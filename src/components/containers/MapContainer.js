import React, {useState} from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './MapContainer.css'

const MapContainer = () => {

    const [ lat, setLat ] = useState(37.318562)
    const [ long, setLong ] = useState(-121.951071)
    const [ zoom, setZoom ] = useState(15)
    const position = [lat, long]



    return(
        <Map id="map-id" center={position} zoom={zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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