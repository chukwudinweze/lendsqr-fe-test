import { Box } from "@mui/material";
import React from "react";
import { Stack } from "@mui/system";
import Header from "../components/header/Header";
import SideNav from "../components/sideNav/SideNav";
import UserOverview from "../components/UserOverview/UserOverview";

const UserDashboard = () => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Stack direction="row">
        <SideNav />
        <UserOverview />
      </Stack>
    </Box>
  );
};

export default UserDashboard;
