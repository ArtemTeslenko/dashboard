import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 500px;
  color: #9496a6;
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 8px;
  color: #ffffff;
  font-weight: 500;
  font-size: 48px;
  line-height: 1.16;
`;

const Urge = styled.p`
  margin-top: 0;
  margin-bottom: 48px;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.6;
`;

const Redirect = styled.div``;

const RedirectText = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 1.6;
  color: #ffffff;
`;

const RedirectLink = styled(NavLink)`
  font-weight: 500;
  font-size: 15px;
  line-height: 1.6;
  text-decoration: none;
  color: #78b4ed;
`;

export { Box, Title, Urge, Redirect, RedirectText, RedirectLink };
