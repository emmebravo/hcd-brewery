import { Link } from 'react-router-dom';
import {
  Grid,
  CardContent,
  Card,
  CardActions,
  Typography,
} from '@mui/material';

const BreweryCard = ({ brewery }) => {
  const {
    name,
    brewery_type,
    street,
    city,
    state,
    postal_code,
    website_url,
    latitude,
    longitude,
  } = brewery;

  return (
    <Grid item xs={12} sm={4}>
      <Card variant='outlined' sx={{ height: '100%' }}>
        <CardContent>
          <Typography>Name: {name}</Typography>
          <Typography>Type: {brewery_type}</Typography>
          <Typography>
            Address:{' '}
            {`${street ? street + ',' : ''} ${city}, ${state}, ${postal_code}`}
          </Typography>
          {website_url && (
            <Typography>
              Website:{' '}
              <a
                href={`${website_url}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {website_url}
              </a>
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Link
            to='/info'
            state={{
              name,
              address: [{ street, city, state, postal_code }],
              latitude,
              longitude,
            }}
          >
            <Typography>Learn More</Typography>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BreweryCard;
