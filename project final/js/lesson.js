//phone
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () =>{
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})


//tabContent


const tapContents = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent  =() =>{
    tapContents.forEach( (tabContent ) => {
        tabContent.style.display = 'none'
    })
    tabItems.forEach((tabItem) =>{
        tabItem.classList.remove( 'tab_content_item_active')
    })
}


const  showTabContent = (index = 0) =>{
    tapContents[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

let currentIndex = 0;

hideTabContent()
showTabContent(currentIndex)

const intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % tabItems.length;
    hideTabContent()
    showTabContent(currentIndex)
}, 3000);

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabItems.forEach((tabItem,tabIndex) =>{
            if (event.target === tabItem){
                currentIndex = tabIndex;
                hideTabContent()
                showTabContent(currentIndex)
            }
        })
    }
}
tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        setTimeout(() => {
            tabItems.forEach((tabItem,tabIndex) =>{
                if (event.target === tabItem){
                    currentIndex = tabIndex;
                    hideTabContent()
                    showTabContent(currentIndex)
                }
            })
        }, 3000);
    }
}




//conventer


const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

const converter = (element, targetElement, currentValue) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/currencies.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            switch (currentValue) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    targetElement.value = (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    break
                default:
                    break
            }
            element.value === '' && (targetElement.value = '')
        }
    }
}
converter(somInput, usdInput,  'som')
converter(usdInput, somInput, 'usd')
converter(somInput, eurInput, 'som')
converter(eurInput, somInput, 'eur')







const card = document.querySelector('#card');
let count = 1;

const cardFetcher = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        card.innerHTML =
            `<p>${data.title}</p>
      <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
      <span>${data.id}</span>`;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

document.getElementById('btnNext').onclick = () => {
    count++;
    if (count > 200) {
        count = 1;
    }
    cardFetcher(count);
};

document.getElementById('btnPrev').onclick = () => {
    count--;
    if (count < 1) {
        count = 200;
    }
    cardFetcher(count);
};

cardFetcher(count);


const citySearchInput = document.querySelector('.cityName')
const cityName = document.querySelector('.city')
const cityTemp = document.querySelector('.temp')
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
const APP_KAY = 'e417df62e04d3b1b111abeab19cea714'

const citySearch = () =>{
    citySearchInput.oninput = (event) =>{
        fetch(`${BASE_URL}?q=${event.target.value}&appid=${APP_KAY}`)
            .then(response => response.json())
            .then(data =>{
                cityName.innerHTML = data.name || 'город не найден ...'
                cityTemp.innerHTML = data.main?.temp?  Math.round(data.main?.temp -273) + '&deg;C' : '...'
            })
    }
}
citySearch()