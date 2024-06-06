import { fetchData } from "./data.js";
import { renderSiteList, renderSiteDetails } from "./sites.js";
import { saveToLocalStorage, getFromLocalStorage } from "./store.js";
import { debounce } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const sitesList = document.getElementById("sites-list");
  const siteDetails = document.getElementById("site-details");

  const loadSites = async () => {
    try {
      const data = await fetchData();
      renderSiteList(data, sitesList);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Failed to load sites:", error);
    }
  };

  const handleSearch = debounce(async (event) => {
    const query = event.target.value.toLowerCase();
    try {
      const data = await fetchData();
      const filteredData = data.filter(site =>
        site.name.toLowerCase().includes(query) ||
        site.country.toLowerCase().includes(query),
      );
      renderSiteList(filteredData, sitesList);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Failed to filter sites:", error);
    }
  }, 300);

  searchInput.addEventListener("input", handleSearch);

  sitesList.addEventListener("click", async (event) => {
    if (event.target.classList.contains("site-card")) {
      const siteId = event.target.dataset.id;
      try {
        const data = await fetchData();
        const selectedSite = data.find((site) => site.id == siteId);
        renderSiteDetails(selectedSite, siteDetails);
        saveToLocalStorage("selectedSite", selectedSite);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Failed to load site details:", error);
      }
    }
  });

  // Load sites on page load
  loadSites();

  // Load saved site details if available
  const savedSite = getFromLocalStorage("selectedSite");
  if (savedSite) {
    renderSiteDetails(savedSite, siteDetails);
  }
});
