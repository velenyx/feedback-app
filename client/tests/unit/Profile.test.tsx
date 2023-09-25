import React from "react";
import { render } from "@testing-library/react";
import App from "../../src/App";
describe("Profile component tests", () => {
  it("Renders correctly initial document", async () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
