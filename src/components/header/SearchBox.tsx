import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import "./SearchBox.scss";

function SearchInput() {
  return (
    <Stack component="nav" className="search_nav">
      <Stack
        className="search_input"
        justifyContent="space-between"
        component="div"
        direction="row"
      >
        <input
          className="search_input_box"
          type="search"
          name="search"
          id="search"
          placeholder="Search for anything"
        />
        <button className="search_button" type="button">
          <SearchIcon sx={{ fontSize: "16px", color: "#fff" }} />
        </button>
      </Stack>
    </Stack>
  );
}

export default SearchInput;
