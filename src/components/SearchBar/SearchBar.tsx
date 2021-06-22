import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log(search);
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <form className="form-search" onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          placeholder="Search for images..."
          onChange={(e) => handleChange(e)}
        />
        <button className="search-btn" onClick={(e) => handleSearch(e)}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
