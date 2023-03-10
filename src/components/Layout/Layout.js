import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MainContainer } from "./Layout.styled";

export const Layout = () => {
  return (
    <MainContainer>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};
