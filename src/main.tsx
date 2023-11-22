import React from "react";
import ReactDOM from "react-dom/client";
import ProductosRoot from "./ProductosRoot.tsx";
import FormContacto from "./contacto/FormContacto.tsx";

ReactDOM.createRoot(document.getElementById("productos")!).render(
  <React.StrictMode>
    <ProductosRoot />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("form-contacto")!).render(
  <React.StrictMode>
    <FormContacto />
  </React.StrictMode>
);
