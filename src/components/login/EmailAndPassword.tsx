import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { schema } from "../../utils/loginValidationSchema";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack/Stack";

interface InputValues {
  email: string;
  password: string;
}

const EmailAndPassword: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values: InputValues) => {
      console.log(values);
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
        <Button
          variant="text"
          type="button"
          sx={{
            alignContent: "left",
            width: "147px",
            fontSize: "12px",
            fontStyle: "Demi Bold",
            fontWeight: "600",
            color: "#39CDCC",
            marginTop: "-10px",
          }}
        >
          Forgot Password
        </Button>
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{
            background: "#39CDCC",
            color: "#fff",
          }}
        >
          Log in
        </Button>
      </Stack>
    </form>
  );
};

export default EmailAndPassword;
