import Nhan from "@/app/nhan/page";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";

// Step 1: Mock the next/navigation module
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Nhan Page", () => {
  // Setup the mock router instance before each test
  const pushMock = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test 1: Navigation logic
  it("navigates back to home when the Home button is clicked", () => {
    render(<Nhan />);
    const homeButton = screen.getByRole("button", { name: /home/i });

    fireEvent.click(homeButton);

    expect(pushMock).toHaveBeenCalledWith("/");
  });

  // Test 2: Personal Identity
  it("renders the correct name as the main title", () => {
    render(<Nhan />);
    expect(screen.getByText("Nguyen Trung Nhan")).toBeInTheDocument();
  });

  // Test 3: Skills check
  it("displays the correct skill stack string", () => {
    render(<Nhan />);
    const skillsText = screen.getByText(/React - Java - SQL\/NoSQL - CI\/CD/i);
    expect(skillsText).toBeInTheDocument();
  });

  // Test 4: Project visibility (TTECH)
  it("displays the TTECH project details", () => {
    render(<Nhan />);
    expect(screen.getByText("TTECH")).toBeInTheDocument();
    expect(screen.getByText(/Technology product e-shop/i)).toBeInTheDocument();
  });

  // Test 5: Project visibility (BBED)
  it("displays the BBED project details", () => {
    render(<Nhan />);
    expect(screen.getByText("BBED")).toBeInTheDocument();
    expect(screen.getByText(/Travel booking platform/i)).toBeInTheDocument();
  });

  // Test 6: Accessibility / Structure
  it("uses the correct heading hierarchy for SEO", () => {
    render(<Nhan />);
    // Check if the page title is H1 and Projects is H2
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Nguyen Trung Nhan",
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Projects",
    );
  });
});
