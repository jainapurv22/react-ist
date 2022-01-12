import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  console.log(tours);

  return (
    <main>
      <h1 className="head">Our Tours</h1>
      <div className="line"></div>
      {tours.map((tour) => {
        return (
          <div className="tours">
            <Tour key={tour.id} {...tour} removeTour={removeTour} />
          </div>
        );
      })}
    </main>
  );
};

export default Tours;
