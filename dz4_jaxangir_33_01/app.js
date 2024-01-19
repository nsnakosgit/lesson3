
//persons json

const characterContainer = document.getElementById('character-container');

fetch('persons.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');

            const characterImage = document.createElement('img');
            characterImage.src = character.person_photo;
            characterImage.alt = character.name;

            const characterName = document.createElement('h2');
            characterName.textContent = character.name;

            characterCard.appendChild(characterImage);
            characterCard.appendChild(characterName);

            characterContainer.appendChild(characterCard);
        });
    })
    .catch(error => console.error('Ошибка при получении данных:', error));


//data json
const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(xhr.response);
    } else {
        console.error(`Request failed with status ${xhr.status}`);
    }
};