import { useEffect, useState } from "react";
import { obtenerEmpleados } from "../services/empleados.api";
import Tablagenerica from "../../../components/tabla/TablaGenerica.jsx";
import FormularioEditable from "../../../components/tabla/FormularioEditable.jsx"
import BotonRegresar from "../../../components/navigation/BotonRegresar.jsx"
import "./ListarEmpleado.css"

function ListarEmpleados() {
    const [empleados, setEmpleados] = useState([]);
    const [filaSeleccionada, setFilaSeleccionada] = useState(null);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    useEffect(() => {
        const cargar = async () => {
            const data = await obtenerEmpleados();
            setEmpleados(data);
        };

        cargar();
    }, []);

    const handleSeleccionarFila = (fila) => {
        setFilaSeleccionada(fila);
        setMostrarFormulario(false);
    };

    const columnas = [
        { titulo: "ID", campo:"id"},
        { titulo: "Nombre", campo:"nombre"},
        { titulo: "Usuario", campo:"usuario"},
        { titulo: "Rol", campo:"rol"},
        { titulo: "Estado", campo:"estado"},
        { titulo: "Registro", campo:"fecha_registro", tipo: "fecha"},
    ];

    const camposFormulario = [
        {nombre: "nombre", label: "Nombre"},
        {nombre: "usuario", label: "usuario"},
        {
            nombre: "rol",
            label: "Rol",
            tipo: 'select',
            opciones: [
                {value: "Administracion", label: "Administracion"},
                {value: "Bodega", label: "Bodega"},
                {value: "Sistemas", label: "Sistemas"},
            ],
        },
        {
            nombre: "estado",
            label: "Estado",
            tipo: "select",
            opciones: [
                {value: "activo", label: "Activo"},
                {value: "inactivo", label: "Inactivo"},
            ],
        },
    ]; 

    const acciones = [
        {
            nombre: "editar",
            icono: "✏️",
            onClick: (fila) => {
                setFilaSeleccionada(fila);
                setMostrarFormulario(true);
            },
        },
    ];

    return (
        <div className="empleados-page">
            <BotonRegresar/>
            <h2>Lista de empleados</h2>

            <Tablagenerica 
                columnas={columnas}
                datos={empleados}
                filaSeleccionada={filaSeleccionada}
                onSeleccionarFila={handleSeleccionarFila}
                acciones={acciones}
                mensajeVacio="No hay datos"
            />

            {mostrarFormulario && filaSeleccionada && (
                <FormularioEditable
                    registroSeleccionado={filaSeleccionada}
                    campos={camposFormulario}
                    titulo="Editar empleado"
                    onGuardar={(data) => console.log("Guardar", data)}
                    onEliminar={(data) => console.log("Eliminar", data)}
                    onCancelar={() => setFilaSeleccionada(null)}
                />
            )}
        </div>
    );
}

export default ListarEmpleados;