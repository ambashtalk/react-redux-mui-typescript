import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { getIsAuthenticated } from "src/redux/selectors/authSelectors";

const PrivateRoute = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true, state: { path: location.pathname } });
    }
  }, [isAuthenticated]);

  return <Outlet />;
};

export default PrivateRoute;
