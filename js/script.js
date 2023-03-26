//creiamo un'array con tutte le immagini
const images = [
    'assets-slider/img/img1.jpg',
    'assets-slider/img/img2.jpg',
    'assets-slider/img/img3.jpg',
    'assets-slider/img/img4.jpg',
    'assets-slider/img/img5.jpg',
]



//prendiamo il contenitore dove inserire le immagini
const itemsWrap = document.querySelector('.items-wrapper')

//creiamo un ciclo per stampare le imagini in html
for(let i = 0; i < images.length; i++){
//salviamo il ciclo in una const
    const imgSlide = images[i]
    console.log(imgSlide);
//stampiamo in html
itemsWrap.innerHTML += `
<img class="hide" src="${imgSlide}">
`   
}

//creiamo un contatore per le immagini
let imageCount = 0

//seleziono tutte le immagini con la classe 'hide'
const noHide = document.getElementsByClassName('hide')
console.log(noHide)
//tolgo la classe hide a tutte le immagini
noHide[imageCount].classList.remove('hide')

