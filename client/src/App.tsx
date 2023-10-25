import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Layout from './Layout';
import PageNotFound from './pages/PageNotFound';
import ImportCV from './pages/ImportCV';
import CreateNewCV from './pages/CreateNewCV';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/import-from-existing' element={<ImportCV />} />
          <Route path='/create-new-cv' element={<CreateNewCV />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
