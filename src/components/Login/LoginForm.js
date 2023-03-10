import { Formik, Form, useFormik } from "formik";
import { loginUser, useUser } from "../../utils";
import { LoginBtn } from "./LoginBtn";
import { LoginFormBox, LoginFormInput } from "./LoginForm.styled";

export const LoginForm = () => {
  const { handleTokenValue } = useUser();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, actions) => {
      const body = JSON.stringify(values);
      loginUser(body, (token) => handleTokenValue(token));
      actions.resetForm();
    },
  });

  return (
    <LoginFormBox>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <LoginFormInput
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
          />
          <LoginFormInput
            type="text"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
          />
          <LoginBtn />
        </Form>
      </Formik>
    </LoginFormBox>
  );
};
