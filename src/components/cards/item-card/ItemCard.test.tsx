import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { ItemCard } from './ItemCard';

const mockItem = {
  title: 'Card Title',
  image: 'test.jpg',
  email: 'card@itempop.com',
  price: '10',
  description: 'Card Description',
};

const mockHandleFavorites = jest.fn();

const defaultProps = {
  item: mockItem,
  isFavorite: false,
  handleFavorites: mockHandleFavorites,
};

describe('renders the ItemCard component', () => {
  it('renders the itemCard component with correct content', () => {
    const { getByText } = render(<ItemCard {...defaultProps} />);

    expect(getByText('Card Title')).toBeInTheDocument();
    expect(getByText('card@itempop.com')).toBeInTheDocument();
    expect(getByText('10€')).toBeInTheDocument();
    expect(getByText('Card Description')).toBeInTheDocument();
  });

  it('calls handleFavorites function when "Add Favorite" button is clicked', () => {
    const { getByRole } = render(<ItemCard {...defaultProps} />);

    const addFavoriteButton = getByRole('button')
    fireEvent.click(addFavoriteButton);

    expect(mockHandleFavorites).toHaveBeenCalledWith('Card Title');
  });

  it('displays "Remove Favorite" when isFavorite is true', () => {
    const { getByText } = render(<ItemCard {...defaultProps} isFavorite={true} />);

    expect(getByText('Remove Favorite')).toBeInTheDocument();
  });
});