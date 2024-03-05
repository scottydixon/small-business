import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
} from "@mui/material";

function AddListing({ addBusiness }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [hours, setHours] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = {
      id: uuidv4(),
      name,
      description,
      address,
      hours,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    };
    addBusiness(newListing);
    setName("");
    setDescription("");
    setAddress("");
    setHours("");
    setLat("");
    setLng("");
  };

  return (
    <Card sx={{ minWidth: 475, minHeight: 475, backgroundColor: "#f0eded" }}>
      <CardHeader title="Add Listing" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Business Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            sx={{ marginBottom: 0.5 }}
          />
          <br />
          <TextField
            fullWidth
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            sx={{ marginTop: 0.5, marginBottom: 0.5 }}
          />
          <br />
          <TextField
            fullWidth
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            sx={{ marginTop: 0.5, marginBottom: 0.5 }}
          />
          <br />
          <TextField
            fullWidth
            label="Hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />
          <br />
          <TextField
            fullWidth
            label="Latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            required
            sx={{ marginTop: 0.5, marginBottom: 0.5 }}
          />
          <br />
          <TextField
            fullWidth
            label="Longitude"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            required
            sx={{ marginTop: 0.5 }}
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#4d6e94",
              marginTop: 1,
              "&:hover": {
                background: "#283544",
              },
            }}
          >
            Add Listing
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddListing;
