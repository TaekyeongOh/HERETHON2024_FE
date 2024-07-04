const cardContainer = document.getElementById('card-container');

function createCard(title, content1, content2) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const cardContent1 = document.createElement('p');
    cardContent1.textContent = content1;

    const cardContent2 = document.createElement('p');
    cardContent2.textContent = content2;

    card.appendChild(cardTitle);
    card.appendChild(cardContent1);
    card.appendChild(cardContent2);

    return card;
}

// Example usage
const card1 = createCard('Dynamic Cards 101', 'Learn how to spice up your web page with dynamic card rendering!', '이거너무 어렵다');
const card2 = createCard('The Power of Flexibility', 'Discover the endless possibilities of dynamic content.','쉽지않');
const card3 = createCard('T222he Power of Flexibility', 'Discover the endless possibilities of dynamic content.','쉽지않');

cardContainer.appendChild(card1);
cardContainer.appendChild(card2);
cardContainer.appendChild(card3);