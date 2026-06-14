// import express from "express";
// import {PopulateDatabase} from "./index";
// import cors from "cors";

// const movieRouter = express.Router();

// const app = express();
// app.use(cors({
//     origin: "*"
// }));

// app.use(express.json());

// movieRouter.post("/api/movies", async (req, res) => {
//     try {
//       const {getSearch, movie} = req.body;
//       await PopulateDatabase(getSearch, movie);
//       res.status(200).json({ message: "Movie data stored successfully" });
//     } catch (error) {
//       console.error("Error storing movie data:", error);
//       res.status(500).json({ message: "Error storing movie data" });
//     }
//   });

// // app.use("/api", movieRouter);

// app.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });

// export default movieRouter;