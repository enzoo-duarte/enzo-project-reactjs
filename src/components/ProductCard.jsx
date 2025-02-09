import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product }) {
return (
    <article className="product-card">
        <h3 className="product-title">
            {product.title}
        </h3>
        <img
            className="product-image"
            src={product.image}
            alt={product.title}
        />
        <button className="product-details-button">
            <Link to={`/product/${product.id}`}>Más detalles</Link>
        </button>
    </article>
    );
}
