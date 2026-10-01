import { useEffect, useState } from "react";
import { talleres } from "./data/talleres";
import Boton from "./components/Boton/Boton";
import TarjetaTaller from "./components/TarjetaTaller/TarjetaTaller";
import estilos from "./App.module.css";

export default function App() {
  const [tema, setTema] = useState("claro");
  const [vista, setVista] = useState("grilla");
  const [compacto, setCompacto] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-tema", tema);
  }, [tema]);

  // Clases de Bootstrap que cambian según el estado
  const claseContenedor = compacto ? "container py-2" : "container py-5";
  const claseFila = compacto ? "row g-2" : "row g-4";
  const claseColumna =
    vista === "grilla" ? "col-12 col-md-6 col-lg-4" : "col-12";

  return (
    <main className={claseContenedor}>
      <div className={estilos.encabezado}>
        <h1 className={estilos.titulo}>Catálogo de Talleres</h1>
        <div className={estilos.acciones}>
          <Boton
            variante="secundario"
            onClick={() => setTema(tema === "claro" ? "oscuro" : "claro")}
          >
            {tema === "claro" ? "Tema oscuro" : "Tema claro"}
          </Boton>
          <Boton activo={vista === "grilla"} onClick={() => setVista("grilla")}>
            Grilla
          </Boton>
          <Boton activo={vista === "lista"} onClick={() => setVista("lista")}>
            Lista
          </Boton>
          <Boton activo={compacto} onClick={() => setCompacto(!compacto)}>
            Modo compacto
          </Boton>
        </div>
      </div>

      <div className={claseFila}>
        {talleres.map((taller) => (
          <div key={taller.id} className={claseColumna}>
            <TarjetaTaller taller={taller} vista={vista} />
          </div>
        ))}
      </div>
    </main>
  );
}