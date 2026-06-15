import { useEffect, useState } from "react";


const TrendingCard = () => {

  type MovieList = {
    searchTerm: string;
    count: number;
    poster_url: string;
  }

  const [apiData, setapiData] = useState<MovieList[]>([]);
  useEffect(() => {
  
    fetch(`http://localhost:5000/api/movies`)
    .then(res => res.json())
    .then(data => setapiData(data))
  }, [])

  return (
    <div className="my-10">

      <ul className="flex justify-between align-middle ">
        {apiData.map((movie, index) => (
          <li key={index += 1} className="w-[80%] mx-4">
            <img src={movie.poster_url} alt={movie.searchTerm} className="w-full h-50 object-center rounded-2xl" />
          </li>
        ))}
      </ul>

    </div>
  )
}

export default TrendingCard