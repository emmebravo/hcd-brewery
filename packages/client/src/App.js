import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BreweryList from './components/BreweryList';

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

  const breweries = breweryData.map((brewery) => (
    <BreweryList key={brewery.id} brewery={brewery} />
  ));

  return <div className='App'>{breweryData && breweries}</div>;
}

export default App;
