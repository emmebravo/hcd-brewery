// import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import BreweryList from './components/BreweryList';
import Header from './components/Header';
import Container from '@mui/material/Container';

function App() {
  const [breweryData, setBreweryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://api.openbrewerydb.org/breweries?by_city=los_angeles'
      );
      const data = await response.data;
      setBreweryData(data);
    };

    fetchData();
  }, []);

  console.log(breweryData);

  return (
    <Container>
      <Header />
      <Routes>
        <Route exact path='/' element={<BreweryList brewery={breweryData} />} />
        <Route exact path='/info' element={<BreweryInfo />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Container>
  );
}

export default App;
