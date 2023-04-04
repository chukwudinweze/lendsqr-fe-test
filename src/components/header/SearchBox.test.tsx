import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchBox";

describe("SearchInput", () => {
  test("renders search input and button", () => {
    render(<SearchInput />);
    const searchInput = screen.getByPlaceholderText("Search for anything");
    expect(searchInput).toBeInTheDocument();
    const searchButton = screen.getByRole("button", { name: "Search" });
    expect(searchButton).toBeInTheDocument();
  });
});
