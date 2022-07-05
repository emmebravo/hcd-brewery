import { Link } from 'react-router-dom';

import { Grid, Typography } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const NotFound = () => {
  return (
    <Grid>
      <Grid item>
        <Typography variant='h1'>404 NOT FOUND</Typography>
        <Typography variant='h2'>
          You've wondered off the beaten trail...
        </Typography>
      </Grid>
      <Grid item mt={5}>
        <ArrowBackRoundedIcon />
        <Link to='/' style={{ color: 'blue' }}>
          Back to List
        </Link>
      </Grid>
    </Grid>
  );
};

export default NotFound;
