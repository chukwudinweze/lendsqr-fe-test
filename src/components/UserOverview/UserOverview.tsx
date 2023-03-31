import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import PageTitle from "../SharedComponent/PageTitle";
import UserCounts from "./UserCounts";
import UserListTable from "./UserListTable";
import { useAppSelector } from "../../store/hooks";

const UserOverview: React.FC = () => {
  return (
    <Stack
      gap={2}
      sx={{
        backgroundColor: "#E5E5E5",
        flex: 1,
        padding: "20px",
        paddingRight: "50px",
      }}
    >
      <PageTitle title="Users" />
      <UserCounts />
      <UserListTable />
    </Stack>
  );
};

export default UserOverview;
