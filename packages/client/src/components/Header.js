import { Link } from 'react-router-dom';

import { AppBar, Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar sx={{ padding: '1rem 2rem' }}>
      <Box component='nav'>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <Typography variant='h4' component='h1' sx={{ marginLeft: '4rem' }}>
            Breweries in Los Angeles, CA.
          </Typography>
        </Link>
      </Box>
    </AppBar>
  );
};

export default Header;
