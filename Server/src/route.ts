import express from "express";
import {PopulateDatabase} from "./index";
import {newMovie} from "./index"
import cors from "cors";

const movieRouter = express.Router();

// const app = express();
// app.use(cors({
//     origin: "*"
// }));

movieRouter.get("/api/movies", async(req, res) => {
  try {
    const movies = await newMovie.find().sort({ count: -1 }).limit(5);
    res.status(200).json(movies);
    // console.log("movies from database:", movies)
  } catch (error:any) {
    res.status(400).json({message: error.message})
  }
});

movieRouter.post("/api/movies", async (req, res) => {
    try {
      const {searchTerm, movie} = req.body;
      await PopulateDatabase(searchTerm, movie); 
      res.status(200).json({ message: "Movie data stored successfully" });
    } catch (error) {
      console.error("Error storing movie data:", error);
      res.status(500).json({ message: "Error storing movie data" });
    }
  });

export default movieRouter;