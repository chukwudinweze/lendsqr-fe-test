import Button from "@mui/material/Button/Button";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { activateUser, blacklistUser } from "../../store/userSlice";
import BackButton from "../SharedComponent/BackButton";
import PageTitle from "../SharedComponent/PageTitle";

const UserdetailHeader: React.FC<{ id: string | undefined }> = ({ id }) => {
  const dispatch = useAppDispatch();
  return (
    <Stack gap={2} width="100%">
      <Link to="/users">
        <Stack justifyItems="flex-start">
          <BackButton label="Back to users" />
        </Stack>
      </Link>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flex={1}
        paddingLeft="40px"
      >
        <PageTitle title="Users" />
        <Stack gap={2} direction="row" justifyContent="space-between">
          <Button
            onClick={() => dispatch(blacklistUser(id!))}
            variant="outlined"
            sx={{
              border: "1px solid rgba(228, 3, 59, 1)",
              color: "rgba(228, 3, 59, 1)",
              fontFamily: "Work Sans, sans-serif",
            }}
          >
            Block user
          </Button>
          <Button
            onClick={() => dispatch(activateUser(id!))}
            variant="outlined"
            sx={{
              border: "1px solid rgba(57, 205, 204, 1)",
              fontFamily: "Work Sans, sans-serif",
            }}
          >
            Activate User
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UserdetailHeader;
