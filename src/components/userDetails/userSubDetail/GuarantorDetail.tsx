import { Stack } from "@mui/system";
import React from "react";
import { UserType } from "../../SharedComponent/UserType";
import UserDetailItem from "../UserDetailItem";

const GuarantorDetail: React.FC<{ title: string; user: UserType }> = ({
  title,
  user,
}) => {
  const firstName = user?.guarantor?.firstName;
  const lastName = user?.guarantor?.lastName;
  const phoneNumber = user?.guarantor?.phoneNumber;
  const email = "noemail@gmail.com";
  const relationship = "sister";

  return (
    <Stack className="user_sub_details_section" paddingBottom="30px" gap={1}>
      <Stack className="title">{title}</Stack>
      <Stack
        className="user_sub_detail"
        width="100%"
        direction="row"
        flexWrap="wrap"
        justifyContent="flex-start"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <UserDetailItem label="Full name" value={`${firstName} ${lastName}`} />
        <UserDetailItem label="Phone number" value={email} />
        <UserDetailItem label="email address" value={phoneNumber} />
        <UserDetailItem label="Relationship" value={relationship} />
      </Stack>
    </Stack>
  );
};

export default GuarantorDetail;
