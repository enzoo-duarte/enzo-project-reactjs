import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a Nexus Second Hand" />} />
        <Route exact path="/category/:catId" element={<ItemListContainer greeting="Productos por Categoría" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
