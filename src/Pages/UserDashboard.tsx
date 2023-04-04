import { Box } from "@mui/material";
import React from "react";
import { Stack } from "@mui/system";
import Header from "../components/header/Header";
import SideNav from "../components/sideNav/SideNav";
import UserOverview from "../components/UserOverview/UserOverview";
import { motion } from "framer-motion";

const UserDashboard = () => {
  return (
    // framer motion to give the page live feel when it renders
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box>
        <Box>
          <Header />
        </Box>
        <Stack direction="row">
          <SideNav />
          <UserOverview />
        </Stack>
      </Box>
    </motion.div>
  );
};

export default UserDashboard;
