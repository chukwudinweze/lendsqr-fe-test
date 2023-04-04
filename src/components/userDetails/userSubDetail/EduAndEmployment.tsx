import { Stack } from "@mui/system";
import React from "react";
import { UserType } from "../../SharedComponent/UserType";
import UserDetailItem from "../UserDetailItem";

const EduAndEmployment: React.FC<{ title: string; user: UserType }> = ({
  title,
  user,
}) => {
  const eduLevel = user?.education?.level;
  const employmentStatus = user?.education?.employmentStatus;
  const employmentSector = user?.education?.sector;
  const employmentDuration = user?.education?.duration;
  const officialEmail = user?.education?.officeEmail;
  const firstIncome = user?.education?.monthlyIncome[0];
  const secondIncome = user?.education?.monthlyIncome[0];
  const loanRepayment = user?.education?.loanRepayment;

  //   console.log(monthlyIncome);

  // I converted to number in order to apply localstring method

  let modifiedLoan = +loanRepayment;
  let modifiedFirstIncome = +firstIncome;
  let modifiedSecondIncome = +secondIncome;

  return (
    <Stack className="user_sub_details_section" gap={1}>
      <Stack component="p" className="title">
        {title}
      </Stack>
      <Stack
        className="user_sub_detail"
        width="100%"
        direction="row"
        flexWrap="wrap"
        justifyContent="flex-start"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <UserDetailItem label="Level of education" value={eduLevel} />
        <UserDetailItem label="Employment status" value={employmentStatus} />
        <UserDetailItem label="Sector of Employment" value={employmentSector} />
        <UserDetailItem
          label="Duration of employment"
          value={employmentDuration}
        />
        <UserDetailItem label="Official Email" value={officialEmail} />
        <UserDetailItem
          label="Monthly Income"
          value={`₦${modifiedFirstIncome.toLocaleString()}-${modifiedSecondIncome.toLocaleString()}`}
        />
        <UserDetailItem
          label="Loan Repayment"
          value={`₦${modifiedLoan.toLocaleString()}`}
        />
      </Stack>
    </Stack>
  );
};

export default EduAndEmployment;
