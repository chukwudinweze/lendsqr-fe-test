import { UserType } from "../components/SharedComponent/UserType";
import { formatDate } from "./formatDate";
import { userStatus } from "../components/UserOverview/userStatus";

export const addUserStatus = (users: UserType[]) => {
  // Declare status properties to be appended to the fetched users property
  let randomStatus: string, randomStatusColor: string, randomBgColor: string;

  const modifiedUsers = users.map((user: UserType) => {
    // Format the createdAt date
    let createdAt = formatDate(user.createdAt);

    // Destructure the user object to extract the relevant properties
    const { id, userName, phoneNumber, orgName } = user;

    // Append the declared status properties to the modified user object
    return {
      id,
      userName,
      phoneNumber,
      createdAt,
      orgName,
      randomStatus,
      randomStatusColor,
      randomBgColor,
    };
  });

  // Looping through the modified users array and assigning random status properties to each object
  for (let i = 0; i < modifiedUsers.length; i++) {
    // Generate a random index within the length of the userStatus array
    const randomIndex = Math.floor(Math.random() * userStatus.length);

    // Select a random status object from the userStatus array based on the random index
    const status = userStatus[randomIndex];

    // Assign the random status properties to the current modified user object
    modifiedUsers[i].randomStatus = status.status;
    modifiedUsers[i].randomStatusColor = status.color;
    modifiedUsers[i].randomBgColor = status.background;
  }

  // Return the modified users array with the appended status properties
  return modifiedUsers;
};
