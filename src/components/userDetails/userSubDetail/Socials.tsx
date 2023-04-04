import { Stack } from "@mui/system";
import React from "react";
import { UserType } from "../../SharedComponent/UserType";
import UserDetailItem from "../UserDetailItem";
import "./userSubDetail.scss";

const Socials: React.FC<{ title: string; user: UserType }> = ({
  title,
  user,
}) => {
  const twitter = user?.socials?.twitter;
  const facebook = user?.socials?.facebook;
  const instagram = user?.socials?.instagram;

  return (
    <Stack className="user_sub_details_section" paddingBottom="30px" gap={1}>
      <Stack className="title" component="p">
        {title}
      </Stack>
      <Stack
        className="user_sub_detail"
        direction="row"
        flexWrap="wrap"
        justifyContent="flex-start"
        sx={{ borderColor: "divider" }}
      >
        <UserDetailItem label="Twitter" value={twitter} />
        <UserDetailItem label="Facebook" value={facebook} />
        <UserDetailItem label="Instagram" value={instagram} />
      </Stack>
    </Stack>
  );
};

export default Socials;
