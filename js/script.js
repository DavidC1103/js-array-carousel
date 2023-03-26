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
let imageCount = 0




//creiamo un ciclo per stampare le imagini in html
for(let i = 0; i < images.length; i++){
    //salviamo il ciclo in una const
    const imgSlide = images[i]
    //stampiamo in html
    itemsWrap.innerHTML += `
    <img class="item hide" src="${imgSlide}">
    `   
}




//seleziono tutte le immagini con la classe 'hide'
const items = document.getElementsByClassName('item')
//tolgo la classe hide alla prima immagine
items[imageCount].classList.remove('hide')

//nascondiamo il bottono pre 
btnPre.classList.add('hide')

btnNext.addEventListener('click', function(){
    items[imageCount].classList.add('hide')
//incrementiamo il contatore
    imageCount++;
    items[imageCount].classList.remove('hide')

    btnPre.classList.remove('hide')

//se il bottone next è sull' ultima immagine viene rimosso
    if(imageCount === images.length - 1 ){
        btnNext.classList.add('hide')
    }
})

btnPre.addEventListener('click', function(){
    items[imageCount].classList.add('hide')
    //decrementiamo il contatore
    imageCount--;
    items[imageCount].classList.remove('hide')


//se il bottone pre è sulla prima immagine viene rimosso
    if(imageCount === 0 ){
        btnPre.classList.add('hide')
    }
})

