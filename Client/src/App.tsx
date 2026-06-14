import { useEffect, useState } from "react";
import Movies from "./components/Movies"


// type MovieList = {
//   searchTerm: string;
//   count: number;
//   poster_url: string;
// }

const App = () => {
  // const [apiData, setapiData] = useState<MovieList[]>([]);
  // useEffect(() => {


  //   fetch(`http://localhost:5000/api/hello`)
  //   .then(res => res.json())
  //   .then(data => setapiData(data));
  // }, [apiData])
  return (
    <div className="bg-[#1b1436] text-white w-[85%] mx-auto border border-amber-50">

      {/* <ul>
        {apiData.map((movie, index) => (
          <li key={index}>
            <h3>{movie.searchTerm}</h3>
            <p>Count: {movie.count}</p>
            <img src={movie.poster_url} alt={movie.searchTerm} />
          </li>
        ))}
      </ul> */}
      <Movies />
    </div>
  )
}

export default App 