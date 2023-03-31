import { UserType } from "./../components/SharedComponent/UserType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addUserStatus } from "../utils/addUserStatus";

const localStorageKey = "users";
const totalusers = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
const modifiedUsers = addUserStatus(totalusers);

const initialState: UserType[] = modifiedUsers;

const userSlice = createSlice({
  name: "completedTxn",
  initialState,
  reducers: {
    blacklistUser(state, action: PayloadAction<string>) {
      return state.map((user) => {
        if (user.id === action.payload && user.randomStatus !== "blacklisted") {
          // if id is found, update customers status and status is not blacklisted
          return {
            ...user,
            randomStatus: "blacklisted",
            randomStatusColor: "rgba(228, 3, 59, 1)",
            randomBgColor: "rgba(228, 3, 59, .2)",
          };
        }
        return user;
      });
    },
    activateUser(state, action: PayloadAction<string>) {
      return state.map((user) => {
        if (user.id === action.payload && user.randomStatus !== "active") {
          // if id is found, and status is not active update customers status
          return {
            ...user,
            randomStatus: "active",
            randomStatusColor: "rgba(57, 205, 98, 1)",
            randomBgColor: "rgba(57, 205, 98, .2)",
          };
        } else {
          return user;
        }
      });
    },
  },
});

export const { activateUser, blacklistUser } = userSlice.actions;

export default userSlice;
