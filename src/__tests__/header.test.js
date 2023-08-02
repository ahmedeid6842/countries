import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
  it('renders the correct title', () => {
    const title = 'Country Info';
    const { getByText } = render(
      <Router>
        <Header title={title} />
      </Router>
    );
    expect(getByText(title)).toBeInTheDocument();
  });

  it('renders the back button when the title is "Country Info"', () => {
    const title = 'Country Info';
    const { getByAltText } = render(
      <Router>
        <Header title={title} />
      </Router>
    );
    expect(getByAltText('Back')).toBeInTheDocument();
  });

  it('does not render the back button when the title is not "Country Info"', () => {
    const title = 'Settings';
    const { queryByAltText } = render(
      <Router>
        <Header title={title} />
      </Router>
    );
    expect(queryByAltText('Back')).not.toBeInTheDocument();
  });
});