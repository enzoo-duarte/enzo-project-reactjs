import TituloComponente from './TituloComponente';
import './ItemListContainer.css'; 

export default function ItemListContainer(props) {
    return (
    <section className="item-list-container">
        <TituloComponente />
        <h3>{props.greeting}</h3>
    </section>
    );
}
