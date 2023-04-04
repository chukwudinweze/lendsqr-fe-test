import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import LogoAndName from "../SharedComponent/LogoAndName";
import SignImg from "../../assets/pablo-sign-in 1.svg";
import Stack from "@mui/material/Stack/Stack";
import "./LoginLogoSection.scss";

const LoginLogoSection = () => {
  return (
    <Stack className="section" gap={10}>
      <Box className="logo_name_cover">
        <LogoAndName />
      </Box>
      <Avatar
        sx={{ display: { xs: "none", sm: "none", lg: "flex" } }}
        className="pablo_sign_in"
        alt="pablo-sign-in"
        src={SignImg}
        variant="square"
      />
    </Stack>
  );
};

export default LoginLogoSection;
