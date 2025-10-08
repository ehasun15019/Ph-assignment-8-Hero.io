import React, { useEffect, useState } from 'react'
import CardDesign1 from '../CardDesign/CardDesign1';
import { IoSearch } from "react-icons/io5";

const AllAppsData = () => {

  const [showAllData, setShowAllData] = useState([]);
  const [animatedLoading, setAnimatedLoading] = useState(true);
  /* ---- state for search start ---- */
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([])
  /* ---- state for search  end ---- */

  useEffect(() => {
    fetch("/appData.json")
    .then((res) => res.json())
    .then((result) => {
        setShowAllData(result);
        setFilterData(result);
        setAnimatedLoading(false)
    })
    .catch((error) => {
        console.log("data is fetching", error);
        setAnimatedLoading(false)
    })
  }, []);


  /* ==== search functionality start ==== */
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);

    if (searchValue.trim() === "") {
      setFilterData(showAllData);
      setSuggestions([]);
      return;
    }

    const filtered = showAllData.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchValue)
        )
    })
    setFilterData(filtered);
    
    // try to give top 5 suggestions
    setSuggestions(filtered.slice(0, 5))
  }
  /* ==== search functionality end ==== */


  /* ==== suggestions functionality start ==== */
  const handleSelectSuggestion = (title) => {
    setSearch(title);

    const filterSuggestions = showAllData.filter((item) => {
        return(
            item.title.toLowerCase().includes(title.toLowerCase())
        )
    })
    setFilterData(filterSuggestions);
    setSuggestions([]);
  }
  /* ==== suggestions functionality end ==== */


 if(animatedLoading) {
    return (
        <div className="text-center py-10">
            <span className="loading loading-spinner text-primary scale-150"></span>
        </div>
    )
  }

  return (
    <div>
        <div className='flex items-center justify-between px-8 mt-4'> 
            <div>
                <h3 className='text-2xl md:text-3xl font-bold'>({filterData.length}) Apps Found</h3>
            </div>

            <div>
                <label className="input bg-transparent">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                    <ul className="absolute z-10  bg-gray-400 shadow-md rounded-lg mt-1 text-black max-h-56 overflow-y-auto">
                    {suggestions.map((item) => (
                        <li
                        key={item.id}
                        onClick={() => handleSelectSuggestion(item.title)}
                        className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                        >
                        {item.title}
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </div>

        <div className="showData grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 justify-items-center px-6">
            {
                filterData.map((item) => {
                    return(
                        <CardDesign1 
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            downloads={item.downloads}
                            ratingAvg={item.ratingAvg}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default AllAppsData