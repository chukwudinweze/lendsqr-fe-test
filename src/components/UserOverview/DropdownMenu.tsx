import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAppDispatch } from "../../store/hooks";
import { activateUser, blacklistUser } from "../../store/userSlice";

interface DropdownMenuProps {
  id: string;
  label: string;
  status: string;
  //   handleBlacklistUser: (id: string) => void;
  //   handleActivateUser: (id: string) => void;

  children: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  id,
  children,
  //   handleBlacklistUser,
  //   handleActivateUser,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const dispatch = useAppDispatch();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleBlacklistUser = () => {
    dispatch(blacklistUser(id));
    setAnchorEl(null);
  };
  const handleActivateUser = () => {
    dispatch(activateUser(id));
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {children}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>View Details</MenuItem>
        <MenuItem onClick={handleBlacklistUser}>Blacklist User</MenuItem>
        <MenuItem onClick={handleActivateUser}>Activate User</MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
