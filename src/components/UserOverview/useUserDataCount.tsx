import { userCountDataType } from "./userCountType";
import userIcon from "../../assets/users1.png";
import activeUserIcon from "../../assets/activeUsers.png";
import userWithLoansIcon from "../../assets/user-with-loans.png";
import userWithSavingsIcon from "../../assets/user-with-savings.png";
import { useAppSelector } from "../../store/hooks";

const useUserData = () => {
  const users = useAppSelector((state) => state.userSlice);

  // Calculate counts for each data category
  const totalItems = users.length;
  const activeUsers = users.filter(
    (user) => user.randomStatus === "active"
  ).length;
  // const usersWithLoans = users.filter((user) => user.loans.status === true).length;
  // const usersWithSavings = users.filter(
  //   (user) => user.savings > 0
  // ).length;

  // Set the data in the format expected by the usercount component
  const userData: userCountDataType[] = [
    {
      title: "Users",
      icon: userIcon,
      iconColor: "rgba(223, 24, 255, .2)",
      count: totalItems,
    },
    {
      title: "Active Users",
      icon: activeUserIcon,
      iconColor: "rgba(87, 24, 255, .2)",
      count: activeUsers,
    },
    {
      title: "User with Loans",
      icon: userWithLoansIcon,
      iconColor: "rgba(245, 95, 68, .2)",
      count: 12453,
    },
    {
      title: "User with Savings",
      icon: userWithSavingsIcon,
      iconColor: "rgba(255, 51, 102, .2)",
      count: 102453,
    },
  ];

  return userData;
};

export default useUserData;
