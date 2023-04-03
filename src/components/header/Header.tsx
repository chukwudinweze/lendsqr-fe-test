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
import "./Header.scss";

const Header = () => {
  return (
    <Stack className="header" component="header" direction="row" gap={16}>
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
            className="notification"
            color="secondary"
            aria-label="add an alarm"
            sx={{ color: "#213F7D", width: "19.67px" }}
          >
            <NotificationsNoneIcon />
          </IconButton>
          <Avatar
            className="avater"
            alt="Profile Picture"
            // sx={{ width: "48px", height: "48px" }}
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
