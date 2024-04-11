import React, {useState, useEffect} from "react"

import { SectionWrapper } from "../../hoc"
import CustomerData from "./customerData/CustomerData";
import ReviewHistory from "./reviewHistory/ReviewHistory";
import ReviewModal from "../../components/modal/ReviewModal";
import { getCustomer } from "../../actions/customerAction";


const CustomerReviews = () => {
    const [customers, setCustomers] = useState();
    const [flag, setFlag] = useState(false);
  useEffect(()=>{
    getCustomer().then((data)=>{
      setCustomers(data)
    })
  },[flag])
  return (
    <>
      <ReviewModal flag={flag} setFlag={setFlag} />
      <CustomerData customers={customers} />
      <ReviewHistory />
   
    </>
  );
};

export default SectionWrapper(CustomerReviews, "customerReviews");
