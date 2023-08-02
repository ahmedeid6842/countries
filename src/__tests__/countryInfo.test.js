import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom library
import CountryInfo from '../components/Details/CountryInfo';

describe('CountryInfo', () => {
  const state = {
    flags: {
      png: 'https://restcountries.com/data/usa.png',
    },
    name: {
      common: 'United States',
      official: 'United States of America',
    },
    region: 'Americas',
    capital: ['Washington D.C.'],
    area: 985642,
    population: 331449281,
    timezones: ['UTC-12:00', 'UTC-11:00', 'UTC-10:00', 'UTC-09:00', 'UTC-08:00', 'UTC-07:00', 'UTC-06:00', 'UTC-05:00', 'UTC-04:00', 'UTC+10:00', 'UTC+12:00', 'UTC+03:00'],
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$',
      },
    },
    languages: {
      eng: 'English',
    },
  };

  it('renders the country information correctly', () => {
    const { getByText, getByAltText } = render(
      <CountryInfo state={state} />
    );

    expect(getByText('United States')).toBeInTheDocument();
    expect(getByText('United States of America')).toBeInTheDocument();
    expect(getByText('Americas')).toBeInTheDocument();
    expect(getByText('Washington D.C.')).toBeInTheDocument();
    expect(getByText('985642 km2')).toBeInTheDocument();
    expect(getByText('331.45 million')).toBeInTheDocument();
    expect(getByText('UTC-12:00')).toBeInTheDocument();
    expect(getByText('$ United States dollar')).toBeInTheDocument();
    expect(getByText('English')).toBeInTheDocument();
    expect(getByAltText('flag')).toHaveAttribute(
      'src',
      'https://restcountries.com/data/usa.png'
    );
  });
});