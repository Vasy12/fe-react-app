import * as Yup from 'yup';

const NAME_SCHEMA = Yup.string().min(3).max(64).required();

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: Yup.string()
    .min(6)
    .max(16)
    .matches(/[^\d][\w]+/, 'Only letters and numbers')
    .required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(
      /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)^.{8,64}$/,
      'Your password must be at least 8 characters long, be of mixed case and also contain a digit. '
    )
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')])
    .required(),
  role: Yup.string().oneOf(['buyer', 'creative']).required(),
});
