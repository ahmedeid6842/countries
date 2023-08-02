import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import { getCountry } from '../redux/countries-slice';
import CountryInfo from '../components/Details/CountryInfo';

const CountryDetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.countries.country);

  const { countryName } = params;
  useEffect(() => {
    dispatch(getCountry(countryName));
  }, [countryName, dispatch]);

  return (
    <>
      <Header title="Country Info" />
      {state && <CountryInfo state={state} />}
    </>
  );
};

export default CountryDetailsPage;
