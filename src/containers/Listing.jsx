import { connect } from "react-redux";
import Listing from "../components/Listing";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    businesses: state.businesses.businesses,
  };
};

export default connect(mapStateToProps)(Listing);
