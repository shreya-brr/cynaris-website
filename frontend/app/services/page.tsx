import { fetchAPI } from "@/lib/api";

type Service = {
  id: number;
  attributes: {
    title: string;
    description: string;
    icon: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

export default async function ServicesPage() {
  const res = await fetchAPI("/api/services?populate=*");
  const services: Service[] = res.data;

  return (
    <main className="px-8 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Our Services
      </h1>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <img
              src={`http://localhost:1337${service.attributes.icon.data.attributes.url}`}
              alt={service.attributes.title}
              className="w-12 h-12 mb-4"
            />

            <h2 className="text-xl font-semibold mb-2">
              {service.attributes.title}
            </h2>

            <div
              className="text-gray-600 text-sm"
              dangerouslySetInnerHTML={{
                __html: service.attributes.description,
              }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
