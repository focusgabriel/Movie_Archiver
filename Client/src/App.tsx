/** @format */

import Movies from "./components/Movies";

const App = () => {
  return (
    <main className="bg-[#1b1436] text-white min-h-screen">
      <header className="w-[80%] mx-auto pt-8 pb-4">
        <p className="text-sm uppercase tracking-[0.24em] text-purple-200/80">
          MoviesArchiver
        </p>
        <h1 className="mt-3 text-3xl font-bold md:text-5xl">
          Discover your next favorite movie
        </h1>
        <p className="mt-3 max-w-2xl text-base text-gray-200 md:text-lg">
          Search trending titles, browse movie picks, and find your next watch
          in one clean streaming-ready archive.
        </p>
      </header>

      <div className="w-[80%] mx-auto pb-10">
        <Movies />
      </div>
    </main>
  );
};

export default App;
