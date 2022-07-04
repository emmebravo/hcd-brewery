// import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import List from './components/List';
import Information from './components/Information';
import NotFound from './components/NotFound';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route exact path='/' element={<List />} />
        <Route exact path='/info' element={<Information />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
