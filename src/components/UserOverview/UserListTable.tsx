import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Chip,
  Avatar,
  Typography,
  Stack,
} from "@mui/material";
import detailBtnIcon from "../../assets/moreDetailsBtnIcon.png";
import DropdownMenu from "./DropdownMenu";
import { UserType } from "../SharedComponent/UserType";
import { useAppSelector } from "../../store/hooks";
import filterIcon from "../../assets/filterIcon.png";
import Box from "@mui/material/Box/Box";

const tableHeads = [
  "ORGANIZATION",
  "USERNAME",
  "EMAIL",
  "PHONE NUMBER",
  "DATE JOINED",
  "STATUS",
];

const tableContentStyle = {
  fontSize: "14px",
  fontWeight: 400,
  fontFamily: "Work Sans', sans-serif",
};

const UserListTable: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const users = useAppSelector((state) => state.userSlice);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ overflowX: { xs: "auto", sm: "auto", lg: "hidden" } }}>
      <TableContainer
        component={Paper}
        style={{
          overflowX: "hidden",
          paddingLeft: "10px",
          boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {tableHeads.map((tableHead) => {
                return (
                  <TableCell key={tableHead}>
                    <Typography
                      color="rgba(84, 95, 125, 1)"
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        fontFamily: "Work Sans', sans-serif",
                      }}
                    >
                      <Stack direction="row" gap={1} sx={{ cursor: "pointer" }}>
                        {tableHead}
                        <Avatar
                          src={filterIcon}
                          alt="filter icon"
                          sx={{ width: "16px", height: "16px" }}
                        />
                      </Stack>
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user: UserType) => {
                const {
                  id,
                  orgName,
                  userName,
                  email,
                  phoneNumber,
                  createdAt,
                  randomBgColor,
                  randomStatus,
                  randomStatusColor,
                } = user;
                return (
                  <TableRow key={id}>
                    <TableCell>
                      <Typography style={tableContentStyle}>
                        {orgName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={tableContentStyle}>
                        {userName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={tableContentStyle}>{email}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={tableContentStyle}>
                        {phoneNumber}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={tableContentStyle}>
                        {createdAt}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" sx={{ position: "relative" }}>
                        <Chip
                          label={randomStatus}
                          sx={{
                            color: randomStatusColor,
                            background: randomBgColor,
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            right: "-40px",
                          }}
                        >
                          <DropdownMenu
                            id={id}
                            label={randomStatus}
                            status={randomStatus}
                          >
                            <Avatar
                              src={detailBtnIcon}
                              alt="more details"
                              sx={{ width: "3.33px", height: "14.44px" }}
                            />
                          </DropdownMenu>
                        </div>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 50, { value: -1, label: "All" }]}
        labelRowsPerPage="Showing"
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelDisplayedRows={({ from, to, count }) => `out of ${count}`}
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      />
    </Box>
  );
};

export default UserListTable;
