import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const SideNavItem: React.FC<{ icon: string; label: string }> = ({
  icon,
  label,
}) => {
  return (
    <NavLink to="#">
      <Stack
        direction="row"
        alignItems="center"
        gap={1.3}
        sx={{
          padding: "5px 5px",
          cursor: "pointer",
          color: "#545F7D",
          transition: "color 0.2s ease-in-out",
          "&:hover": {
            color: "#213F7D",
            borderLeft: "3px solid #39CDCC",
            background: "#d8e7e7",
          },
        }}
      >
        <Avatar
          src={icon && icon}
          alt={label}
          sx={{ width: "16px", height: "12.8px" }}
        />
        <Typography
          fontFamily="Work Sans, sans-serif"
          fontSize="16px"
          component="p"
          fontWeight="400"
          // lineHeight="18.77px"
        >
          {label && label}
        </Typography>
      </Stack>
    </NavLink>
  );
};

export default SideNavItem;
