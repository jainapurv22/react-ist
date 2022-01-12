import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    console.log("remove " + id);
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  async function fetchTours() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (!tours.length) {
    return (
      <main className="no-tour">
        <h1 className="head">No Tours Left</h1>
        <button
          className="refresh"
          onClick={() => {
            fetchTours();
          }}
        >
          Refresh
        </button>
      </main>
    );
  }

  return (
    <div className="App">
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </div>
  );
};

export default App;
