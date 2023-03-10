import { useQuery } from "react-query";
import { getDashboard, useUser } from "../../utils";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import {
  DashboardContentBox,
  DashboardMainContainer,
} from "./Dashboard.styled";
import { Statistic } from "./Statistic";

export const Dashboard = () => {
  const { token } = useUser();
  const { isLoading, error } = useQuery(["dashboard", token], getDashboard);

  return (
    <DashboardMainContainer>
      <Sidebar />
      <Header />
      <DashboardContentBox>
        <Statistic />
        {isLoading && <span>Loading...</span>}
        {error && <span>Smthn went wrong</span>}
      </DashboardContentBox>
    </DashboardMainContainer>
  );
};
