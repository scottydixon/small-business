import { connect } from "react-redux";
import AddListing from "../components/AddListing";
import { addBusiness } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  console.log("dispatched");
  return {
    addBusiness: (business) => dispatch(addBusiness(business)),
  };
};

export default connect(null, mapDispatchToProps)(AddListing);
