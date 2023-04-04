import { Stack } from "@mui/system";
import React from "react";
import { formatPhoneNo } from "../../../utils/formatPhoneNo";
import { UserType } from "../../SharedComponent/UserType";
import UserDetailItem from "../UserDetailItem";
import "./userSubDetail.scss";

const PersonalInfo: React.FC<{ title: string; user: UserType }> = ({
  title,
  user,
}) => {
  const firstName = user?.profile?.firstName;
  const lastName = user?.profile?.lastName;
  const phonenumber = user?.profile?.phoneNumber;
  const email = user?.email;
  const bvn = user?.profile?.bvn;
  const gender = user?.profile?.gender;

  let modifiedPhoneNumber: string;
  if (phonenumber) {
    modifiedPhoneNumber = formatPhoneNo(phonenumber);
  }

  return (
    <Stack className="user_sub_details_section" paddingBottom="30px" gap={1}>
      <Stack component="p" className="title">
        {title}
      </Stack>
      <Stack
        className="user_sub_detail"
        width="100%"
        direction="row"
        flexWrap="wrap"
        justifyContent="flex-start"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <UserDetailItem label="Full name" value={`${firstName} ${lastName}`} />
        <UserDetailItem label="Phone Number" value={modifiedPhoneNumber!} />
        <UserDetailItem label="Email Address" value={email} />
        <UserDetailItem label="BVN" value={bvn} />
        <UserDetailItem label="Gender" value={gender} />
        <UserDetailItem label="Marital status" value="Single" />
        <UserDetailItem label="children" value="None" />
        <UserDetailItem label="Type of Residence" value="Parent’s Apartment" />
      </Stack>
    </Stack>
  );
};

export default PersonalInfo;
