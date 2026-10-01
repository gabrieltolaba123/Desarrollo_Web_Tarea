import { useEffect, useState } from "react";
import { talleres } from "./data/talleres";
import TarjetaTaller from "./components/TarjetaTaller/TarjetaTaller";
import estilos from "./App.module.css";

export default function App() {
  const [tema, setTema] = useState("claro");

  // El atributo va en <html> para que cambie el fondo de toda la página
  useEffect(() => {
    document.documentElement.setAttribute("data-tema", tema);
  }, [tema]);

  return (
    <main className="container py-5">
      <div className={estilos.encabezado}>
        <h1 className={estilos.titulo}>Catálogo de Talleres</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setTema(tema === "claro" ? "oscuro" : "claro")}
        >
          {tema === "claro" ? "Tema oscuro" : "Tema claro"}
        </button>
      </div>
      <div className="row g-4">
        {talleres.map((taller) => (
          <div key={taller.id} className="col-12 col-md-6 col-lg-4">
            <TarjetaTaller taller={taller} />
          </div>
        ))}
      </div>
    </main>
  );
}