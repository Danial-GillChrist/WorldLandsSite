import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router";
import { Loader } from "../components/Loader/loader";
import { countryIndData } from "../Api";

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [CountryInd, setIndCountry]: any = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await countryIndData(params.id);
      if (res.status === 200) {
         setIndCountry(res.data[0]);
      }
      console.log("My data", res.data);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      {isPending && <Loader />}
      
      {CountryInd && (
        <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
          {/* Left: Flag */}
          <div className="md:w-1/2 w-full">
            <img
              src={CountryInd.flags.svg}
              alt={CountryInd.flags.alt || CountryInd.name.common}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Details */}
          <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              {CountryInd.name.common}
            </h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Official Name:</span>{" "}
              {CountryInd.name.official}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Region:</span> {CountryInd.region}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Population:</span>{" "}
              {CountryInd.population.toLocaleString()}
            </p>
             <p className="text-gray-600 mb-2">
              <span className="font-semibold">Domain:</span>{" "}
              {CountryInd.tld[0]}
            </p>
             <p className="text-gray-600 mb-2">
              <span className="font-semibold">Languages:</span>{" "}
               {Object.keys(CountryInd.languages)
               .map((key)=> CountryInd.languages[key])
               .join(', ')
               }
            </p>
              <p className="text-gray-600 mb-2">
              <span className="font-semibold">Currencies:</span>{" "}
               {Object.keys(CountryInd.currencies)
               .map((key)=> CountryInd.currencies[key].name)
               .join(', ')
               }
            </p>
            
          </div>
        </div>
      )}

      <NavLink to='/country'>
         <button className="mt-12 cursor-pointer px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-sm">
           Go Back
         </button>
      </NavLink>
    </div>
  );
};

export default CountryDetails;
