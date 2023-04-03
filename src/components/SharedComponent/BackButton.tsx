import Button from "@mui/material/Button/Button";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const BackButton: React.FC<{ label: string }> = ({ label }) => {
  return (
    <Button
      sx={{
        maxWidth: "200px",
        fontSize: "16px",
        fontWeight: "400",
        textTransform: "none",
        paddingLeft: "-20px",
        color: "rgba(84, 95, 125, 1)",
        textAlign: "left",
        fontFamily: "Work Sans, sans-serif",
      }}
      variant="text"
      startIcon={<KeyboardBackspaceIcon />}
    >
      {label}
    </Button>
  );
};

export default BackButton;
