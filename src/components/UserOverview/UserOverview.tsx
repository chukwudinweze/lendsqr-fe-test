import React, { useEffect } from "react";
import Stack from "@mui/material/Stack";
import PageTitle from "../SharedComponent/PageTitle";
import UserCounts from "./UserCounts";
import UserListTable from "./UserListTable";
import useFetchUsers, { FetchUsersReturn } from "../Hooks/useFetchUsers";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const UserOverview: React.FC = () => {
  const { fetchdata, error, loading }: FetchUsersReturn = useFetchUsers(
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
  );

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  if (loading) {
    return (
      <Box sx={{ width: "80%" }}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  }

  if (error) {
    return <div>Error fetching users</div>;
  }
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
