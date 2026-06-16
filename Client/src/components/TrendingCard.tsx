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
    <div className="my-10 flex justify-around overflow-hidden overflow-x-auto scrollbar-hide">

      <ul className="flex flex-nowrap gap-4 px-4" >
        {apiData.map((movie, index) => (
          <li key={index += 1} className="shrink-0 w-40  mx-2  px-2 flex text-[#b7b6e3]">
            <p className="text-8xl text-center">{index += 1}</p> <img src={movie.poster_url} alt={movie.searchTerm} className="w-full h-40 rounded-xl" />
          </li>
        ))}
      </ul>

    </div>
  )
}

export default TrendingCard