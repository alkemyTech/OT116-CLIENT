import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, Marker } from "@react-google-maps/api";
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Map = ({ address }) => {
  const [latitude, setLatitude] = useState(-34.55881726737178);
  const [longitude, setLongitude] = useState(-58.47476996280374);

  useEffect(async () => {
    if (address) {
      try {
        const res = await axios
          .get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
          )
          .then((res) => {
            setLatitude(res.data.results[0].geometry.location.lat);
            setLongitude(res.data.results[0].geometry.location.lng);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [address]);

  return (
    <div style={{ height: "60vh", width: "620px", padding: "20px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "100%",
          width: "100%",
        }}
        zoom={15}
        center={{
          lat: latitude,
          lng: longitude,
        }}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    </div>
  );
};

export default Map;
