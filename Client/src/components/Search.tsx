interface serarchProps {
  searchTerm: string;
  setSearchTerm: any;
}

const Search = ({searchTerm, setSearchTerm}: serarchProps) => {
  return (
    <div>
        <div className="text-center">
          <img src="/search.png" alt="search" className="absolute w-10 h-7 mt-1  sm:ml-5 md:ml-50 lg:ml-52  text-center object-contain block" />
          <input 
            type="text"
            placeholder="Search through thousands of movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 rounded-md p-1 border-[#242b6d] w-full  md:w-[60%] relative pl-13"
          />
        </div>
    </div>
  )
}

export default Search