import { useLocation } from 'react-router-dom';

import { Grid } from '@mui/material';
import BreweryDeets from './BreweryDeets';
import BreweryMap from './BreweryMap';

const BreweryInfo = () => {
  const location = useLocation();
  const { name, address, latitude, longitude } = location.state;

  return (
    <Grid container>
      <BreweryDeets name={name} address={address} />
      <BreweryMap name={name} latitude={latitude} longitude={longitude} />
    </Grid>
  );
};

export default BreweryInfo;
