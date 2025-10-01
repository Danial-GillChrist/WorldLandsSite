import { NavLink } from "react-router";
import FactsCards from "../components/FactsCards.tsx";

const Home = () => {
    return (
        <>
            <section className="bg-black text-white py-16">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">

                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Explore the World, One <br /> Country at a Time.
                        </h1>
                        <p className="text-gray-300 mb-8 max-w-lg">
                            Discover the history, culture, and beauty of every nation. Sort, search,
                            and filter through countries to find the details you need.
                        </p>
                        <NavLink to='/country'>
                            <button className="bg-white cursor-pointer text-black px-6 py-3 rounded-full font-medium flex 
                             items-center gap-2 mx-auto md:mx-0 hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out group"
                             >
                                Start Exploring
                                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </button>

                        </NavLink>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 mt-10 md:mt-0 flex justify-center">
                        <img
                            src="/assets/images/worldlandimg.png"
                            alt="World monuments"
                            className="max-w-full md:max-w-lg"
                        />
                    </div>
                </div>
            </section>

            {/* { About Section } */}

            <section className="bg-black text-white pt-20 pb-30">
                <div className="container mx-auto px-6 text-center">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">
                        Here are the Interesting Facts <br /> we’re proud of
                    </h2>

                    {/* Cards Grid */}
                    <div className="grid gap-8 md:grid-cols-3">

                        {/* Fact Cards */}
                        <FactsCards />

                    </div>
                </div>
            </section>
        </>

    )
}

export default Home;