import React from "react";

const Card = ({ imageSrc, title, description, lastUpdated }) => {
  return (
    <div className="card">
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">
          Last updated {lastUpdated}
        </small>
      </div>
    </div>
  );
};

export default Card;
