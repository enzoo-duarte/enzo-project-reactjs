import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import './ItemListContainer.css';
import { getProducts, getCategory } from '../asyncMock'; 
import ProductCard from './ProductCard';

export default function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const { catId } = useParams(); 

  useEffect(() => {
    if (!catId) {
      getProducts().then((response) => setProducts(response));
    } else {
      getCategory(catId).then((response) => setProducts(response));
    }
  }, [catId]);

  return (
    <section className="item-list-container">
      <h1>{catId ? `${catId.charAt(0).toUpperCase() + catId.slice(1)}` : 'Todos los productos'}</h1>
      <div className="product-list">
        {products ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Cargando productos...</p>
        )}
      </div>
    </section>
  );
}
