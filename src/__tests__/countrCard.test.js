import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CountryCard from '../components/Home/CountryCard';

const mockCountry = {
  name: {
    common: 'United States',
  },
  flags: {
    png: 'https://restcountries.com/data/usa.png',
  },
  population: 331449281,
};

describe('CountryCard', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <CountryCard country={mockCountry} />
      </Router>
    );
  });
});