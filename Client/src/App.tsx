import { useEffect, useState } from "react";
import Movies from "./components/Movies"
// import type { MovieList } from "./constants/movie";


type MovieList = {
  searchTerm: string;
  count: number;
  poster_url: string;
}

const App = () => {
  const [apiData, setapiData] = useState<MovieList[]>([]);
  useEffect(() => {


    fetch(`http://localhost:5000/api/movies`)
    .then(res => res.json())
    .then(data => setapiData(data));
  }, [apiData])
  return (
    <div className="bg-[#1b1436] shadow-black text-white w-[80%] mx-auto">

      <ul>
        {apiData.map((movie, index) => (
          <li key={index}>
            <img src={movie.poster_url} alt={movie.searchTerm} />
          </li>
        ))}
      </ul>
      <Movies />
    </div>
  )
}

export default App 