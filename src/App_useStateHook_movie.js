import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Moana", ratings: 8 },
    { id: 2, title: "Frozen", ratings: 7 },
  ])

  const changeName = () => {
    let updateMovie = movies.map((movie) => movie.title === 'Frozen' ? {...movie, title: 'Tangled'} : movie)
    setMovies(updateMovie)
  }

  return (
    <>
      {movies.map((movie) => (
        <div key={Math.random()}>
          <h1>{movie.title}</h1>
          <p>ratings: {movie.ratings}</p>
        </div>
      ))}
      <button onClick={changeName}>Change Name</button>
    </>
  );
}

export default App;
