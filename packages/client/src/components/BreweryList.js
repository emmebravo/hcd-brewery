import { useState, useEffect } from 'react';
import BreweryCard from './BreweryCard';
import axios from 'axios';

const BreweryList = () => {
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
    <BreweryCard key={brewery.id} brewery={brewery} />
  ));

  return <div>{breweryData && breweries}</div>;
};

export default BreweryList;
