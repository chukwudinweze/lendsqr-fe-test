import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAppDispatch } from "../../store/hooks";
import { activateUser, blacklistUser } from "../../store/userSlice";
import { Link } from "react-router-dom";
import viewDetailIcon from "../../assets/viewDetaiBtn.png";
import blacklistUserIcon from "../../assets/blacklistIcon.png";
import activateUserIcon from "../../assets/activateIcon.png";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";

interface DropdownMenuProps {
  id: string;
  label: string;
  status: string;
  children: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ id, children }) => {
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
        <MenuItem>
          <Link to={`/users/${id}`}>
            <Stack gap={1} direction="row" alignItems="center">
              <Avatar
                sx={{
                  width: "14px",
                  height: "14px",
                }}
                src={viewDetailIcon}
                alt="view detal"
              />
              <Typography color="rgba(84, 95, 125, 1)">
                {" "}
                View Details
              </Typography>
            </Stack>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleBlacklistUser}>
          <Stack gap={1} direction="row" alignItems="center">
            <Avatar
              sx={{ width: "14px", height: "14px" }}
              src={blacklistUserIcon}
              alt="blacklist user"
            />
            <Typography color="rgba(84, 95, 125, 1)">Blacklist User</Typography>
          </Stack>
        </MenuItem>
        <MenuItem onClick={handleActivateUser}>
          <Stack gap={1} direction="row" alignItems="center">
            <Avatar
              sx={{ width: "14px", height: "14px" }}
              src={activateUserIcon}
              alt="activate user"
            />
            <Typography color="rgba(84, 95, 125, 1)">Activate User</Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
