document.querySelector("#lastmod").textContent = document.lastModified;

let date = new Date();
let year = date.getFullYear();
document.querySelector("#getyear").textContent = year;