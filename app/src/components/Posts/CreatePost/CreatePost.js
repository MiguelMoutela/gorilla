import React from "react";
import { withFormik } from "formik";
import * as yup from "yup";

import Container from "../../../utils/components/UI/Posts/Container/Container";
import Header from "../../../utils/components/UI/Posts/Header/Header";
import Main from "../../../utils/components/UI/Posts/Main/Main";
import Form from "../../../utils/components/UI/Form/Form";
import Label from "../../../utils/components/UI/Label/Label";
import Input from "../../../utils/components/UI/Input/Input";
import TextArea from "../../../utils/components/UI/TextArea/TextArea";
import Button from "../../../utils/components/UI/Button/Button";
import Error from "../../../utils/components/UI/Error/Error";

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <Container>
    <Header>
      <h1>Create a new post</h1>
    </Header>
    <Main>
      <Form width="100%" height="100%" onSubmit={handleSubmit}>
        <Label>Title</Label>
        <Input
          type="text"
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.title}
        />
        {touched.title && errors.title && (
          <Error>
            <h2>{errors.title}</h2>
          </Error>
        )}
        <Label>Body</Label>
        <TextArea
          type="text"
          name="body"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.body}
        />
        {touched.body && errors.body && (
          <Error>
            <h2>{errors.body}</h2>
          </Error>
        )}
        <Button type="submit">Create post</Button>
      </Form>
    </Main>
  </Container>
);

// Wrap our form with the using withFormik HoC
const CreatePost = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ title: "", body: "" }),

  validationSchema: yup.object().shape({
    title: yup
      .string()
      .min(8, "Body must be at least 8 characters")
      .required("Title is required"),
    body: yup
      .string()
      .min(8, "Body must be at least 8 characters")
      .required("Body is required")
  }),

  handleSubmit(values) {
    console.log(values);
  }
})(InnerForm);

export default CreatePost;
