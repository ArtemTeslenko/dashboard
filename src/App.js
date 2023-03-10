import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes";
import { DashboardPage, LoginPage, SignupPage } from "./pages";
import { Layout } from "./components/Layout/Layout";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={"dashboard"} />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute redirectTo={"/login"}>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted redirectTo={"/dashboard"}>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="signup"
            element={
              <PublicRoute restricted redirectTo={"/dashboard"}>
                <SignupPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<div>not found</div>} />
        </Route>
      </Routes>
    </>
  );
};
