import { useEffect, useState } from "react";
import { obtenerEmpleados } from "../services/empleados.api";
import Tablagenerica from "../../../components/tabla/TablaGenerica.jsx";
import PanelAccionesTabla from "../../../components/tabla/PanelAccionesTabla.jsx";

function ListarEmpleados() {
    const [empleados, setEmpleados] = useState([]);
    const [filaSeleccionada, setFilaSeleccionada] = useState(null);

    useEffect(() => {
        const cargar = async () => {
            const data = await obtenerEmpleados();
            setEmpleados(data);
        };

        cargar();
    }, []);

    const columnas = [
        { titulo: "ID", campo:"id"},
        { titulo: "Nombre", campo:"nombre"},
        { titulo: "Usuario", campo:"usuario"},
        { titulo: "Rol", campo:"rol"},
        { titulo: "Estado", campo:"estado"},
        { titulo: "Registro", campo:"fecha_registro", tipo: "fecha"},
    ];

    const acciones = [
        {
            nombre: "editar",
            label: "Editar",
            onClick: (empleado) => {
                console.log("Editar", empleado);
            },
        },
        {
            nombre: "estado",
            label: "Activar / Desactivar",
            onClick: (empleado) => {
                console.log("Cambiar estado", empleado);
            },
        },
    ];

    return (
        <div>
            <h2>Lista de empleados</h2>

            <Tablagenerica 
                columnas={columnas}
                datos={empleados}
                filaSeleccionada={filaSeleccionada}
                onSeleccionarFila={setFilaSeleccionada}
                mensajeVacio="No hay datos"
            />

            <PanelAccionesTabla
                registroSeleccionado={filaSeleccionada}
                acciones={acciones}
            />
        </div>
    );
}

export default ListarEmpleados;