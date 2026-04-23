import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./FormularioEditable.css";

function FormularioEditable({
    registroSeleccionado,
    campos = [],
    onGuardar,
    onEliminar,
    onCancelar,
    titulo = "Editar registro",
}) {
    const [form, setForm] = useState({});

    useEffect(() => {
        if (registroSeleccionado) {
            setForm(registroSeleccionado);
        }
    }, [registroSeleccionado]);

    if (!registroSeleccionado) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onGuardar(form);
    };

    if (!registroSeleccionado) return null;

const modal = (
    <div className="modal-overlay" onClick={onCancelar}>
        <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <h3>{titulo}</h3>

            <form onSubmit={handleSubmit} className="formulario-editable">
                {campos.map((campo) => (
                    <div key={campo.nombre} className="form-grupo">
                        <label>{campo.label}</label>

                        {campo.tipo === "select" ? (
                            <select
                                name={campo.nombre}
                                value={form[campo.nombre] || ""}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione</option>
                                {campo.opciones?.map((opcion) => (
                                    <option key={opcion.value} value={opcion.value}>
                                        {opcion.label}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={campo.tipo || "text"}
                                name={campo.nombre}
                                value={form[campo.nombre] || ""}
                                onChange={handleChange}
                            />
                        )}
                    </div>
                ))}

                <div className="formulario-editable-botones">
                    <button type="submit">Guardar cambios</button>
                    <button type="button" onClick={() => onEliminar(form)}>
                        Eliminar
                    </button>
                    <button type="button" onClick={onCancelar}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    </div>
);

return createPortal(modal, document.body);
}

export default FormularioEditable;