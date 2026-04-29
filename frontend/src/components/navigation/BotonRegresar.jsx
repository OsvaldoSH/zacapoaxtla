import  { useNavigate } from "react-router-dom";

function BotonRegresar() {
    const navigate = useNavigate();

    return (
        <button
            type="button"
            className="boton-regresar"
            onClick={ () => navigate("/admin")}
        >
            ← Menú
        </button>
    );
}

export default BotonRegresar;