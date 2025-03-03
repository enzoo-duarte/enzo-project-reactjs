import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a Nexus Second Hand" />} />
        <Route exact path="/category/:catId" element={<ItemListContainer greeting="Productos por Categoría" />} />
        <Route exact path="/product/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>

      <ToastContainer 
        position="top-right" 
        autoClose={2000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
