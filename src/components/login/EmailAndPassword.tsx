import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { schema } from "../../utils/loginValidationSchema";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack/Stack";
import { useNavigate } from "react-router-dom";
import "./EmailAndPassword.scss";

interface InputValues {
  email: string;
  password: string;
}

const EmailAndPassword: React.FC = () => {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values: InputValues) => {
      navigate("/dashboard");
      formik.resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack gap={1}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button className="forgot-password-btn" variant="text" type="button">
          Forgot Password
        </Button>
        <Button
          className="login-btn"
          variant="contained"
          fullWidth
          type="submit"
        >
          Log in
        </Button>
      </Stack>
    </form>
  );
};

export default EmailAndPassword;
