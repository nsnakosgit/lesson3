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
