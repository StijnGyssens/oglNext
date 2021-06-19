import Head from "next/head"
import { useEffect } from "react";
export default function map() {
    const mapboxgl=require("mapbox-gl");
    mapboxgl.accessToken="pk.eyJ1Ijoic3Rpam5neXNzZW5zIiwiYSI6ImNraGdkMDQ3NzA2bXcyc3A5dDBweTBmcmUifQ.Rlt-rT2CHiOts39bY7EyWw";
    
    useEffect(()=>{
        const map = new mapboxgl.Map({
            container:"my-map",
            style: "mapbox://styles/mapbox/streets-v11",
            center:[4.324329740544093,51.01190188360755 ],
            zoom: 15
        })
        const marker= new mapboxgl.Marker({
            color:"rgb(239, 128, 45)",
        })
        .setLngLat([4.324329740544093,51.01190188360755 ])
        .setPopup(new mapboxgl.Popup().setHTML("<h4>Ondernemers Groep Londerzeel vzw</h4><p>p/a Beton Trowel NV<br/>Nijverheidsstraat 10 - 1840 Londerzeel</p>"))
        .addTo(map)
    })

    return (
        <>
            <div id="my-map" />
        </>
    )
}