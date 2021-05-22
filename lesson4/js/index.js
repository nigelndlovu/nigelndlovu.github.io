const datefield = document.querySelector("date");


const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);


datefield.innerHTML = `<em>${fulldate}</em>`;

const year = now.getFullYear();
document.querySelector('#getyear').textContent = year;


const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};