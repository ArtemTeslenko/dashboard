import { Formik, Form, useFormik } from "formik";
import { loginUser, useUser } from "../../utils";
import { LoginBtn } from "./LoginBtn";
import { FormBox, FormInput } from "../../CommonStyles";

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
    <FormBox>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <FormInput
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
          />
          <FormInput
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
    </FormBox>
  );
};
