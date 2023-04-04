import Stack from "@mui/material/Stack";
import { Avatar, Typography } from "@mui/material";
import userPicture from "../../assets/avatar.png";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import UserDetailTab from "./UserDetailTab";
import { UserType } from "../SharedComponent/UserType";

const UserDetailMenu: React.FC<{ user: UserType }> = ({ user }) => {
  const accountBalance = user?.accountBalance;
  const orgName = user?.orgName;
  const firstName = user?.profile?.firstName;
  const lastName = user?.profile?.lastName;
  const avatar = user?.profile?.avatar;

  return (
    <Stack
      bgcolor="#fff"
      gap={4}
      paddingLeft="40px"
      paddingTop="20px"
      width="100%"
      borderRadius="5px"
      sx={{ boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)" }}
    >
      <Stack direction="row" gap={2}>
        <Stack direction="row" gap={1}>
          <Avatar
            src={avatar ? avatar : userPicture}
            sx={{ maxWidth: "100px", maxHeight: "100px" }}
          />
          <Stack justifyContent="center" alignContent="center">
            <Typography
              style={{
                fontFamily: "Work Sans, sans-serif",
                color: "rgba(33, 63, 125, 1)",
                fontSize: "22px",
                textTransform: "capitalize",
                fontWeight: "500",
              }}
            >
              {`${firstName} ${lastName}`}
            </Typography>
            <Typography
              style={{
                fontFamily: "Work Sans, sans-serif",
                fontSize: "14px",
                color: "#545F7D",
              }}
            >
              {orgName}
            </Typography>
          </Stack>
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack>
          <Typography
            style={{
              fontFamily: "Work Sans, sans-serif",
              fontWeight: "500",
              fontSize: "14px",
              textTransform: "capitalize",
            }}
          >
            User's Tier
          </Typography>
          <Rating
            name="text-feedback"
            value={1}
            max={3}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarBorderIcon
                style={{ opacity: 0.55, color: "rgba(233, 178, 0, 1)" }}
                fontSize="inherit"
              />
            }
          />
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack>
          <Typography
            fontSize={{ xs: "18px", sm: "22px" }}
            style={{
              fontFamily: "Work Sans, sans-serif",
              color: "rgba(33, 63, 125, 1)",
              fontWeight: "500",
            }}
          >
            &#x20A6;{accountBalance}
          </Typography>
          <Typography
            fontSize={{ xs: "10px", sm: "12px" }}
            style={{
              fontFamily: "Work Sans, sans-serif",
              color: "rgba(33, 63, 125, 1)",
              whiteSpace: "normal",
            }}
          >
            9912345678/Providus Bank
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        <UserDetailTab />
      </Stack>
    </Stack>
  );
};

export default UserDetailMenu;
