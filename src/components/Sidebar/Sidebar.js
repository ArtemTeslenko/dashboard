import {
  SidebarBox,
  SidebarLogoBox,
  SidebarNavBox,
  SidebarNavItem,
  SidebarNavList,
} from "./Sidebar.styled";

export const Sidebar = () => {
  return (
    <SidebarBox>
      <SidebarLogoBox>Logo</SidebarLogoBox>
      <SidebarNavBox>
        <SidebarNavList>
          <SidebarNavItem>1</SidebarNavItem>
          <SidebarNavItem>2</SidebarNavItem>
          <SidebarNavItem>3</SidebarNavItem>
          <SidebarNavItem>4</SidebarNavItem>
        </SidebarNavList>
      </SidebarNavBox>
    </SidebarBox>
  );
};
