import { useState } from "react";
import estilos from "./TarjetaTaller.module.css";

export default function TarjetaTaller({ taller }) {
  const { titulo, categoria, cupo, inscriptos, nuevo, descripcion } = taller;
  const [expandida, setExpandida] = useState(false);

  const libres = cupo - inscriptos;
  const porcentaje = Math.round((inscriptos / cupo) * 100);
  const disponibilidad =
    libres === 0 ? "completo" : libres <= 3 ? "pocos" : "disponible";

  const clases = [
    estilos.tarjeta,
    estilos[disponibilidad],
    expandida && estilos.expandida,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={clases}>
      <header className={estilos.encabezado}>
        <h2 className={estilos.titulo}>{titulo}</h2>
        {nuevo && <span className={estilos.etiqueta}>Nuevo</span>}
      </header>

      <p className={estilos.categoria}>{categoria}</p>

      <p className={estilos.cupos}>
        {libres === 0 ? "Completo" : `Cupos libres: ${libres} de ${cupo}`}
      </p>

      <div
        className={estilos.barra}
        role="progressbar"
        aria-label="Ocupación del taller"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={porcentaje}
      >
        <div className={estilos.relleno} style={{ width: `${porcentaje}%` }} />
      </div>

      <button
        type="button"
        className={estilos.detalles}
        aria-expanded={expandida}
        onClick={() => setExpandida(!expandida)}
      >
        {expandida ? "Ocultar detalles" : "Ver detalles"}
      </button>

      {expandida && <p className={estilos.descripcion}>{descripcion}</p>}
    </article>
  );
}