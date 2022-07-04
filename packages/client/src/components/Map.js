import GoogleMapReact from 'google-map-react';

import { Grid, Paper, Typography } from '@mui/material';
import PinDrop from '@mui/icons-material/PinDrop';

const Map = ({ name, latitude, longitude }) => {
  const Marker = ({ text }) => (
    <Paper>
      <PinDrop fontSize='large' />
      <Typography sx={{ fontSize: 20 }}>{text}</Typography>
    </Paper>
  );

  const LOS_ANGELES = [34.0522, -118.2437];

  return (
    <Grid item sx={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        defaultZoom={10}
        defaultCenter={LOS_ANGELES}
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAP_KEY || '',
        }}
      >
        <Marker lat={latitude} lng={longitude} text={name} />
      </GoogleMapReact>
    </Grid>
  );
};

export default Map;
