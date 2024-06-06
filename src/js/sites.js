export const renderSiteList = (data, container) => {
  container.innerHTML = "";
  data.forEach((site) => {
    const siteCard = document.createElement("div");
    siteCard.className = "site-card";
    siteCard.dataset.id = site.id;
    siteCard.innerHTML = `
        <h3>${site.name}</h3>
        <p>${site.country}</p>
      `;
    container.appendChild(siteCard);
  });
};

export const renderSiteDetails = (site, container) => {
  container.innerHTML = `
      <h2>${site.name}</h2>
      <img src="${site.image}" alt="${site.name}">
      <p>${site.description}</p>
      <p><strong>Country:</strong> ${site.country}</p>
      <p><strong>Year Inscribed:</strong> ${site.year}</p>
    `;
};
