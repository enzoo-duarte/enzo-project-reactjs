import './NavBar.css';
import ButtonComponent from './ButtonComponent';
import BrandComponent from './BrandComponent';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <BrandComponent />
      </div>

      <div className="navbar-buttons">
        <ButtonComponent text="Indumentaria" />
        <ButtonComponent text="Calzado" />
        <ButtonComponent text="Accesorios" />
        <CartWidget />
      </div>
    </nav>
  );
}
