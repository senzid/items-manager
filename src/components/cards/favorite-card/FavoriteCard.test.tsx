import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { FavoriteCard } from './FavoriteCard';

const mockItem = {
  title: 'Favorite Card Title',
  image: 'test.jpg'
};

const mockHandleFavorites = jest.fn();

const defaultProps = {
  item: mockItem,
  handleFavorites: mockHandleFavorites,
};

describe('renders the FavoriteCard component', () => {
  it('renders the FavoriteCard component with correct content', () => {
    const { getByText } = render(<FavoriteCard {...defaultProps} />);

    expect(getByText('Favorite Card Title')).toBeInTheDocument();
  });

  it('calls handleFavorites function when "Add Favorite" button is clicked', () => {
    const { getByRole } = render(<FavoriteCard {...defaultProps} />);

    const addFavoriteButton = getByRole('button')
    fireEvent.click(addFavoriteButton);

    expect(mockHandleFavorites).toHaveBeenCalledWith('Favorite Card Title');
  });

});