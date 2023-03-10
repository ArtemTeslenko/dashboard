import { Formik, Form, useFormik } from "formik";
import { SignupBtn } from "./SignupBtn";
import { SignupFormBox, SignupFormInput } from "./SignupForm.styled";
import { signupUser, useUser } from "../../utils";

export const SignupForm = () => {
  const { handleUserName, handleTokenValue } = useUser();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values, actions) => {
      const body = JSON.stringify(values);
      signupUser(body, (token, userName = values.name) => {
        handleTokenValue(token);
        handleUserName(userName);
      });
      actions.resetForm();
    },
  });

  return (
    <SignupFormBox>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <SignupFormInput
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Name"
          />
          <SignupFormInput
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
          />
          <SignupFormInput
            type="text"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
          />
          <SignupBtn />
        </Form>
      </Formik>
    </SignupFormBox>
  );
};
