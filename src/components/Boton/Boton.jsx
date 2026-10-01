import estilos from "./Boton.module.css";

export default function Boton({
  variante = "primario",
  activo,
  type = "button",
  children,
  ...resto
}) {
  const clases = [estilos.boton, estilos[variante], activo && estilos.activo]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={clases}
      aria-pressed={activo === undefined ? undefined : activo}
      {...resto}
    >
      {children}
    </button>
  );
}