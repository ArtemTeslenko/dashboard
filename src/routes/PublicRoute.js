import { Navigate } from "react-router-dom";
import { useUser } from "../utils";

export const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = "/dashboard",
}) => {
  const { isLoggedIn } = useUser();
  const shouldRedirect = isLoggedIn && restricted;
  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
};
