import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";

function SearchInput() {
  return (
    <Stack component="nav">
      <Stack
        justifyContent="space-between"
        component="div"
        direction="row"
        sx={{
          border: "1px solid #545F7D",
          width: "300px",
          borderRadius: "5px",
        }}
      >
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for anything"
          style={{
            outline: "none",
            border: "none",
            borderRadius: "5px",
            flex: "1",
            padding: "0 10px",
          }}
        />
        <button
          type="button"
          style={{
            padding: "10px",
            outline: "none",
            border: "none",
            borderRadius: "0 5px 5px 0",
            cursor: "pointer",
            background: "#39CDCC",
          }}
        >
          <SearchIcon sx={{ fontSize: "16px", color: "#fff" }} />
        </button>
      </Stack>
    </Stack>
  );
}

export default SearchInput;
