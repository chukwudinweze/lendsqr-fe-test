import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EmailAndPassword from "./EmailAndPassword";

const LoginFormSection = () => {
  return (
    <Stack
      padding="0 100px"
      paddingRight="150px"
      gap={5}
      justifyContent="center"
      alignContent="center"
      sx={{ width: "50%", paddingTop: "50px" }}
    >
      <Stack gap={1}>
        <Typography
          variant="h1"
          color="#213F7D"
          fontFamily="Avenir Next"
          sx={{ fontWeight: 700, fontSize: "40px", lineHeight: "54.64px" }}
        >
          Welcome!
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="#545F7D"
          fontFamily="Avenir Next"
          sx={{ fontWeight: 400, fontSize: "20px", lineHeight: "27.32pxpx" }}
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
