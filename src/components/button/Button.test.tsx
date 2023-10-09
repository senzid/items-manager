import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import {Button} from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    const { queryByText } = render(<Button>It's a test</Button>);
    expect(queryByText("It's a test")).toBeInTheDocument();
  });
});