import './NavBar.css';
import ButtonComponent from './ButtonComponent';
import BrandComponent from './BrandComponent';
import CartWidget from './CartWidget';

export default function NavBar(){
    return (
            <nav>
                <BrandComponent/>
                <ButtonComponent text='Indumentaria'/>
                <ButtonComponent text='Calzado'/>
                <ButtonComponent text='Accesorios'/>
                <CartWidget/>
            </nav>
    )
}

