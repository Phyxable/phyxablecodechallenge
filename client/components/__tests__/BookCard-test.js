import * as React from 'react';
import { render } from '@testing-library/react-native';
import BookCard from '../BookCard';

const mockBook = {
  "id": 1,
  "title": "The Lord of the Rings",
  "description": "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.",
  "image": "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg"
};

describe('BookCard', () => {
  it('renders book card with correct information', () => {
    const { getByText, getByTestId } = render(<BookCard book={mockBook} />);

    const titleVire = getByText(mockBook.title);
    const descriptionView = getByText(mockBook.description);
    const imageElement = getByTestId('book-image');

    expect(titleVire).toBeTruthy();
    expect(descriptionView).toBeTruthy();
    expect(imageElement).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const { toJSON } = render(<BookCard book={mockBook} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
