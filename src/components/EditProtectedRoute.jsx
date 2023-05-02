import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

import ROUTES from "../routes/ROUTES";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

const EditProtectedRoute = ({ element, isAdmin, isBiz }) => {
  //* logic section
  const { id } = useParams();
  ///const [userID, setUserID] = useState(null);
  const isLoggedIn = useSelector((bigState) => bigState.authSlice.isLoggedIn);
  const payload = useSelector((bigState) => bigState.authSlice.payload);
  let userID;
  useEffect(() => {
    axios
      .get("/cards/card/" + id)
      .then(({ data }) => {
        if (isLoggedIn) {
          if (
            ((isAdmin && payload && payload.isAdmin) ||
              (isBiz && payload && payload.biz)) &&
            payload._id === data.user_id
          )
            return element;
          else {
            toast.error("invalid permissions");

            return <Navigate to={ROUTES.LOGIN} />;
          }
        }
      })
      .catch((err) => {
        toast.error("Oops, Error retrieving data");
      });
  }, []);
  // const fetchData = async () => {
  //   try {
  //     let { data } = axios.get("/cards/card/" + id);
  //     userID = data.user_id;
  //   } catch {
  //     toast.error("Oops, Error retrieving data");
  //   }
  // };
};
export default EditProtectedRoute;

//  .then(({ data }) => {
//          setUserID(data.user_id);
//        })
