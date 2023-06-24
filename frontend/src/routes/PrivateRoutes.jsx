import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ loggedIn }) => {
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
