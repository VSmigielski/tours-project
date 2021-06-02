import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    // Extra precaution to make sure loading is set to true
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      // Log the response
      // console.log(tours);
      setLoading(false);
      // Insert json response array into our empty array
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    
  };

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

  if (tours.length === 0) {
    return (
      <main>
        <div calssName="title">
          <h2>No tours left.</h2>
          <button className="btn" onClick={() => fetchTours()}>Refresh</button>
        </div>
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
}

export default App;
