import { Link } from 'react-router-dom';
import { Grid, Item, Typography } from '@mui/material';

const BreweryDeets = ({ name, address }) => {
  const addy = address.map((place) => (
    <Typography key={place.postal_code}>
      {place.street ? place.street + ',' : ''} {place.city}, {place.state},{' '}
      {place.postal_code}
    </Typography>
  ));

  return (
    <Grid item sx={{}}>
      <Typography>{name}</Typography>
      {addy}
      <Typography sx={{}}>
        <Link to='/'>Back to List</Link>
      </Typography>
    </Grid>
  );
};

export default BreweryDeets;
