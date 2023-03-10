import {
  LoginBox,
  LoginRedirect,
  LoginRedirectLink,
  LoginRedirectText,
  LoginTitle,
  LoginUrge,
} from "./Login.styled";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <LoginBox>
      <LoginTitle>Welcome back</LoginTitle>
      <LoginUrge>Welcome back! Please enter your details</LoginUrge>
      <LoginForm />
      <LoginRedirect>
        <LoginRedirectText>Or </LoginRedirectText>
        <LoginRedirectLink to="/signup">Sign up</LoginRedirectLink>
      </LoginRedirect>
    </LoginBox>
  );
};
