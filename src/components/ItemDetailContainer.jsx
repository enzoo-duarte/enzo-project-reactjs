import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';

export default function ItemDetailContainer() {
    const { id } = useParams();
    return <ProductDetail id={id} />;
}
