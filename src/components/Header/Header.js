import { useUser } from "../../utils";
import {
  HeaderBox,
  PageName,
  UserInfoBox,
  UserInfoIcon,
  UserInfoName,
  UserLogoutBtn,
} from "./Header.styled";

export const Header = () => {
  const { handleTokenValue } = useUser();

  const handleLogout = () => {
    handleTokenValue(null);
  };

  const { userName } = useUser();
  return (
    <HeaderBox>
      <PageName>Dashboard</PageName>
      <UserInfoBox>
        <UserInfoIcon>icon</UserInfoIcon>
        <UserInfoName>{userName}</UserInfoName>
        <UserLogoutBtn type="button" onClick={handleLogout}>
          Logout
        </UserLogoutBtn>
      </UserInfoBox>
    </HeaderBox>
  );
};
