import { Navigate } from "react-router-dom";
import { obtenerToken, obtenerUsuario } from "../modules/auth/utils/auth";

function Rutaprotegida ({ children, rolPermitido }) {
    const token = obtenerToken();
    const usuario = obtenerUsuario();

    if (!token) {
        return <Navigate to="/" />;
    } 
    
    if (rolPermitido && usuario?.rol !==rolPermitido) {
        return <Navigate to="/"/>;
    
    }
    return children;
}

export default Rutaprotegida;