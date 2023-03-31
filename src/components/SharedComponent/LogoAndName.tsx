import { Stack } from "@mui/system";
import unionLogo from "../../assets/UnionLogo.png";
import lendsqr from "../../assets/lendsqr.png";
import { Avatar } from "@mui/material";

const LogoAndName = () => {
  return (
    <Stack direction="row" gap={1}>
      {/* Please refer to this link for instructions on how to use Material UI Avatar:
           https://mui.com/material-ui/react-avatar/ */}
      <Avatar
        alt="union Logo"
        src={unionLogo}
        variant="square"
        sx={{ width: "24.75px", height: "25px" }}
      />
      <Avatar
        alt="lendsqr"
        src={lendsqr}
        variant="square"
        sx={{ width: "138.44px", height: "36px" }}
      />
    </Stack>
  );
};

export default LogoAndName;
