import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import React, { useEffect, useState } from "react";
import UserdetailHeader from "./UserdetailHeader";
import UserDetailMenu from "./UserDetailMenu";
import UserFullDetail from "./UserFullDetail";
import { useParams } from "react-router-dom";
import { UserType } from "../SharedComponent/UserType";
import useFetchDetail, { FetchDetailReturn } from "../Hooks/useFetchUserDetail";

const UserDetails: React.FC = () => {
  const params = useParams();
  const { id } = params;

  const { fetchdata, error, user, loading }: FetchDetailReturn = useFetchDetail(
    `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
  );

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  if (loading) {
    return (
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  }

  if (error) {
    return <div>Error fetching data</div>;
  }
  // firstName,
  //   lastName,
  //   orgName,
  //   avatar,
  //   accountBalance,
  return (
    <Stack padding="0 30px" bgcolor="#E5E5E5" width="100%" gap={2}>
      <UserdetailHeader id={user?.id} />
      <UserDetailMenu user={user!} />
      <UserFullDetail user={user!} />
    </Stack>
  );
};

export default UserDetails;
