const API_URL = "http://localhost:1337/api";

/* ================= SERVICES ================= */
export async function fetchServices() {
  const res = await fetch(`${API_URL}/services?populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  const json = await res.json();
  return json.data;
}

/* ================= PROJECTS ================= */
export async function fetchProjects() {
  const res = await fetch(`${API_URL}/projects?populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const json = await res.json();
  return json.data;
}

/* ================= JOBS / CAREERS ================= */
export async function fetchJobs() {
  const res = await fetch("http://localhost:1337/api/jobs?populate=*", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const json = await res.json();
  return json.data;
}
