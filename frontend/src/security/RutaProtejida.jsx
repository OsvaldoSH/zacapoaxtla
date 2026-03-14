import { Navigate } from "react-router-dom";
import { estaAutenticado } from "../utils/auth";

function Rutaprotegida ({ children }) {
    if ( !estaAutenticado() ) {
        return <Navigate to="/" />
    }

    return children;
}

export default Rutaprotegida;