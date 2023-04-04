import UserCount from "./UserCount";
import { Stack } from "@mui/system";
import useUserData from "./useUserDataCount";

const UserCounts = () => {
  // getting user details genereated from the custom hook useUserData
  const userData = useUserData();

  return (
    <Stack direction={{ xs: "column", sm: "row", lg: "row" }} gap={2}>
      {userData.map((data, index) => {
        return <UserCount key={index} {...data} />;
      })}
    </Stack>
  );
};

export default UserCounts;
