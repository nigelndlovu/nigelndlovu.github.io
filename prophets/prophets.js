const requestURL = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let deathDate = document.createElement('death');
    let order = ``;

    // set class attribute to the container
    card.classList.add('cards');
    portrait.classList.add('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.innerHTML = `${prophet.name} <span class="highlight">${prophet.lastname}</span>`;
    birthDate.innerHTML = `Date of birth: ${prophet.birthdate}`;
    birthPlace.innerHTML = `Place of birth: ${prophet.birthplace}`;
    deathDate.innerHTML = `Date of death: ${prophet.death}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute(
        'alt', 
        `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`
    );
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(deathDate);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}