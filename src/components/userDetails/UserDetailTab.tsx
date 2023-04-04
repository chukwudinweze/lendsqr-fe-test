import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./UserDetailTab.scss";

export default function UserDetailTab() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        fontFamily: "SF Compact Text",
        fontSize: "16px",
        overflowX: "auto",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="primary tabs example"
        variant="fullWidth"
        sx={{ overflowX: "auto" }}
      >
        <Tab
          className="tab"
          style={{
            fontFamily: "SF Compact Text",
            fontSize: "16px",
            textTransform: "none",
          }}
          value="one"
          label="General Details"
        />
        <Tab
          className="tab"
          style={{
            fontFamily: "SF Compact Text",
            fontSize: "16px",
            textTransform: "none",
          }}
          value="two"
          label="Documents"
        />
        <Tab
          className="tab"
          style={{
            fontFamily: "SF Compact Text",
            fontSize: "16px",
            textTransform: "none",
          }}
          value="four"
          label="Bank Details"
        />
        <Tab
          className="tab"
          style={{
            fontFamily: "SF Compact Text",
            fontSize: "16px",
            textTransform: "none",
          }}
          value="five"
          label="Loan"
        />
        <Tab
          className="tab"
          style={{
            fontFamily: "SF Compact Text",
            fontSize: "16px",
            textTransform: "none",
          }}
          value="six"
          label="Savings"
        />
        <Tab
          className="tab"
          style={{
            fontFamily: "SF Compact Text",
            fontSize: "16px",
            textTransform: "none",
          }}
          value="seven"
          label="App and System"
        />
      </Tabs>
    </Box>
  );
}
