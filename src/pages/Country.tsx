import { useEffect, useState, useTransition } from "react";
import { countryData } from "../Api";
import { Loader } from "../components/Loader/loader";
import CountryCard from "./CountryCard";
import SearchFilter from "./SearchFilter";

const Country = () => {
  const [country, setCountry]: any = useState([]);
  const [allCountries, setAllCountries]: any = useState([]); // master copy
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(true); // ✅ track initial load
  const [search, setSearch] = useState(""); 
  const [filter, setFilter] = useState("all");
  const [clearSer, setClear] = useState(false);

  useEffect(() => {
    startTransition(async () => {
      const res = await countryData();
      setCountry(res.data);
      setAllCountries(res.data);
      setLoading(false); // ✅ stop loader after data fetch
    });
  }, []);

  // ✅ Search + Filter logic
  const filteredCountries = country.filter((item: any) => {
    const matchesSearch =
      search === "" ||
      item.name.common.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || item.region.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  // ✅ Dynamic message
  const getNoResultMessage = () => {
    if (search && filter !== "all") {
      return `No countries found for "${search}" in ${
        filter[0].toUpperCase() + filter.slice(1)
      }.`;
    }
    if (search) {
      return `No countries found for "${search}".`;
    }
    if (filter !== "all") {
      return `No countries found in ${
        filter[0].toUpperCase() + filter.slice(1)
      }.`;
    }
    return "No countries found.";
  };

  const clearAll = () => {
    setSearch("");
    setClear(false);
    setFilter("all");
    setCountry(allCountries);
  };

  return (
    <>
      {/* ✅ Show loader while fetching */}
      {(isPending || loading) && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <Loader />
        </div>
      )}

      {/* ✅ Only render content when data is ready */}
      {!loading && (
        <>
         <section>
            <div className="container px-4">
              <SearchFilter
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
                country={country}
                setCountry={setCountry}
                allCountries={allCountries}
                clearSer={clearSer}
                setClear={setClear}
              />

            </div>
         </section>
         <section className="countrylist">

              <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((curCountry: any, index: number) => (
                    <CountryCard key={index} countryitem={curCountry} />
                  ))
                ) : (
                  // Tailwind modal
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md text-center">
                      <h2 className="text-xl font-semibold text-red-600 mb-3">
                        No Results Found
                      </h2>
                      <p className="text-gray-700">{getNoResultMessage()}</p>
                      <button
                        onClick={clearAll}
                        className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        Reset Search
                      </button>
                    </div>
                  </div>
                )}
              </div>
              </div>
         </section>
        </>
      )}
    </>
  );
};

export default Country;
