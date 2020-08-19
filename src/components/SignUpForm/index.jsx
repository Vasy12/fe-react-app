import React, { Fragment, Component } from 'react';
import LabeledInput from './LabeledInput';
import * as yup from 'yup';

const NAME_SCHEMA = yup
  .string()
  .trim()
  .matches(
    /(?=^[A-Z][a-z]*(?:-[A-Z][a-z]*)?$)[A-z\-]{1,64}/,
    'Name must be valid name'
  )
  .required();

const validationSchema = yup.object({
  userName: NAME_SCHEMA,
  userSurname: NAME_SCHEMA,
  userEmail: yup
    .string()
    .email('email field must be valid email')
    .required('email is required field'),
  userPassword: yup
    .string()
    .matches(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)^\w{8,64}$/,
      'Your password must be at least 8 characters long, be of mixed case and also contain a digit or symbol.'
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('userPassword')], 'Passwords must match')
    .required('Confirm password is required field'),

  userAge: yup.number().min(0).max(150).required(),
  gender: yup.string().oneOf(['male', 'female', 'other']).required(),
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [
        {
          name: 'userName',
          label: 'User name',
          type: 'text',
        },
        {
          name: 'userSurname',
          label: 'User surname',
          type: 'text',
        },
        {
          name: 'userEmail',
          label: 'User email',
          type: 'text',
        },
        {
          name: 'userPassword',
          label: 'User password',
          type: 'password',
        },
        {
          name: 'confirmPassword',
          label: 'Confirm password',
          type: 'password',
        },
        {
          name: 'userAge',
          label: 'User age',
          type: 'range',
          min: 0,
          max: 150,
        },
        {
          type: 'radio',
          name: 'gender',
          fields: [
            {
              label: 'Male',
              value: 'male',
            },
            {
              label: 'Female',
              value: 'female',
            },
            {
              label: 'Other',
              value: 'other',
            },
          ],
        },
      ],
      values: {
        userName: 'Name',
        userSurname: 'Surname',
        userEmail: 'test@test.com',
        userPassword: 'tes1Testst',
        confirmPassword: 'tes1Testst',
        userAge: 0,
        gender: 'other',
      },
      error: null,
    };
  }
  handleChange = ({ target: { value, name, type } }) => {
    const { values } = this.state;
    this.setState({
      values: {
        ...values,
        [name]: type === 'number' || type === 'range' ? Number(value) : value,
      },
    });
  };

  mapField = ({ name, ...rest }) => {
    const { values, error } = this.state;
    switch (rest.type) {
      case 'radio':
      case 'checkbox':
        return rest.fields.map(f => (
          <Fragment key={`${name}${f.value}`}>
            <br />
            <LabeledInput
              {...rest}
              {...f}
              name={name}
              checked={values[name] === f.value}
              onChange={this.handleChange}
            />
            <br />
          </Fragment>
        ));
      default: {
        return (
          <Fragment key={name}>
            <br />
            <LabeledInput
              {...rest}
              value={values[name]}
              name={name}
              onChange={this.handleChange}
            />
            {error && error.path === name && <span>{error.message}</span>}
            <br />
          </Fragment>
        );
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const { values } = this.state;

    try {
      validationSchema.validateSync(values);
      this.setState({
        error: null,
      });
    } catch (e) {
      this.setState({
        error: e,
      });
    }
  };

  render() {
    const { fields } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {fields.map(this.mapField)}
        <button type="submit">Sign up</button>
        <button type="reset">reset form</button>
      </form>
    );
  }
}

export default SignUpForm;
