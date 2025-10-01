import { MdClose } from "react-icons/md";

const SearchFilter = ({ search, setSearch, filter, setFilter, country, setCountry, allCountries, clearSer, setClear }) => {

  const searchChange = (e:any) => {
    const valueData = e.target.value;
    setSearch(valueData);

    if (valueData.length > 0) {
      setClear(true);
    } else {
      setClear(false);
    }
  };

  const clearsearchdata = () => {
    setSearch("");
    setClear(false); // always hide clear button after clearing
  };


  const clearAll = () => {
    setSearch("");
    setClear(false); // always hide clear button after clearing
    setFilter("all");
    setCountry(allCountries);
  }


  const sortmetnhods = (value:string) => {
     const sortcountry = [...country].sort((a, b) => {
       return value === "asc" ? 
        a.name.common.localeCompare(b.name.common) 
        : b.name.common.localeCompare(a.name.common) 
     })
     setCountry(sortcountry);
  }
  
  return (
    <section className="w-full bg-gray-100 py-4 px-6 rounded-lg shadow-md">
      <div className="flex justify-between flex-col md:flex-row items-center gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={searchChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
           {clearSer && (
              <button
                onClick={clearsearchdata}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                >
                <MdClose />
            </button> 
           )}
        </div>

        <div className="flex gap-2">
        {/* Filter Dropdown */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
            <option value="all">All</option>
             {
                [...new Set(country.map(item => item.region))]
                .sort()
                .map(region => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))
              }
           </select>
        {/* Sort Buttons */}
        <div className="flex gap-2">
          <button 
           onClick={()=>sortmetnhods("asc")}
           className="px-4 py-2 cursor-pointer bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-sm">
            ASC
          </button>
          <button 
           onClick={()=>sortmetnhods("des")}
           className="px-4 py-2 cursor-pointer bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-sm">
            DEC
          </button>
        </div>

            <button 
              onClick={clearAll}
              className="px-4 py-2 cursor-pointer bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-sm">
                Clear All
            </button>
          </div>

      </div>
    </section>
  );
};

export default SearchFilter;
