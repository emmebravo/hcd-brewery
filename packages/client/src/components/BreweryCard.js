import { Link } from 'react-router-dom';
import { Grid, CardContent, Card, CardActions } from '@mui/material';

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
          <p>Name: {name}</p>
          <p>Type: {brewery_type}</p>
          <p>
            Address:{' '}
            {`${street ? street + ',' : ''} ${city}, ${state}, ${postal_code}`}
          </p>
          {website_url && (
            <p>
              Website:{' '}
              <a
                href={`${website_url}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {website_url}
              </a>
            </p>
          )}
        </CardContent>
        <CardActions>
          <Link
            to={{
              pathname: '/info',
              state: {
                name: { name },
                address: [
                  {
                    street: { street },
                    city: { city },
                    state: { state },
                    zip: { postal_code },
                  },
                ],
                latitude: { latitude },
                longitude: { longitude },
              },
            }}
          >
            Learn More
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BreweryCard;
