import api from "../../../api/axios.js";

export const obtenerEmpleados = async () => {
    const respuesta = await api.get("/usuarios");
    return respuesta.data;
}