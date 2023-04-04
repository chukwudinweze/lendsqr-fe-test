import { Typography } from "@mui/material";
import React from "react";

const PageTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Typography
      className="page_title"
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
