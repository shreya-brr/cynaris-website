const jobs = [
  {
    role: "Frontend Developer",
    location: "Remote",
    type: "Full-Time",
  },
  {
    role: "Backend Developer",
    location: "Bangalore",
    type: "Full-Time",
  },
  {
    role: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
  },
];

export default function CareersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">Careers at Cynaris</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Join a team where innovation, growth, and impact come together.
        </p>
      </section>

      {/* Culture */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Join Us?</h2>
        <p className="text-gray-600">
          At Cynaris Solutions, we believe our people are our greatest asset.
          We foster collaboration, continuous learning, and meaningful work.
        </p>
      </section>

      {/* Jobs */}
      <section className="max-w-5xl mx-auto px-6 pb-20 grid gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 flex justify-between items-center hover:shadow-md transition"
          >
            <div>
              <h3 className="text-xl font-semibold">{job.role}</h3>
              <p className="text-gray-500">
                {job.location} · {job.type}
              </p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Apply
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
