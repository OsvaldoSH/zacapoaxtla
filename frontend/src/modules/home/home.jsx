import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./home.css";

function Inicio() {
    const navigate = useNavigate();
    return (
        <div className="hero">
            <header className="navbar">
                <h1 className="logo-texto">
                    Distribuidora de Cerveza Zacapoaxtla
                </h1>

                <button className="btn-login" onClick={() => navigate("/login")}>
                    Iniciar sesion
                </button>
            </header>
            <div className="contenido">
                <img src={logo} alt="logo" className="logo-central" />
            </div>
        </div>
    );
}
export default Inicio;