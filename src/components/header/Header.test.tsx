import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render all necessary elements", () => {
    render(<Header />);

    const logoAndName = screen.getByRole("heading", { name: /logo and name/i });
    const searchInput = screen.getByPlaceholderText(/search/i);
    const docsLink = screen.getByRole("link", { name: /docs/i });
    const notificationsButton = screen.getByRole("button", {
      name: /notifications/i,
    });
    const avatar = screen.getByRole("img", { name: /profile picture/i });
    const profileName = screen.getByText(/adedeji/i);
    const dropdownButton = screen.getByRole("button", { name: /dropdown/i });

    expect(logoAndName).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(docsLink).toBeInTheDocument();
    expect(notificationsButton).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(profileName).toBeInTheDocument();
    expect(dropdownButton).toBeInTheDocument();
  });
});
