import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PageTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Typography
      fontFamily="Work Sans, sans-serif"
      fontWeight={500}
      fontSize="24px"
      color="#213F7D"
    >
      {title}
    </Typography>
  );
};

export default PageTitle;
