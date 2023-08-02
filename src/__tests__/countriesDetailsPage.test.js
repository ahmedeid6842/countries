import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CountryDetailsPage from '../pages/CountryDetailsPage';

const mockStore = configureStore([thunk]);

describe('CountryDetailsPage', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      countries: {
        country: {
          name: {
            common: 'United States',
            official: "Unitest States"
          },
          flags: {
            png: 'https://restcountries.com/data/usa.png',
          },
          area: "1528963",
          population: 331449281,
          capital:["New Yourk"],
          timezones:["UTC-6"],
          languages:["English","Spanish"],
          currencies:{USA:{name:"dollar",symbol:"$"}}
        },
      },
    });
    store.dispatch = jest.fn();
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <Router>
          <CountryDetailsPage />
        </Router>
      </Provider>
    );
    expect(store.dispatch).toHaveBeenCalled();
  });
});