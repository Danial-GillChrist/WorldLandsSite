import { NavLink } from "react-router";

const CountryCard = ({ countryitem }) => {
  const { flags, name, population, region, capital } = countryitem;

  return (
    <div className="bg-gray-900 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all">
      {/* Flag */}
      <img
        src={flags.svg}
        alt={flags.alt || name.common}
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-white mb-2">
          {name.common}
        </h2>

        <p className="text-sm text-white mb-1">
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p className="text-sm text-white mb-1">
          <span className="font-semibold">Population:</span>{" "}
          {population.toLocaleString()}
        </p>
        <p className="text-sm text-white mb-3">
          <span className="font-semibold">Capital:</span>{" "}
          {capital?.[0] || "N/A"}
        </p>

        <NavLink to={`/country/${name.common}`}>
         <button className="w-full cursor-pointer bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Read More
         </button>
         </NavLink>
      </div>
    </div>
  );
};

export default CountryCard;
