import './App.css';
import { Router, Route, Routes } from 'react-router-dom';

import BreweryList from './components/BreweryList';
import Header from './components/Header';
// import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<BreweryList />} />
        {/* <Route exact path='/info' element={<BreweryInfo />} /> */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
