import { Producto } from "./Producto";

type ProductoProps = {
  producto: Producto;
};

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat mauris ut purus hendrerit imperdiet. Sed vitae ipsum eleifend, gravida erat ac, efficitur nibh.`;
export function ProductoComponent({
  producto: { nombre, descripcion, foto },
}: ProductoProps) {
  const descripFinal = descripcion.startsWith("Developed")
    ? lorem
    : descripcion;

  return (
    <div className="col-lg-4 mb-4">
      <div className="card">
        <img src={foto} alt="" className="card-img-top" />
        <div className="card-body">
          <h4 className="project-item-title">{nombre}</h4>
          <p className="card-text">{descripcion}</p>
          <a
            href=""
            className="btn btn-outline-success btn-sm"
            style={{ color: "#00a7a7", borderColor: "#00a7a7" }}
          >
            Ver en el catalogo
          </a>
        </div>
      </div>
    </div>
  );
}
