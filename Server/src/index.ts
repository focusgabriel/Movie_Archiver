import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import Schema from "mongoose";
import cors from "cors"

dotenv.config();

const mongo_uri = process.env.MONGO_URI;
const PORT = 5000;

if(!mongo_uri){
  throw new Error("Nothing to display")
}
mongoose.connect(mongo_uri);

type MovieSchema = {
  searchTerm: string,
  count: number,
  poster_url: string,
}

  const MovieProps = new mongoose.Schema<MovieSchema>({
    searchTerm : {
      type: String,
      required: true,
    },
    count : {
      type: Number,
      required: true,
    },
    poster_url : {
      type: String,
      required: true,
    }
  })

  type MovieList = {
    id: number;
    title: string;
    poster_path: string | null;
    vote_average: number;
    original_language: string;
    release_date: string;
  };

  const newMovie = mongoose.model("MoviesList", MovieProps);

  const app = express();

  app.use(express.json());
  export async function PopulateDatabase(searchTerm: string, movie:MovieList[]) {
    
    // const firstMovie = movie.find((m) => m.title.toLowerCase().includes(searchTerm.toLowerCase()));
    // console.log(firstMovie?.poster_path);
    const matchedMovie = movie?.[0];
    console.log(matchedMovie.poster_path);
    try{
      const existingMovie = await newMovie.findOne({ searchTerm });
      // console.log(searchTerm);
      if(existingMovie){
        existingMovie.count += 1;
        await existingMovie.save();
      } else {
          if(movie) {
            const newMovieEntry = new newMovie({
              searchTerm,
              count: 1,
              poster_url: matchedMovie?.poster_path ? `https://image.tmdb.org/t/p/w500${matchedMovie?.poster_path}` : "/images/no-movie.png",
          });
          await newMovieEntry.save();
        }
      }
    } catch (error) {
      console.error("Error populating database:", error);
    } 
  }
  
app.use(
  cors({
    origin: "*"
  })
)

app.get("/api/movies", async(req, res) => {
  try {
    const movies = await newMovie.find().sort({ count: -1 }).limit(5);
    res.status(200).json(movies);
    // console.log("movies from database:", movies)
  } catch (error:any) {
    res.status(400).json({message: error.message})
  }
});

app.post("/api/movies", async (req, res) => {
    try {
      const {searchTerm, movie} = req.body;
      await PopulateDatabase(searchTerm, movie); 
      res.status(200).json({ message: "Movie data stored successfully" });
    } catch (error) {
      console.error("Error storing movie data:", error);
      res.status(500).json({ message: "Error storing movie data" });
    }
  });

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});