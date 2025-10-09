import React, { useEffect, useState } from 'react'
import CardDesign1 from '../CardDesign/CardDesign1';
import { Link } from 'react-router';
import SearchLoading from '../SearchLoading/SearchLoading';

const AllAppsData = () => {

  const [showAllData, setShowAllData] = useState([]);
  const [animatedLoading, setAnimatedLoading] = useState(true);

  // search states
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    fetch("/appData.json")
      .then((res) => res.json())
      .then((result) => {
        setShowAllData(result);
        setFilterData(result);
        setAnimatedLoading(false);
      })
      .catch((error) => {
        console.log("data is fetching", error);
        setAnimatedLoading(false);
      });
  }, []);

  // search functionality
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    setSearchLoading(true);

    if (searchValue.trim() === "") {
      setFilterData(showAllData);
      setSuggestions([]);
      setSearchLoading(false)
      return;
    }

    setTimeout(() => {
      const filtered = showAllData.filter((item) =>
        item.title.toLowerCase().includes(searchValue)
      );
      setFilterData(filtered);
      setSuggestions(filtered.slice(0, 5));
      setSearchLoading(false); 
    }, 500);
  };

  // select suggestion
  const handleSelectSuggestion = (title) => {
    setSearch(title);
    const filtered = showAllData.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilterData(filtered);
    setSuggestions([]);
    setSearchLoading(false)
  };

  if (animatedLoading) {
    return (
      <div className="text-center py-10">
        <span className="loading loading-spinner text-primary scale-150"></span>
      </div>
    );
  }

  return (
    <div>
      <div className='flex items-center justify-between px-8 mt-4 relative'>
        <h3 className='text-2xl md:text-3xl font-bold'>
          ({filterData.length}) Apps Found
        </h3>

        <div className='relative'>
          <label className="input bg-transparent">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              type="search"
              required
              placeholder="Search"
              onChange={handleSearch}
              value={search}
            />
          </label>

          {/* suggestions dropdown */}
          {suggestions.length > 0 && (
            <ul className="absolute bg-white text-black shadow-md rounded-lg mt-1 w-full z-10 max-h-56 overflow-y-auto">
              {suggestions.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleSelectSuggestion(item.title)}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* ==== No Data Found ==== */}
      {searchLoading ? (
        <div className="mt-20">
          <SearchLoading />
        </div>
      ) : filterData.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-400">
            No Apps Found
          </h2>
        </div>
      ) : (
        <div className="showData grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 justify-items-center px-6">
          {filterData.map((item) => (
            <Link to={`/appDetails/${item.id}`} key={item.id}>
              <CardDesign1
                image={item.image}
                title={item.title}
                downloads={item.downloads}
                ratingAvg={item.ratingAvg}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllAppsData;
