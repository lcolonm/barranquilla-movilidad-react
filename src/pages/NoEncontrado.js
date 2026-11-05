import { Link } from 'react-router-dom';

function NoEncontrado() {
    return (
        <section style={{ textAlign: "center", padding: "50px" }}>
            <h2>404 - Página no encontrada</h2>
            <p>Lo sentimos, la página que buscas no existe en esta SPA.</p>
            <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>Volver al inicio</Link>
        </section>
    );
}

export default NoEncontrado;