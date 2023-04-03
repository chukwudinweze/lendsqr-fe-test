import { Stack } from "@mui/system";
import React from "react";
import { UserType } from "../SharedComponent/UserType";
import UserDetailItem from "./UserDetailItem";

const Socials: React.FC<{ title: string; user: UserType }> = ({
  title,
  user,
}) => {
  const twitter = user?.socials?.twitter;
  const facebook = user?.socials?.facebook;
  const instagram = user?.socials?.instagram;

  return (
    <Stack paddingBottom="30px" gap={1}>
      <Stack
        paddingTop="16px"
        fontSize="16px"
        fontWeight="500"
        color="rgba(33, 63, 125, 1)"
        width="100%"
        component="p"
      >
        {title}
      </Stack>
      <Stack
        width="100%"
        direction="row"
        flexWrap="wrap"
        justifyContent="flex-start"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <UserDetailItem label="Twitter" value={twitter} />
        <UserDetailItem label="Facebook" value={facebook} />
        <UserDetailItem label="Instagram" value={instagram} />
      </Stack>
    </Stack>
  );
};

export default Socials;
