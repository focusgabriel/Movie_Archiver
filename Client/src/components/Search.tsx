import { FaSearch } from "react-icons/fa"

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div>
        <div>
          <FaSearch  />
          <input 
            type="text"
            placeholder="Search through thousands of movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 rounded-md p-1 border-[#242b6d] w-[80%] m-2 "
          />
        </div>
    </div>
  )
}

export default Search