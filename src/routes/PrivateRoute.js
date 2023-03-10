import { Navigate } from "react-router-dom";
import { useUser } from "../utils";

export const PrivateRoute = ({ children, redirectTo = "/dashboard" }) => {
  const { isLoggedIn } = useUser();

  return <>{!isLoggedIn ? <Navigate to={redirectTo} /> : children}</>;
};
