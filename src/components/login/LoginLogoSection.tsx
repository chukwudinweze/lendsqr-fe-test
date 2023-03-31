import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import LogoAndName from "../SharedComponent/LogoAndName";
import SignImg from "../../assets/pablo-sign-in 1.svg";
import Stack from "@mui/material/Stack/Stack";

const LoginLogoSection = () => {
  return (
    <Stack gap={10} sx={{ width: "50%" }}>
      <Box sx={{ marginLeft: "45px" }}>
        <LogoAndName />
      </Box>
      <Avatar
        alt="pablo-sign-in"
        src={SignImg}
        variant="square"
        sx={{ width: "600px", height: "337.57px" }}
      />
    </Stack>
  );
};

export default LoginLogoSection;
