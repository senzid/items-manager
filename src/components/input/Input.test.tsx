import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import {Input} from "./Input";

const mockHandleSort = jest.fn();
const mockHandleFilter = jest.fn();

const defaultProps = {
  placeholder: 'Test Placeholder',
  handleSort: mockHandleSort,
  handleFilter: mockHandleFilter,
};

describe('Input component', () => {
  it('renders the Input component', () => {
    const { getByPlaceholderText  } = render(
      <Input {...defaultProps} />
    );

    const inputField = getByPlaceholderText('Test Placeholder');
    expect(inputField).toBeInTheDocument();
  });

  it('calls handleFilter function when input value changes', () => {
    const { getByPlaceholderText } = render(<Input {...defaultProps} />);

    const inputField = getByPlaceholderText('Test Placeholder');
    fireEvent.change(inputField, { target: { value: 'filterValue' } });

    expect(mockHandleFilter).toHaveBeenCalledWith('Test Placeholder', 'filterValue');
  });

  it('calls handleSort function when sort button is clicked', () => {
    const { getByRole } = render(<Input {...defaultProps} />);

    const sortButton = getByRole('button')
    fireEvent.click(sortButton);

    expect(mockHandleSort).toHaveBeenCalledWith('Test Placeholder');
  });
});