import "./PanelAccionesTabla.css"

function PanelAccionesTabla({registroSeleccionado, acciones = [] }) {
    if (!registroSeleccionado) return null;

    return (
        <div className="panel-acciones-tabla">
            <div className="panel-acciones-info">
                Registro seleccionado: <strong>{registroSeleccionado.id}</strong>
            </div>

            <div className="panel-acciones-botones">
                {acciones.map((accion) => (
                    <button key={accion.nombre} type="button" className="btn-accion-tabla"
                        onClick={() => accion.onClick(registroSeleccionado)}>
                        {accion.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PanelAccionesTabla;