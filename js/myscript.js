
const gameArray = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const imageList = document.querySelector('.image-list');

const rightImageList = document.querySelector('.right-image-list');


let imageSlideContent = "";

let imageSlideContentRight = "";

let imageArray = gameArray.forEach(elemento =>{
    
    const newImageWrap =`<div class="image-wrapper">
                            <img class="image" src="${elemento.image}">
                            <div class="description">
                                <h1>${elemento.title}</h1>
                                <p>${elemento.text}</p>
                            </div>
                        </div>`;

    imageSlideContent += newImageWrap;

    const newImageWrapRight =`<div class="right-image">
                                <img class="image" src="${elemento.image}">
                            </div>`;
                    
    imageSlideContentRight += newImageWrapRight;

});

imageList.innerHTML = imageSlideContent;

rightImageList.innerHTML = imageSlideContentRight;

const imageWrapDom = document.getElementsByClassName('image-wrapper');

const imageRightDom = document.getElementsByClassName('right-image');

let currentImage = 0;

imageWrapDom[currentImage].classList.add('block');

imageRightDom[currentImage].classList.add('brightness-border')

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

cicleInvers = setInterval(cicleInfiniteInverse,3000);
clearInterval(cicleInvers);

let cicle = setInterval(cicleInfinite,3000);
let clockwise = true;

const playStop = document.getElementById('play-stop');
let isRunning = true;

const reverse = document.getElementById('reverse');


nextDom.addEventListener('click',cicleInfinite);

prevDom.addEventListener('click',cicleInfiniteInverse);

for(let i=0;i<gameArray.length ; i++){
    imageRightDom[i].addEventListener('click',function(){

        removeImage();
           
        imageWrapDom[i].classList.add('block');
        imageRightDom[i].classList.add('brightness-border');
        currentImage = i;
        
    })

}
/******************************
 * sezione cicli 
********************************/


function cicleInfinite(){
    
    removeImage();
    ifElseTopBotton();
    addImage();

}

function cicleInfiniteInverse(){
    
    removeImage();
    ifElseBottonTop();
    addImage();

}

/********************************************
 * funzione di if e else su current image
*********************************************/
function ifElseTopBotton(){
    if(currentImage < imageWrapDom.length - 1 ){
        currentImage++;
        
    }else if(currentImage == imageWrapDom.length - 1 ){
        currentImage = 0;
    }
}

function ifElseBottonTop(){
    if(currentImage > 0 ){
        currentImage--;

    }else if(currentImage == 0){
        currentImage = imageWrapDom.length - 1 ;
    }
}
/******************************
 * funzione aggiungi e rimuovi
********************************/

function addImage(){
    imageWrapDom[currentImage].classList.add('block');
    imageRightDom[currentImage].classList.add('brightness-border');
}

function removeImage(){
    imageWrapDom[currentImage].classList.remove('block');
    imageRightDom[currentImage].classList.remove('brightness-border');
}

/******************************
sezione pulsanti
********************************/

playStop.addEventListener('click',function(){
    if(isRunning==true){
        clearInterval(cicle);
        clearInterval(cicleInvers);
        isRunning=false;
    }else{
        cicle= setInterval(cicleInfinite,3000);
        isRunning=true;
    }
});

reverse.addEventListener('click',function(){
    
    if(clockwise==true){
        clearInterval(cicle);
        cicleInvers = setInterval(cicleInfiniteInverse,3000);
        clockwise=false;
    }else{
        clearInterval(cicleInvers);
        cicle= setInterval(cicleInfinite,3000);
        clockwise=true;
    }
});
