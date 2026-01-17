"use server"

export async function submitApplication(formData: FormData) {
  const rawData = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    resumeLink: formData.get("resumeLink"),
    jobTitle: formData.get("jobTitle"),
  };

  console.log("Sending to Strapi:", rawData);

  try {
    const response = await fetch(`http://127.0.0.1:1337/api/applications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: rawData }),
    });

    const result = await response.json();

    if (!response.ok) {
      // This will show you EXACTLY why Strapi is saying no
      console.error("Strapi Error Details:", result.error);
      return { success: false };
    }
    
    console.log("Success! Strapi ID:", result.data.id);
    return { success: true };
  } catch (error) {
    console.error("Connection Error:", error);
    return { success: false };
  }
}