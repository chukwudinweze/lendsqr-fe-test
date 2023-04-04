import { Stack } from "@mui/system";
import unionLogo from "../../assets/UnionLogo.png";
import lendsqr from "../../assets/lendsqr.png";
import { Avatar } from "@mui/material";

const LogoAndName = () => {
  return (
    <Stack direction="row" gap={1}>
      <Avatar
        className="logo"
        alt="union Logo"
        src={unionLogo}
        variant="square"
        sx={{ width: "24.75px", height: "25px" }}
      />
      <Avatar
        className="lendsqr"
        alt="lendsqr"
        src={lendsqr}
        variant="square"
        sx={{ width: "138.44px", height: "36px" }}
      />
    </Stack>
  );
};

export default LogoAndName;
