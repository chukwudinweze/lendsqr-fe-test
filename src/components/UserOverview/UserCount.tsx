import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { userCountDataType } from "./userCountType";

const UserCount: React.FC<userCountDataType> = ({
  icon,
  title,
  count,
  iconColor,
}) => {
  return (
    <Stack
      gap={1}
      sx={{
        width: "240px",
        height: "160px",
        background: "#fff",
        justifyContent: "center",
        padding: "0 30px",
        borderRadius: "3px",
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        width="40px"
        height="40px"
        borderRadius="50%"
        bgcolor={iconColor}
      >
        <Avatar
          src={icon}
          alt={title}
          sx={{
            width: "20px",
            height: "20px",
          }}
        />
      </Stack>
      <Typography
        fontFamily="Work Sans', sans-serif"
        fontWeight={500}
        style={{
          color: "rgba(84, 95, 125, 1)",
          textTransform: "uppercase",
          fontSize: "14px",
        }}
      >
        {title && title}
      </Typography>
      <Typography
        fontFamily="Work Sans', sans-serif"
        style={{
          fontWeight: 600,
          color: "rgba(33, 63, 125, 1)",
          textTransform: "uppercase",
          fontSize: "24px",
        }}
      >
        {count && count.toLocaleString()}
      </Typography>
    </Stack>
  );
};

export default UserCount;
