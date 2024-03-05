import { connect } from "react-redux";
import LoggedInListing from "../components/LoggedInListing";

import { removeBusiness } from "../redux/actions";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    businesses: state.businesses.businesses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBusiness: (index) => dispatch(removeBusiness(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInListing);
