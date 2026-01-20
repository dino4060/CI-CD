import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";
import Home from "./page";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Home Page", () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("navigates back to home when the Home button is clicked", () => {
    render(<Home />);
    const homeButton = screen.getByRole("button", { name: /Nhan/i });

    fireEvent.click(homeButton);

    expect(pushMock).toHaveBeenCalledWith("/nhan");
  });

  test("renders without crashing", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("displays the Next.js logo image", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/next.svg");
  });

  test("displays the main heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(
      "To get started, edit the page.tsx file."
    );
  });

  test("displays the introductory paragraph", () => {
    render(<Home />);
    const paragraph = screen.getByText(
      /Looking for a starting point or more instructions?/
    );
    expect(paragraph).toBeInTheDocument();
  });

  test("contains link to Templates", () => {
    render(<Home />);
    const templatesLink = screen.getByRole("link", { name: /Templates/ });
    expect(templatesLink).toBeInTheDocument();
    expect(templatesLink).toHaveAttribute(
      "href",
      "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    );
  });

  test("contains link to Learning center", () => {
    render(<Home />);
    const learningLink = screen.getByRole("link", { name: /Learning/ });
    expect(learningLink).toBeInTheDocument();
    expect(learningLink).toHaveAttribute(
      "href",
      "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    );
  });

  test("contains Deploy Now button", () => {
    render(<Home />);
    const deployButton = screen.getByRole("link", { name: /Deploy Now/ });
    expect(deployButton).toBeInTheDocument();
    expect(deployButton).toHaveAttribute(
      "href",
      "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    );
  });

  test("contains Documentation link", () => {
    render(<Home />);
    const docsLink = screen.getByRole("link", { name: /Documentation/ });
    expect(docsLink).toBeInTheDocument();
    expect(docsLink).toHaveAttribute(
      "href",
      "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    );
  });
});
