import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../pages/HomPage';

const mockCountries = [
  {
    name: {
      common: 'United States',
    },
    flags: {
      png: 'https://restcountries.com/data/usa.png',
    },
  },
  {
    name: {
      common: 'Canada',
    },
    flags: {
      png: 'https://restcountries.com/data/can.png',
    },
  },
];

describe('HomePage', () => {
  it('renders the header with the correct title', () => {
    render(<HomePage countries={mockCountries} />);
    const header = screen.getByRole('heading', { level: 1 });
    expect(header).toHaveTextContent('Countries');
  });

  it('renders a search input with the correct placeholder', () => {
    render(<HomePage countries={mockCountries} />);
    const searchInput = screen.getByPlaceholderText('Search by country name ..');
    expect(searchInput).toBeInTheDocument();
  });
});
