import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../styles/countrDetails.module.css';

const CountryInfo = ({ state }) => (
  <section className={classes.detailsSection}>
    <div className={classes.detailsTop}>
      <img src={state.flags.png} alt="flag" />
      <div>
        <h2>{state.name.common}</h2>
        <h2>{state.region}</h2>
      </div>
    </div>
    <ul className={classes.detailsBottom}>
      <li>
        <span> 🏷️ Official Name: </span>
        <span>{state.name.official}</span>
      </li>
      <li>
        <span> 🏙️ Capital: </span>
        <span>{state.capital[0]}</span>
      </li>
      <li>
        <span> 🌍 Area: </span>
        <span>
          {+state.area}
          &nbsp; km2
        </span>
      </li>
      <li>
        <span> 👥 Population: </span>
        <span>
          {(state.population / 1000000).toFixed(2)}
          &nbsp; million
        </span>
      </li>
      <li>
        <span> 🕒 Time Zone: </span>
        <span>{state.timezones[0]}</span>
      </li>
      <li>
        <span> 💰 Currency: </span>
        <span>
          {state.currencies[Object.keys(state.currencies)[0]].symbol}
          {'  '}
          {state.currencies[Object.keys(state.currencies)[0]].name}
        </span>
      </li>
      <li>
        <span> 🗣️ languages: </span>
        <span>
          {Object.keys(state.languages).map((key, index, array) => {
            const comma = index !== array.length - 1 ? ',' : '';
            return `${state.languages[key]}${comma}`;
          })}
          {' '}
        </span>
      </li>
    </ul>
  </section>
);

CountryInfo.propTypes = {
  state: PropTypes.shape({
    flags: PropTypes.shape({
      png: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
      official: PropTypes.string.isRequired,
    }).isRequired,
    region: PropTypes.string.isRequired,
    capital: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    area: PropTypes.number.isRequired,
    population: PropTypes.number.isRequired,
    timezones: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    currencies: PropTypes.objectOf(
      PropTypes.shape({
        symbol: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    languages: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default CountryInfo;
