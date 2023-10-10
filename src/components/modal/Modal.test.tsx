import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Modal } from "./Modal";

describe("Modal", () => {
  it("should not render when isOpen is false", () => {
    const toggleMock = jest.fn();
    const { queryByText } = render(<Modal isOpen={true} toggle={toggleMock}><div>test</div></Modal>);
    expect(queryByText('test')).toBeInTheDocument();
  });

  it("should render when isOpen is true", () => {
    const toggleMock = jest.fn();
    const { queryByText } = render(<Modal isOpen={false} toggle={toggleMock}><div>test</div></Modal>);
    expect(queryByText('test')).not.toBeInTheDocument();
  });
});