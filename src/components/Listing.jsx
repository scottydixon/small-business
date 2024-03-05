import React from "react";
import {
  Table,
  TableBody,
  Paper,
  CardActions,
  Container,
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
} from "@mui/material";
import { Link } from "react-router-dom";

const Listings = (props) => {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Business</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.businesses &&
              props.businesses.map((business, idx) => (
                <TableRow key={business.name}>
                  <TableCell component="th" scope="row">
                    <CardActions style={{ color: "mediumblue" }}>
                      <Link to={`/details/${business.id}`}>
                        {business.name}
                      </Link>
                    </CardActions>
                  </TableCell>
                  <TableCell align="left">{business.description}</TableCell>
                  <TableCell align="left">{business.address}</TableCell>
                  <TableCell align="left">{business.hours}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Listings;
