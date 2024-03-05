import React from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import Listing from "./containers/Listing";
import Details from "./containers/Details";
import Login from "./components/Login";
import LoggedInListing from "./containers/LoggedInListing";
import AddListing from "./containers/AddListing";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Listing />} />
      <Route path="/addlisting" element={<AddListing />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/loggedin"
        element={<ProtectedRoute component={LoggedInListing} />}
      />
    </Routes>
  );
};

export default Router;
