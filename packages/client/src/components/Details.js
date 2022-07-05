import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

const Details = ({ name, address }) => {
  const addy = address.map((place) => (
    <Typography key={place.postal_code}>
      {place.street ? place.street + ',' : ''} {place.city}, {place.state},{' '}
      {place.postal_code}
    </Typography>
  ));

  return (
    <>
      <Grid item xs={11}>
        <Typography>{name}</Typography>
        {addy}
      </Grid>
      <Grid item xs={1}>
        <Typography>
          <Link to='/' style={{ color: 'blue' }}>
            Back to List
          </Link>
        </Typography>
      </Grid>
    </>
  );
};

export default Details;
