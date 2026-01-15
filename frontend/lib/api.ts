const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchAPI(endpoint: string) {
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_STRAPI_URL is undefined");
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  return res.json();
}
