import type { MovieList } from "../constants/movie";


type MovieCardProps = {
  movie: MovieList;
};

const MovieCard = ({
  movie: {
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
  },
}: MovieCardProps) => {
  // component code


// const MovieCard = ({movie: 
//   {title, vote_average, poster_path, release_date, original_language }
// }) => {
  return (
    <div className="m-4 bg-black rounded-md ">
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: '/no-movie.png'} className="h-70 w-full object-contain mt-3 rounded-md"  />


      <div>
        <h3 className="text-1xl mt-4 mb-4 m-2">{title}</h3>
      </div>

      <div className="m-2 flex justify-normal text-center space-4-xl gap-1">
        <div className="">
          <img src="star.svg" alt="Star Icon" className="w-3 mt-1" />
          
        </div>        
        <p className=" text-sm">{vote_average ? vote_average.toFixed(1) : 'N/A'} </p>

        <span >• </span>
        <p className=" text-sm">
          {original_language.toUpperCase()}
        </p>

        <span >• </span>
        <p className="text-gray-400 text-sm">
          {release_date ? release_date.split('-')[0]: 'N/A'}
        </p>
      </div>
      </div>
    
  )

}

export default MovieCard