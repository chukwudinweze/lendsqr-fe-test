import React from "react";
import Stack from "@mui/material/Stack";
import PageTitle from "../SharedComponent/PageTitle";
import UserCounts from "./UserCounts";
import UserListTable from "./UserListTable";

const UserOverview: React.FC = () => {
  return (
    <Stack
      gap={2}
      sx={{
        backgroundColor: "#E5E5E5",
        width: "100%",
        flex: 1,
        padding: "10px",
      }}
    >
      <PageTitle title="Users" />
      <UserCounts />
      <UserListTable />
    </Stack>
  );
};

export default UserOverview;
