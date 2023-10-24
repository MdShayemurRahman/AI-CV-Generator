import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Homepage';
import Layout from './Layout';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={
              <Homepage />
            }
          />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
