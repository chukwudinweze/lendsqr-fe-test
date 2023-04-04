import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EmailAndPassword from "./EmailAndPassword";
import "./LoginFormSection.scss";

const LoginFormSection = () => {
  return (
    <Stack className="welcome_section" gap={5}>
      <Stack gap={1}>
        <Typography
          className="welcome"
          variant="h1"
          color="#213F7D"
          fontFamily="Avenir Next"
        >
          Welcome!
        </Typography>
        <Typography
          className="enter_details_to_login"
          variant="body2"
          component="p"
          color="#545F7D"
          fontFamily="Avenir Next"
        >
          Enter details to login.
        </Typography>
      </Stack>
      <Stack>
        <EmailAndPassword />
      </Stack>
    </Stack>
  );
};

export default LoginFormSection;
