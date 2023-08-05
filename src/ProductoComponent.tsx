import { Producto } from "./Producto";

type ProductoProps = {
  producto: Producto;
};
export function ProductoComponent({
  producto: { nombre, descripcion },
}: ProductoProps) {
  return (
    <div
      className="col-lg-4 col-md-6 shuffle-item shuffle-item--visible"
      data-groups='["government","healthcare"]'
      style={{
        visibility: "visible",
        willChange: "transform",
        opacity: 1,
        transitionDuration: "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionProperty: "transform, opacity",
      }}
    >
      <div className="project-img-container">
        <a
          className="gallery-popup cboxElement"
          href="images/projects/project1.jpg"
          aria-label="project-img"
        >
          <img
            className="img-fluid"
            src="images/projects/project1.jpg"
            alt="project-img"
          />
          <span className="gallery-icon">
            <i className="fa fa-plus" />
          </span>
        </a>
        <div className="project-item-info">
          <div className="project-item-info-content">
            <h3 className="project-item-title">
              <a href="projects-single.html">{nombre}</a>
            </h3>
            <p className="project-cat">{descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
