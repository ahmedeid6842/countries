import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../../styles/countryCard.module.css';

const CountryCard = ({ country }) => (
  <li key={country.name.common} className={styles.country}>
    <Link to={`/countries/${country.name.common}`}>
      <figure>
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
        <figcaption>{country.name.common}</figcaption>
        <figcaption className={styles.population}>
          {(country.population / 1000000).toFixed(2)}
          <span className={styles.unit}>million</span>
        </figcaption>
      </figure>
    </Link>
  </li>
);

CountryCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }).isRequired,
    flags: PropTypes.shape({
      png: PropTypes.string.isRequired,
    }).isRequired,
    population: PropTypes.number.isRequired,
  }).isRequired,
};

export default CountryCard;
