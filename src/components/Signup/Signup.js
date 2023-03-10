import { MainContainer } from "../../CommonStyles";
import {
  Box,
  Redirect,
  RedirectLink,
  RedirectText,
  Title,
  Urge,
} from "../../CommonStyles";
import { SignupForm } from "./SignupForm";

export const Signup = () => {
  return (
    <MainContainer>
      <Box>
        <Title>Welcome</Title>
        <Urge>Welcome! Please enter your details</Urge>
        <SignupForm />
        <Redirect>
          <RedirectText>Or </RedirectText>
          <RedirectLink to="/login">Log in</RedirectLink>
        </Redirect>
      </Box>
    </MainContainer>
  );
};
