import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import React from "react";

const UserDetailItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <Stack
      sx={{
        width: "20%",
        marginTop: "10px",
      }}
    >
      <Typography
        style={{
          color: "#545F7D",
          fontSize: "12px",
          fontFamily: "Work Sans, sans-serif",
          textTransform: "uppercase",
        }}
      >
        {label}
      </Typography>
      <Typography
        style={{
          // font should be 16 but i reduced it cos of the long email
          fontSize: "12px",
          fontWeight: 500,
          color: "#545F7D",
          fontFamily: "Work Sans, sans-serif",
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
};

export default UserDetailItem;
