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

//prendiamo i bottoni in html
const btnNext = document.querySelector('.next')
const btnPre = document.querySelector('.pre')
//creiamo un contatore per le immagini
let imageCount = 4
console.log(imageCount);

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



//seleziono tutte le immagini con la classe 'hide'
const noHide = document.getElementsByClassName('hide')
console.log(noHide)
//tolgo la classe hide a tutte le immagini
noHide[imageCount].classList.remove('hide')



//aggiungiamo le function ai bottoni
btnNext.addEventListener('click', function(){
    noHide[imageCount].classList.add('hide')
    console.log(btnNext);
    //incrementiamo il contatore delle immagini
    imageCount++;   
    console.log(imageCount);
})

btnNext.addEventListener('click', function(){
    noHide[imageCount].classList.add('hide')
    //decrementiamo il contatore delle immagini
    imageCount--;   
    noHide[imageCount].classList.remove('hide')
})