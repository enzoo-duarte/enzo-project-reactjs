import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a Nexus Second Hand" />} />
        <Route exact path="/category/:catId" element={<ItemListContainer greeting="Productos por Categoría" />} />
        <Route exact path="/product/:id" element={<ItemDetailContainer />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
