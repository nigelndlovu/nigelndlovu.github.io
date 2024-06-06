export const fetchData = async () => {
  try {
    const response = await fetch("./data/sites.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // Ensure the 'sites' property exists in the response
    if (!data || !data.sites || !Array.isArray(data.sites)) {
      throw new Error("Invalid data format");
    }
    return data.sites;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to fetch data:", error);
    return [];
  }
};
