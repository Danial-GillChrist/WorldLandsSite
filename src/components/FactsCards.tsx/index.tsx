import factsData from "../../Api/FactsApi/factsData.json";

const FactsCards = () => {
  return (
    <>
      {factsData.map((item) => {
        const { id, title, capital, population, fact } = item;
        return (
          <div
            key={id}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 rounded-2xl shadow-lg text-left hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-sm mb-1">
              <span className="font-medium text-gray-400">Capital:</span> {capital}
            </p>
            <p className="text-sm mb-1">
              <span className="font-medium text-gray-400">Population:</span> {population}
            </p>
            <p className="text-sm">
              <span className="font-medium text-gray-400">Interesting Fact:</span> {fact}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default FactsCards;
