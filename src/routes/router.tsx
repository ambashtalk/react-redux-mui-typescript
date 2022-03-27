import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CircularProgressPage from "src/components/circularProgress";
import PrivateRoute from "src/components/privateRoute";
import { checkIsAuthenticated } from "src/redux/actions/authActions";
import { getIsLoading } from "src/redux/selectors";
import { getIsAuthenticated } from "src/redux/selectors/authSelectors";

//Components
const AppHeader = React.lazy(() => import("../components/header"));
const LoginPage = React.lazy(() => import("src/pages/login"));
const SRLPage = React.lazy(() => import("src/pages/srl"));
const PDPPage = React.lazy(() => import("src/pages/pdp"));
const CartPage = React.lazy(() => import("src/pages/cart"));
const ProfilePage = React.lazy(() => import("src/pages/profile"));
const NoMatch = React.lazy(() => import("src/pages/error/noMatch"));
const AlreadyLoggedIn = React.lazy(() => import("src/pages/error/loggedIn"));

export const AppRouter: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(checkIsAuthenticated());
  }, [isAuthenticated]);

  return (
    <Suspense fallback={<CircularProgressPage />}>
      <AppHeader />
      {isLoading ? (
        <CircularProgressPage />
      ) : (
        <Routes>
          <Route index element={<SRLPage />} />
          <Route
            path='login'
            element={!isAuthenticated ? <LoginPage /> : <AlreadyLoggedIn />}
          />
          <Route path='products' element={<SRLPage />} />
          <Route path='products/:productId' element={<PDPPage />} />
          <Route path='/' element={<PrivateRoute />}>
            <Route path='cart' element={<CartPage />} />
            <Route path='profile' element={<ProfilePage />} />
          </Route>
          <Route path='*' element={<NoMatch />} />
        </Routes>
      )}
    </Suspense>
  );
};
