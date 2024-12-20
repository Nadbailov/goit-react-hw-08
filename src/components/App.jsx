import "modern-normalize";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "./Loader/Loader";
import { Route, Routes } from "react-router-dom";
import { refresh } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { selectLoading } from "../redux/contacts/selectors";
import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const loading = useSelector(selectLoading);
  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    loading && <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/contacts" />} />
        <Route path="contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
        <Route path="login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
