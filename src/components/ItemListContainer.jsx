import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importa useParams para leer el parámetro de la URL
import './ItemListContainer.css';
import { getProducts, getCategory } from '../asyncMock'; // Importa getCategory
import ProductCard from './ProductCard';

export default function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const { catId } = useParams(); // Obtén la categoría desde la URL

  useEffect(() => {
    if (!catId) {
      // Si no hay categoría, carga todos los productos
      getProducts().then((response) => setProducts(response));
    } else {
      // Si hay una categoría, filtra los productos por esa categoría
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
