import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

function SignInForm(props) {
  const initialValues = {
    email: '',
    password: '',
  };
  const handleFormikSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormikSubmit}
      validationSchema={VALIDATION_SCHEMA}
    >
      {formikProps => {
        console.dir(formikProps);
        const { errors } = formikProps;
        return (
          <Form>
            <Field name="email" type="text" />
            <ErrorMessage name="email" />
            <br />
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
            <br />
            <button type="submit">Login</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignInForm;
