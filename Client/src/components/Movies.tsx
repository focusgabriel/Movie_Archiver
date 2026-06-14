import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import Search from "./Search";
// import { useDebounce } from "react-use";
import type { MovieList } from "../constants/movie";
import TrendingCard from "./TrendingCard";

const API_BASE_URL = "https://api.themoviedb.org/3"

const API_URI = import.meta.env.VITE_API_URL

const API_OPTION = {
  method: "GET",
  headers: {
    accept:"application/json",
    Authorization: `Bearer ${API_URI}`
  },
}

const Movies = () => {
    const cache = useRef<Record<string, MovieList[]>>({});
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [movieData, setMovieData] = useState<MovieList[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [debouncedSearchTerm, setdebouncedSearchTerm] = useState<string>("");

    useEffect(() => {
      const timer = setTimeout(() => {
        setdebouncedSearchTerm(searchTerm);
      }, 1500);

      return () => clearTimeout(timer);
    }, [searchTerm]);

    

    useEffect(() => {
    if (debouncedSearchTerm && debouncedSearchTerm.trim()) {
    const SendMoviesData = async () => {
      try {
      const response = await fetch("http://localhost:5000/api/movies", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        searchTerm: debouncedSearchTerm.toLocaleLowerCase(),
        movie:movieData,
        }),
      });
      const data = await response.json();
        console.log(data);
      
      } catch (error) {
      console.error("Error sending data:", error);
      }
    };
    SendMoviesData();
    }
  }, [debouncedSearchTerm, movieData]);

    const fetchMovies = async (query='') => {
      if(cache.current[query]){
        setMovieData(cache.current[query]);
        return;
      }
      console.log("Fetching from API:", query);
      setLoading(true);
      try {
        const endpoint = query 
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

        const response = await fetch(endpoint, API_OPTION)

        if(!response.ok){
          throw new Error("Failed to fetch movies")
        }
        const data = await response.json();

        if(data.Response === false){
          setErrorMessage(data.error || "Can't find Movies. please try again")
          setMovieData([])
          return;
        }
        // console.log(movieData);
        setMovieData(data.results || [])

        cache.current[query] = data.results; 

      } catch (error) {
        console.error(`Error fetching movies: ${error}`)
        setErrorMessage('Error fetching Movies. please try again')
      } finally {
        setLoading(false);
      }
    }
    
  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);


  return (
    <div className="">
      <div className="flex justify-between mt-4 gap-4">
      {/* <img src="/banner.png" alt="banner" className="w-[40%] text-center flex-4  my-4 rounded-4xl" /> */}
      <img src="/banner.png" alt="banner" className="w-full object-cover  text-center rounded-xl h-60 md:h-100 lg:h-100"   />
      </div>
      <h2 className="text-3xl mt-20 mb-20 align-middle text-center ">
        Find <span className="text-red-600 text-5xl">Movies</span> You'll Enjoy Without the Hassle
      </h2>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="border-3 border-b-blue-900 border-t-blue-900 border-l-0 border-r-0 mt-8 mb-[10%]">
        <h2 className="md:text-3xl">Trending Movies</h2>
        <TrendingCard />
      </div>

      <h2 className="md:text-3xl sm:text-2xl text-xl mb-10 ml-4 align-middle text-left">All Movies</h2>
      {loading ? (
        <p>Loading...</p>
      ): errorMessage ? 
      (<p>{errorMessage.length === 1}</p>) :
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 w-400px object-contain sm:grid-cols-2">
        
          {movieData.map((movie) => (
            <MovieCard key={movie.id} 
              
              movie={movie}
            />
          ))}
        </div>
      </div>
    }
      {errorMessage && <p className="text-500-red">{errorMessage}</p>}
    </div>
  )

}
export default Movies;