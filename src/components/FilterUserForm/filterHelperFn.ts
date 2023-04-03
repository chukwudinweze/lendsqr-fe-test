import { FilterParamType } from "./filterParamType";
import { UserType } from "./../SharedComponent/UserType";

export const filterHelper = (users: UserType[], values: FilterParamType) => {
  const filteredUsers = users.filter(
    (user) =>
      (!values.userName ||
        values.userName.toLowerCase().trim() === user.userName.toLowerCase()) &&
      (!values.email ||
        values.email.toLowerCase().trim() === user.email.toLowerCase()) &&
      (!values.phoneNumber ||
        values.phoneNumber.toLowerCase().trim() ===
          user.phoneNumber.toLowerCase()) &&
      (!values.randomStatus ||
        values.randomStatus.toLowerCase().trim() ===
          user.randomStatus.toLowerCase()) &&
      (!values.orgName ||
        values.orgName.toLowerCase().trim() === user.orgName.toLowerCase()) &&
      (!values.orgName ||
        values.orgName.toLowerCase().trim() === user.orgName.toLowerCase())
  );
  return filteredUsers;
};
