import React from 'react';
import PropTypes from 'prop-types';

const HomePage = ({ countries }) => {
  console.log(countries);
  return (
    <>
      <h1>Hi</h1>
      {countries.map((country) => (
        <div key={country.name.common}>
          <h2>{country.name.common}</h2>
          <img src={country.flags.png} alt={`${country.name.common} flag`} />
          <p>
            Population:
            {country.population}
          </p>
          <a href={country.maps.openStreetMaps}>OpenStreetMap</a>
        </div>
      ))}
    </>
  );
};

HomePage.propTypes = {
  countries: PropTypes.arrayOf.isRequired,
};

export default HomePage;
