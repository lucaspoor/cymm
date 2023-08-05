import "./App.css";
import { ProductoComponent } from "./ProductoComponent";
import { productos } from "./productos";

function App() {
  return (
    <>
      {productos.map((p) => (
        <ProductoComponent producto={p} />
      ))}
    </>
  );
}

export default App;
