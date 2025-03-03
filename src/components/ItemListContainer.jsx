import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import ReactLoading from 'react-loading';
import './ItemListContainer.css';
import { getItems } from '../firebase/firebase'; // ✅ Importamos Firestore en lugar de asyncMock.js
import ProductCard from './ProductCard';

export default function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const { catId } = useParams(); 

  useEffect(() => {
    async function fetchProducts() {
      const allProducts = await getItems();

      // ✅ Si hay una categoría en la URL, filtramos los productos
      if (catId) {
        setProducts(allProducts.filter(product => product.category === catId));
      } else {
        setProducts(allProducts);
      }
    }

    fetchProducts();
  }, [catId]);

  return (
    <section className="item-list-container">
      <h1>{catId ? `${catId.charAt(0).toUpperCase() + catId.slice(1)}` : 'Todos los productos'}</h1>

      {products ? (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="loader-container">
          <ReactLoading type="bubbles" color="#ff9f01" width="100px" height="50px" />
        </div>
      )}
      
    </section>
  );
}
