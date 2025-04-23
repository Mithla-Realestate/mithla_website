import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[url('/public/globe.svg')] bg-cover bg-center py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Find Your Dream Property in Pan India
        </h1>
        <p className="mt-4 text-xl text-white/90">
          Explore the best listings from homes to commercial spaces
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition">
          Browse Listings
        </button>
      </section>

      {/* Property Highlights */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Properties</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={`https://source.unsplash.com/featured/?house,realestate,${id}`}
                alt="Property"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Luxury Villa #{id}</h3>
                <p className="text-gray-600 mt-2">3 Bed • 2 Bath • 1800 sq ft</p>
                <p className="mt-3 font-bold text-yellow-600">₹ 75 Lakhs</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Invest in Mithila?</h2>
        <p className="mt-4 text-lg">Our agents are here to help you every step of the way</p>
        <button className="mt-6 px-8 py-3 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </main>
  );
}
