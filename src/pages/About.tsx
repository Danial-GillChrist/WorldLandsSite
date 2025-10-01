import FactsCards from "../components/FactsCards.tsx";

const About = () => {
    return (
        <section className="bg-black text-white py-20 pb-30">
            <div className="container mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Here are the Interesting Facts <br /> we’re proud of
                </h2>

                {/* Cards Grid */}
                <div className="grid gap-8 md:grid-cols-3">

                    {/* Each Cards */}
                    <FactsCards/>

                </div>
            </div>
        </section>
    )
}

export default About;