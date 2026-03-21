import { jwtDecode } from "jwt-decode";

export const guardarToken = (token) => {
    localStorage.setItem("token", token);
};

export const obtenerToken = () => {
    return localStorage.getItem("token");
};

export const eliminarToken = () => {
    localStorage.removeItem("token");
};

export const estaAutenticado = () => {
    return !!localStorage.getItem("token");
};

export const obtenerUsuario = () =>{
    const token = obtenerToken();

    if (!token) return null;
    
    try {
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
    
}