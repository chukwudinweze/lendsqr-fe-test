import Stack from "@mui/material/Stack";
import React from "react";
import LogoAndName from "../SharedComponent/LogoAndName";
import SearchInput from "./SearchBox";
import Typography from "@mui/material/Typography";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import IconButton from "@mui/material/IconButton";
import { Avatar } from "@mui/material";
import profileImage from "../../assets/profileImage.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <Stack
      component="header"
      direction="row"
      alignItems="center"
      gap={16}
      width="100%"
      height="100px"
      paddingLeft="6px"
      sx={{ boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 0px" }}
      //       Offset: 3px, 0px
      // rgba(0, 0, 0, 0.04)
    >
      <LogoAndName />
      <Stack component="nav" direction="row" gap={35}>
        <SearchInput />
        <Stack direction="row" alignItems="center" gap={3}>
          <Typography
            component="a"
            sx={{
              textTransform: "capitalize",
              textDecoration: "underline",
              cursor: "pointer",
              FontFamily: "Roboto",
              fontSize: "16px",
            }}
          >
            Docs
          </Typography>
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            sx={{ color: "#213F7D", width: "19.67px" }}
          >
            <NotificationsNoneIcon />
          </IconButton>
          <Avatar
            alt="Profile Picture"
            sx={{ width: "48px", height: "48px" }}
            src={profileImage}
          />
          <Stack direction="row" alignItems="center">
            <Typography component="p">Adedeji</Typography>
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              sx={{ color: "#213F7D", width: "19.67px" }}
            >
              <ArrowDropDownIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
