import * as yup from "yup";

// This code creates two Yup validation schemas, one for email and one for password, and exports them both as part of a larger object schema. The email schema requires a valid email format and makes it a required field, while the password schema requires a minimum length of 8 characters and also makes it a required field. Please refer to this link for mor info https://formik.org/docs/examples/with-material-ui
const emailSchema: yup.StringSchema<
  string | undefined,
  Record<string, unknown>
> = yup.string().email("Enter a valid email").required("Email is required");

const passwordSchema: yup.StringSchema<
  string | undefined,
  Record<string, unknown>
> = yup
  .string()
  .min(8, "Password should be of minimum 8 characters length")
  .required("Password is required");

export const schema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});
