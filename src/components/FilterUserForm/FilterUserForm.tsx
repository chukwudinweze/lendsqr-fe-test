import {
  TextField,
  MenuItem,
  FormControl,
  Select,
  Button,
  Box,
  Typography,
} from "@mui/material";
// import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { filterUsers, resetFilter } from "../../store/userSlice";
import { FilterParamType } from "./filterParamType";
import { filterHelper } from "./filterHelperFn";
import "./FilterUserForm.scss";

export interface FilterFormProps {
  onSubmit: (values: {
    orgName: string;
    userName: string;
    email: string;
    createdAt: Date;
    phoneNumber: string;
    randomStatus: string;
  }) => void;
  resetForm?: () => void;
}

const FilterForm = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.userSlice);

  //   const users = useAppSelector((state) =>
  //     state.userSlice.map((user) => ({
  //       ...user,
  //       createdAt: moment(user.createdAt).format("YYYY-MM-DD"),
  //     }))
  //   );

  //  retrieve all user statuses and organizations, whether they are duplicated or not.
  const userStatuses: string[] = users.map((user) => user.randomStatus);
  const userOrgs: string[] = users.map((user) => user.orgName);
  console.log(userStatuses);
  console.log(userOrgs);

  //now get the unique status and org. This is rendered in the Form select input
  const uniqueStatus: string[] = [...new Set(userStatuses)];
  const uniqueOrg: string[] = [...new Set(userOrgs)];

  const onSubmit = (values: FilterParamType) => {
    const filteredUsers = filterHelper(users, values);
    dispatch(filterUsers(filteredUsers));
    console.log(userStatuses);
    console.log(userOrgs);
  };

  //   There are better ways to reset the table aside reseting the entire state. I respectfully believe this is okay for the sake of this test and with the limited time
  const resetForm = () => {
    dispatch(resetFilter());
    formik.resetForm();
  };

  const initialValues: FilterParamType = {
    orgName: "",
    userName: "",
    email: "",
    createdAt: new Date(),
    phoneNumber: "",
    randomStatus: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <form className="filter-form" onSubmit={formik.handleSubmit}>
      <FormControl>
        <Typography variant="subtitle1" color="textSecondary">
          Organization
        </Typography>
        <Select
          name="orgName"
          labelId="orgName"
          id="orgName"
          value={formik.values.orgName || ""}
          onChange={formik.handleChange}
        >
          {uniqueOrg &&
            uniqueOrg.map((org) => (
              <MenuItem key={org} value={org}>
                {org}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl>
        <Typography variant="subtitle1" color="textSecondary">
          Username
        </Typography>
        <TextField
          id="userName"
          variant="outlined"
          type="text"
          value={formik.values.userName || ""}
          onChange={formik.handleChange}
        />
      </FormControl>
      <FormControl>
        <Typography variant="subtitle1" color="textSecondary">
          Email
        </Typography>
        <TextField
          id="email"
          variant="outlined"
          type="email"
          value={formik.values.email || ""}
          onChange={formik.handleChange}
        />
      </FormControl>
      <FormControl>
        <Typography variant="subtitle1" color="textSecondary">
          Date
        </Typography>

        <DatePicker
          className="my-datepicker"
          selected={formik.values.createdAt || null}
          onChange={(date) => {
            formik.setFieldValue("date", date);
          }}
        />
      </FormControl>
      <FormControl>
        <Typography variant="subtitle1" color="textSecondary">
          Phone Number
        </Typography>

        <TextField
          id="phoneNumber"
          variant="outlined"
          type="tel"
          value={formik.values.phoneNumber || ""}
          onChange={formik.handleChange}
        />
      </FormControl>
      <FormControl>
        <Typography variant="subtitle1" color="textSecondary">
          Status
        </Typography>
        <Select
          labelId="randomStatus1"
          name="randomStatus"
          id="randomStatus" // Unique id value for the Status Select
          value={formik.values.randomStatus || ""}
          onChange={formik.handleChange}
        >
          {uniqueStatus.length > 0 &&
            uniqueStatus.map((status) => (
              <MenuItem key={status} value={status} id={status}>
                {status || ""}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      <Box className="button_wrapper">
        <Button onClick={resetForm} variant="outlined" color="error">
          Reset
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Filter
        </Button>
      </Box>
    </form>
  );
};

export default FilterForm;
