import React from "react";

export default function Images(props) {
  if (props.image) {
    return (
      <section className="gallery">
        <div className="row">
          {props.image.map(function (image, index) {
            return (
              <div className="col-4" key={index}>
                <a href={image.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={image.src.landscape}
                    alt={image.alt}
                    className="img-fluid rounded my-3"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
