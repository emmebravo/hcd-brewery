import { useState, useEffect } from 'react';
import axios from 'axios';

import Cards from './Cards';
import Grid from '@mui/material/Grid';

const List = () => {
  const [breweryData, setBreweryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND}/api`
        );
        const data = await response.data;
        setBreweryData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const breweries = breweryData.map((brewery) => (
    <Cards key={brewery.id} brewery={brewery} />
  ));

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ margin: 'calc(1rem + 3vw)' }}
    >
      {breweryData && breweries}
    </Grid>
  );
};

export default List;
