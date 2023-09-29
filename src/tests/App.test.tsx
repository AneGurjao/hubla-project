import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import "@testing-library/jest-dom/extend-expect";
import Header from "../components/Header";

describe("Header component", () => {
  it("should display elements", async () => {
    render(<Header/>);

    expect(
      screen.getByText("Upload arquivos")).toBeInTheDocument();
  });
});