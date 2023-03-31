import { Stack } from "@mui/material";
import LoginFormSection from "../components/login/LoginFormSection";
import LoginLogoSection from "../components/login/LoginLogoSection";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    // framer motion to give the page live feel when it renders
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Stack direction={"row"} width="100%" sx={{ padding: "50px 16px" }}>
        <LoginLogoSection />
        <LoginFormSection />
      </Stack>
    </motion.div>
  );
};

export default LoginPage;
