//export NODE_OPTIONS=--openssl-legacy-provider   
//use command in terminal above, before you run a project

import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
       
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path=':type/*' element={<HomePage />} />
          <Route path=':type/:id/*' element={<PetDetailsPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/pet-details-not-found' element={<PetDetailsNotFound />} />
          
      </Routes>
      </div>
    </Router>
  );
}

export default App;
