import { Box } from "@mui/material";
import React from "react";
import { Stack } from "@mui/system";
import Header from "../components/header/Header";
import SideNav from "../components/sideNav/SideNav";
import UserDetails from "../components/userDetails/UserDetails";
import { motion } from "framer-motion";

const UserDetailsPage = () => {
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
          <UserDetails />
        </Stack>
      </Box>
    </motion.div>
  );
};

export default UserDetailsPage;
