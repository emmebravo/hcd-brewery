// import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import List from './components/List';
import Information from './components/Information';
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

  return (
    <Container>
      <Header />
      <Routes>
        <Route exact path='/' element={<List brewery={breweryData} />} />
        <Route exact path='/info' element={<Information />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Container>
  );
}

export default App;
