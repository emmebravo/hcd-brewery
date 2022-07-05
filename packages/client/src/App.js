// import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import List from './components/List';
import Information from './components/Information';
import NotFound from './components/NotFound';
import { Box, Container } from '@mui/material';

function App() {
  return (
    <Container>
      <Header />
      <Box mt={13}>
        <Routes>
          <Route exact path='/' element={<List />} />
          <Route exact path='/info' element={<Information />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
