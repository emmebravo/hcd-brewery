import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const NotFound = () => {
  return (
    <div>
      <Typography variant='h1'>404 NOT FOUND</Typography>
      <Typography variant='h2'>
        You've wondered off the beaten trail...
      </Typography>
      <ArrowBackRoundedIcon />
      <Link to='/'>Back to List</Link>
    </div>
  );
};

export default NotFound;
