import { connect } from "react-redux";
import Details from "../components/Details";
import AddListing from "./AddListing";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    businesses: state.businesses.businesses,
  };
};

export default connect(mapStateToProps)(Details);
