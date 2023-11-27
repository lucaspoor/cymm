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

const te = "NTY5MzkyMjIwMjY=";
const em = "Y29udGFjdG9AY3ltbWVkaWNhbC5jbA==";
const ttt = atob(te);

(function () {
  const a = /(\d\d)(\d)(\d{4})(\d{4})/.exec(ttt);
  if (!a) return;
  const els = document.getElementsByClassName("telefono");
  Array.from(els).forEach((el) => {
    ReactDOM.createRoot(el).render(
      <a href={`tel:${ttt}`}>
        +{a[1]} {a[2]} {a[3]} {a[4]}
      </a>
    );
  });
})();

(function () {
  const m = atob(em);
  const els = document.getElementsByClassName("email-contacto");
  Array.from(els).forEach((el) => {
    ReactDOM.createRoot(el).render(<a href={`mailto:${m}`}>{m}</a>);
  });
})();

ReactDOM.createRoot(document.getElementById("wtsp-chat")!).render(
  <a href={`https://wa.me/${ttt}`}>
    <img alt="Chat on WhatsApp" src="images/wtsp.png" width="180" />
  </a>
);
