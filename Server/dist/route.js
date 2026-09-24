"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./index");
const index_2 = require("./index");
const movieRouter = express_1.default.Router();
// const app = express();
// app.use(cors({
//     origin: "*"
// }));
movieRouter.get("/api/movies", async (req, res) => {
    try {
        const movies = await index_2.newMovie.find().sort({ count: -1 }).limit(5);
        res.status(200).json(movies);
        // console.log("movies from database:", movies)
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
movieRouter.post("/api/movies", async (req, res) => {
    try {
        const { searchTerm, movie } = req.body;
        await (0, index_1.PopulateDatabase)(searchTerm, movie);
        res.status(200).json({ message: "Movie data stored successfully" });
    }
    catch (error) {
        console.error("Error storing movie data:", error);
        res.status(500).json({ message: "Error storing movie data" });
    }
});
exports.default = movieRouter;
