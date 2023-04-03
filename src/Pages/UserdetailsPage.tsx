import { Box } from "@mui/material";
import React from "react";
import { Stack } from "@mui/system";
import Header from "../components/header/Header";
import SideNav from "../components/sideNav/SideNav";
import UserDetails from "../components/userDetails/UserDetails";

const UserDetailsPage = () => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Stack direction="row">
        <SideNav />
        <UserDetails />
      </Stack>
    </Box>
  );
};

export default UserDetailsPage;
