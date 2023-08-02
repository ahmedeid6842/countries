import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomPage';
import CountryDetailsPage from './pages/CountryDetailsPage';
import { getCountries } from './redux/countries-slice';
import './styles/App.css';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.countries.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (

    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage countries={state} />} />
          <Route path="/countries/" element={<HomePage countries={state} />} />
          <Route path="/countries/:countryName" element={<CountryDetailsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
