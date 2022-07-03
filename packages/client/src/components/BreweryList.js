import BreweryCard from './BreweryCard';
import Grid from '@mui/material/Grid';

const BreweryList = ({ brewery }) => {
  const breweries = brewery.map((brewery) => (
    <BreweryCard key={brewery.id} brewery={brewery} />
  ));

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ margin: 'calc(1rem + 3vw)' }}
    >
      {breweries}
    </Grid>
  );
};

export default BreweryList;
