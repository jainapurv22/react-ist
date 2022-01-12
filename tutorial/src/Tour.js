import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  return (
    <main className="tour">
      <img src={image} alt={name} />
      <div className="name">
        <h4>{name}</h4>
        <h4 className="price">${price}</h4>
      </div>
      <div className="info">
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button className="read" onClick={() => setReadmore(!readmore)}>
            {readmore ? `See Less` : "Read More"}
          </button>
        </p>
      </div>
      <button onClick={() => removeTour(id)} className="btn">
        Not interested
      </button>
    </main>
  );
};

export default Tour;
