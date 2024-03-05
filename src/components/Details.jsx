import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

const Details = (props) => {
  const { id } = useParams();
  const business = props.businesses.find((b) => b.id == id);

  const mapRef = useRef(null);

  useEffect(() => {
    if (!business) return;
    const google = window.google;
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: business.lat, lng: business.lng },
      zoom: 12,
    });
    new google.maps.Marker({
      position: { lat: business.lat, lng: business.lng },
      map: map,
      title: business.name,
    });
  }, [business]);

  if (!business) {
    return <h2>Business not found</h2>;
  }

  return (
    <Container>
      <div>
        <h1>{business.name}</h1>
        <p>{business.address}</p>
        <p>{business.hours}</p>
        <p>{business.description}</p>
        <div style={{ height: "400px", width: "50%" }} ref={mapRef} />
      </div>
    </Container>
  );
};

export default Details;
