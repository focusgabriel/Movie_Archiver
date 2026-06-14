
const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div>
        <div className="">
          <img src="/search.png" alt="search" className="absolute w-10 h-7 mt-3 ml-4 object-contain block" />
          <input 
            type="text"
            placeholder="Search through thousands of movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 rounded-md p-1 border-[#242b6d] w-[80%] m-2 relative pl-13"
          />
        </div>
    </div>
  )
}

export default Search