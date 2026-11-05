import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/analisis">Análisis</Link></li>
                <li><Link to="/derechos">Derechos y Deberes</Link></li>
                <li><Link to="/propuestas">Propuestas</Link></li>
                <li><Link to="/conclusion">Conclusión</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;