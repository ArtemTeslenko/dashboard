import { Formik, Form, useFormik } from "formik";
import { SignupBtn } from "./SignupBtn";
import { FormBox, FormInput } from "../../CommonStyles";
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
    <FormBox>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <FormInput
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Name"
          />
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
          <SignupBtn />
        </Form>
      </Formik>
    </FormBox>
  );
};
