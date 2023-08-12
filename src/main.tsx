import React from "react";
import ReactDOM from "react-dom/client";
import ProductosRoot from "./ProductosRoot.tsx";

ReactDOM.createRoot(document.getElementById("productos")!).render(
  <React.StrictMode>
    <ProductosRoot />
  </React.StrictMode>
);
