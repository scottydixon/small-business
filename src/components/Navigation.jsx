import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Container, Typography } from "@mui/material";
import cookie from "cookie";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Businesses
          </Typography>

          <ul className="nav-list">
            <li className="nav-list-item">
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Business Listings
              </Link>
            </li>

            <li
              className="nav-list-item"
              onClick={() => {
                document.cookie = cookie.serialize("loggedIn", null, {
                  maxAge: 0,
                });
                navigate("/login");
              }}
            >
              <Link
                to={"/login"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
