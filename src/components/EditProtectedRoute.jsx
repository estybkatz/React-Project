import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

import ROUTES from "../routes/ROUTES";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

const EditProtectedRoute = ({ element, isAdmin, isBiz }) => {
  const { id } = useParams();
  const isLoggedIn = useSelector((bigState) => bigState.authSlice.isLoggedIn);
  const payload = useSelector((bigState) => bigState.authSlice.payload);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    axios
      .get("/cards/card/" + id)
      .then(({ data }) => {
        setUserID(data.user_id);
      })
      .catch((err) => {
        toast.error("Oops, Error retrieving data");
      });
  }, [id]);

  if (isLoggedIn) {
    if (
      ((isAdmin && payload && payload.isAdmin) ||
        (isBiz && payload && payload.biz)) &&
      payload._id === userID
    ) {
      return element;
    } else {
      toast.error("invalid permissions");
      return <Navigate to={ROUTES.LOGIN} />;
    }
  } else {
    toast.error("invalid permissions");
    return <Navigate to={ROUTES.LOGIN} />;
  }
};
export default EditProtectedRoute;

//  .then(({ data }) => {
//          setUserID(data.user_id);
//        })
