import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user?.uid) {
    return <Navigate to="/login"></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
