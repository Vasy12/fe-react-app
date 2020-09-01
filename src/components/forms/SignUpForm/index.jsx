import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import Input from '../components/Input';
import { SIGN_UP_SCHEMA } from './../../../utils/validate';

function SignUpForm(props) {
  const { onSubmit } = props;
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'buyer',
  };

  const fields = [
    {
      name: 'firstName',
      type: 'text',
      placeholder: 'first name',
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'last name',
    },
    {
      name: 'displayName',
      type: 'text',
      placeholder: 'display name',
    },
    {
      name: 'email',
      type: 'type',
      placeholder: 'email address',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'password',
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'password confirmation',
    },
    {
      name: 'role',
      type: 'radio',
      values: ['buyer', 'creative'],
    },
  ];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_UP_SCHEMA}
    >
      {() => (
        <Form>
          {fields.map((field, index) => (
            <Field key={index} name={field.name}>
              {fieldProps => <Input {...field} {...fieldProps} />}
            </Field>
          ))}

          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
