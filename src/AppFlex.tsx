import "./App.css";
import { productos } from "./productos";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {productos.map((p) => (
        <div
          style={{
            border: "solid 1px #ccc",
            margin: ".5em",
            padding: "1em",
            backgroundColor: "white",
          }}
        >
          <img
            src={p.foto}
            style={{
              width: "300px",
              height: "300px",
              border: "solid 1px #ccc",
              marginBottom: "1em",
            }}
          />
          <div className="section-title">{p.nombre}</div>
          <div>{p.descripcion}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
