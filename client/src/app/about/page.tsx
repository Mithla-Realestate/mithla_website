import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fffef9] via-[#fdf7ee] to-[#f8efe4] text-gray-800 font-sans">
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-10xl font-extrabold text-gray-700">
            The Mithila Real Estate & Engineering Consultant
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium text-gray-600">
            Pioneering Excellence in Architecture & Engineering
          </p>
        </div>

        <div className="space-y-12 text-lg leading-relaxed text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-600 mb-2">
              Founder & CEO: Er. Rahul Kumar
            </h2>
            <p>
              Er. Rahul Kumar is a visionary civil engineer and the dynamic founder of Mithila Real Estate & Engineering Consultant. With years of experience in architecture, real estate, and engineering consulting, he has earned respect for delivering quality and innovation in both residential and commercial development.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              🎖️ Notable Achievements
            </h3>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>President's Award:</strong> Honored by the President of India for outstanding service in the Scout movement.
              </li>
              <li>
                <strong>INSPIRE Award in Science and Technology:</strong> Celebrated for his innovative contributions in STEM education.
              </li>
              <li>
                <strong>RERA & Financial Consulting Expertise:</strong> Renowned for sound advice and transparent processes in real estate transactions.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              🏗️ Vision & Commitment
            </h3>
            <p>
              Er. Rahul Kumar leads with a mission: to deliver intelligent, sustainable, and beautifully designed spaces tailored to each client's needs.
            </p>
          </section>

          <section className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md text-center border border-indigo-100">
            <p className="text-lg font-medium text-gray-700 mb-3">
              Whether you're planning, designing, or building your dream—Mithila Real Estate is your trusted guide.
            </p>
            <p className="text-gray-700 font-semibold">
              Let's build the future, together.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
