import api from "../../../api/api.js";

export const obtenerEmpleados = async () => {
    const respuesta = await api.get("/usuarios");
    return respuesta.data;
}