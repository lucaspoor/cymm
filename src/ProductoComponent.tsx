import { Producto } from "./Producto";

type ProductoProps = {
  producto: Producto;
};

export function ProductoComponent({
  producto: { nombre, descripcion, foto },
}: ProductoProps) {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card">
        <img src={foto} alt="" className="card-img-top" />
        <div className="card-body">
          <h4 className="project-item-title">{nombre}</h4>
          <p className="card-text">{descripcion}</p>
          <a
            href="../catalogo-2020.pdf"
            className="btn btn-outline btn-sm"
            type="sumbit"
            style={{ color: "#00a7a7", borderColor: "#00a7a7" }}
          >
            Ver en el catálogo
          </a>
        </div>
      </div>
    </div>
  );
}
