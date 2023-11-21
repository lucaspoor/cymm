import "./App.css";
import { ProductoComponent } from "./ProductoComponent";
import { productos } from "./productos";

function App() {
  return (
    <div className="row">
      {productos.map((p) => (
        <ProductoComponent producto={p} key={p.id} />
      ))}
    </div>
  );
}

export default App;
