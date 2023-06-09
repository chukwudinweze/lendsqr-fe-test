import Stack from "@mui/material/Stack";
import React from "react";
import { UserType } from "../SharedComponent/UserType";
import EduAndEmployment from "./userSubDetail/EduAndEmployment";
import GuarantorDetail from "./userSubDetail/GuarantorDetail";
import PersonalInfo from "./userSubDetail/PersonalInfo";
import Socials from "./userSubDetail/Socials";

const UserFullDetail: React.FC<{ user: UserType }> = ({ user }) => {
  return (
    <Stack
      bgcolor="#fff"
      paddingLeft="30px"
      borderRadius="5px"
      sx={{ boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)" }}
    >
      <PersonalInfo title="Personal Information" user={user} />
      <EduAndEmployment title="Education and employment" user={user} />
      <Socials title="Socials" user={user} />
      <GuarantorDetail title="Socials" user={user} />
    </Stack>
  );
};

export default UserFullDetail;
