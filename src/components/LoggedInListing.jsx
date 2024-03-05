import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AddListing from "../containers/AddListing";
import DeleteIcon from "@mui/icons-material/Delete";
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
  Button,
} from "@mui/material";

const LoggedInListing = (props) => {
  const businesses = useSelector((state) => state.businesses.businesses);

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
              <TableCell align="center">Delete</TableCell>
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
                  <TableCell>
                    <DeleteIcon
                      // add onClick method here
                      onClick={() => props.removeBusiness(idx)}
                      className="icon text-red"
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button>
        <AddListing />
      </Button>
    </Container>
  );
};

export default LoggedInListing;
