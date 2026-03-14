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