import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        console.log(data);
      });
  }, []);
  return (
    <main>
      <h1>Hello from React!</h1>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>
            {m.title} - {m.year}{" "}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
