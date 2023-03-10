import { MainContainer } from "../../CommonStyles";
import {
  Box,
  Redirect,
  RedirectLink,
  RedirectText,
  Title,
  Urge,
} from "../../CommonStyles";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <MainContainer>
      <Box>
        <Title>Welcome back</Title>
        <Urge>Welcome back! Please enter your details</Urge>
        <LoginForm />
        <Redirect>
          <RedirectText>Or </RedirectText>
          <RedirectLink to="/signup">Sign up</RedirectLink>
        </Redirect>
      </Box>
    </MainContainer>
  );
};
