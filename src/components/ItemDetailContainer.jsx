import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../asyncMock';
import ProductDetail from './ProductDetail';

export default function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
    getProductById(id).then(setProduct);
    }, [id]);

    return (
    <section className="item-detail-container">
        {product ? <ProductDetail product={product} /> : <p>Cargando producto...</p>}
    </section>
    );
}
