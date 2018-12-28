import React from "react";
import { Link } from "react-router-dom";
import { withFormik } from "formik";
import * as yup from "yup";

import Form from "../../utils/components/UI/Form/Form";
import Label from "../../utils/components/UI/Label/Label";
import Input from "../../utils/components/UI/Input/Input";
import Button from "../../utils/components/UI/Button/Button";
import Error from "../../utils/components/UI/Error/Error";

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <Form onSubmit={handleSubmit} gridRow="4 / 6">
    <Label>Email address</Label>
    <Input
      type="email"
      name="email"
      width="80%"
      maxWidth="320px"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
    />
    {touched.email && errors.email && (
      <Error>
        <h2>{errors.email}</h2>
      </Error>
    )}
    <Label>Password</Label>
    <Input
      type="password"
      name="password"
      width="80%"
      maxWidth="320px"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
    />
    {touched.password && errors.password && (
      <Error>
        <h2>{errors.password}</h2>
      </Error>
    )}
    <Button width="150px" type="submit">
      Sign In
    </Button>
    <Link to="/signup">Don't have an account? Create an account</Link>
  </Form>
);

// Wrap our form with the using withFormik HoC
const SignIn = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ email: "", password: "" }),

  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email("Email not valid")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
  }),

  handleSubmit(values) {
    console.log(values);
  }
})(InnerForm);

export default SignIn;
