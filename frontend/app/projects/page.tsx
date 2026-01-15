import Image from "next/image";

const projects = [
  {
    title: "Enterprise CRM Platform",
    description:
      "A scalable CRM solution enabling sales automation and analytics.",
    image: "/images/project-crm.jpg",
  },
  {
    title: "Cloud Migration System",
    description:
      "Migrated legacy infrastructure to cloud with zero downtime.",
    image: "/images/project-cloud.jpg",
  },
  {
    title: "AI Analytics Dashboard",
    description:
      "Real-time AI-powered insights for decision-making.",
    image: "/images/project-ai.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">Our Projects</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Delivering innovative digital products across industries.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:scale-105 transition"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={350}
              className="rounded-t-xl h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
