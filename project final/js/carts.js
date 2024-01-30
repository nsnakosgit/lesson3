const cardsContainer = document.querySelector('#cards-container');

const renderCard = (image, title, description) => {
    const card = `
    <div class="card">
      <img src="${image}" alt="Card Image" />
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
  `;
    cardsContainer.insertAdjacentHTML('beforeend', card);
};

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');
        const data = await response.json();

        data.forEach((item) => {
            const image = '../images/jupiter.png';
            renderCard(image, item.title, item.body);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();