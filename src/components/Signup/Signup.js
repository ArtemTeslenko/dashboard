import {
  SignupBox,
  SignupRedirect,
  SignupRedirectLink,
  SignupRedirectText,
  SignupTitle,
  SignupUrge,
} from "./Signup.styled";
import { SignupForm } from "./SignupForm";

export const Signup = () => {
  return (
    <SignupBox>
      <SignupTitle>Welcome</SignupTitle>
      <SignupUrge>Welcome! Please enter your details</SignupUrge>
      <SignupForm />
      <SignupRedirect>
        <SignupRedirectText>Or </SignupRedirectText>
        <SignupRedirectLink to="/login">Log in</SignupRedirectLink>
      </SignupRedirect>
    </SignupBox>
  );
};
