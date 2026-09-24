"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newMovie = void 0;
exports.PopulateDatabase = PopulateDatabase;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const route_1 = __importDefault(require("./route"));
// import Schema from "mongoose";
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const mongo_uri = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
if (!mongo_uri) {
    throw new Error("Nothing to display");
}
mongoose_1.default.connect(mongo_uri);
const MovieProps = new mongoose_1.default.Schema({
    searchTerm: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    poster_url: {
        type: String,
        required: true,
    }
});
exports.newMovie = mongoose_1.default.model("MoviesList", MovieProps);
const app = (0, express_1.default)();
app.use(express_1.default.json());
async function PopulateDatabase(searchTerm, movie) {
    const matchedMovie = movie?.[0];
    console.log("this one is coming from backend:", matchedMovie?.poster_path);
    try {
        const existingMovie = await exports.newMovie.findOne({ searchTerm });
        // console.log(searchTerm);
        if (existingMovie) {
            existingMovie.count += 1;
            await existingMovie.save();
        }
        else {
            if (movie.length > 0) {
                const newMovieEntry = new exports.newMovie({
                    searchTerm,
                    count: 1,
                    poster_url: matchedMovie?.poster_path ? `https://image.tmdb.org/t/p/w500${matchedMovie?.poster_path}` : "/images/no-movie.png",
                });
                await newMovieEntry.save();
                return newMovieEntry.poster_url || null;
            }
        }
    }
    catch (error) {
        console.error("Error populating database:", error);
    }
}
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL || process.env.LOCAL_URL
}));
// app.get("/api/movies", async(req, res) => {
//   try {
//     const movies = await newMovie.find().sort({ count: -1 }).limit(5);
//     res.status(200).json(movies);
//     // console.log("movies from database:", movies)
//   } catch (error:any) {
//     res.status(400).json({message: error.message})
//   }
// });
// app.post("/api/movies", async (req, res) => {
//     try {
//       const {searchTerm, movie} = req.body;
//       await PopulateDatabase(searchTerm, movie); 
//       res.status(200).json({ message: "Movie data stored successfully" });
//     } catch (error) {
//       console.error("Error storing movie data:", error);
//       res.status(500).json({ message: "Error storing movie data" });
//     }
//   });
app.use(route_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map