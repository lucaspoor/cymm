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
    <div
      className="col-lg-4 col-md-6 shuffle-item shuffle-item--visible"
      data-groups='["government","healthcare"]'
      style={{
        padding: ".25em",
        visibility: "visible",
        willChange: "transform",
        opacity: 1,
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "transform, opacity",
      }}
    >
      <div
        style={{
          margin: ".5em",
          padding: "1em",
          border: "solid 1px #ccc",
          height: "550px",
        }}
      >
        <img
          className="img-fluid"
          src={foto}
          alt="project-img"
          style={{ border: "solid 1px #ccc", marginBottom: "1em" }}
        />
        <h4 className="project-item-title">
          <a href="projects-single.html">{nombre}</a>
        </h4>
        <p className="project-cat">{descripFinal}</p>
      </div>
    </div>
  );
}
