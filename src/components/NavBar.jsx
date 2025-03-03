import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button>
          <Link to="/">Nexus SH</Link>
        </button>
      </div>

      <div className="navbar-buttons">
      <button>
          <Link to="/">Todo</Link>
        </button>
        <button>
          <Link to="/category/indumentaria">Indumentaria</Link>
        </button>
        <button>
          <Link to="/category/calzado">Calzado</Link>
        </button>
        <button>
          <Link to="/category/accesorios">Accesorios</Link>
        </button>
        <CartWidget />
      </div>
    </nav>
  );
}
