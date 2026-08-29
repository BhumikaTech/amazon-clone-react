import "./Box.css";

function Box({ title, image, link }) {
  return (
    <div className="box">
      <div className="box-content">
        <h2>{title}</h2>

        <img
          src={image}
          alt={title}
          className="box-image"
        />

        <a href="#">{link}</a>
      </div>
    </div>
  );
}

export default Box;