import { useLocation } from 'react-router-dom';

import { Grid } from '@mui/material';
import Details from './Details';
import Map from './Map';

const Information = () => {
  const location = useLocation();
  const { name, address, latitude, longitude } = location.state;

  return (
    <Grid container>
      <Details name={name} address={address} />
      <Map name={name} latitude={latitude} longitude={longitude} />
    </Grid>
  );
};

export default Information;
