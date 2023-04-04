import { fireEvent, screen } from "@testing-library/react";

describe("EmailAndPassword component", () => {
  it("should submit the form when filled out correctly", async () => {
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Log in" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    // Expect the form to submit successfully and navigate to the dashboard
    await screen.findByText("Dashboard");
  });

  it("should display an error message when the form is submitted with invalid input", async () => {
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Log in" });

    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    fireEvent.change(passwordInput, { target: { value: "" } });
    fireEvent.click(submitButton);

    // Expect error messages to be displayed for both fields
    await screen.findByText("Please enter a valid email address");
    await screen.findByText("Please enter a password");

    // Expect the form not to submit and stay on the same page
    expect(screen.queryByText("Dashboard")).toBeNull();
  });

  it("should display a 'Forgot Password' button", () => {
    const forgotPasswordButton = screen.getByRole("button", {
      name: "Forgot Password",
    });

    expect(forgotPasswordButton).toBeInTheDocument();
  });
});
