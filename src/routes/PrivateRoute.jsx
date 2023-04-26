import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, userIsLoading } = useContext(AuthContext);
  if (userIsLoading) {
    return <h3>Loading....</h3>;
  }
  if (!user?.uid) {
    return <Navigate to="/login"></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
