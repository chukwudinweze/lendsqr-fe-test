import Button from "@mui/material/Button/Button";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./BackButton.scss";

const BackButton: React.FC<{ label: string }> = ({ label }) => {
  return (
    <Button
      className="back_button"
      sx={{ color: "color: rgba(84, 95, 125, 1)" }}
      variant="text"
      startIcon={<KeyboardBackspaceIcon />}
    >
      {label}
    </Button>
  );
};

export default BackButton;
