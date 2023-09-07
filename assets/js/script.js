/* Consegna:
Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto di un array di stringhe.

Bonus 0:
Non eramamo ancora a conoscenda di molti strumenti utili, come ad esempio le funzioni. É possibile fare refactoring del codice, pulendolo e creando quanche funzione che possa rendere tutto piú leggibile e pulito?

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?
 */


/* Define the slides list */
const slides = [
    {
        img: './assets/img/01.webp',
    },

    {
        img: './assets/img/02.webp',
    },

    {
        img: './assets/img/03.webp',
    },
    
    {
        img: './assets/img/04.webp',
    },
    
    {
        img: './assets/img/05.webp',
    }    
  ]
  
  let activeSlide = 0;
  
  // select the dom elements
  const sliderImagesEl = document.querySelector('.slider .images')
  const prevEl = document.querySelector('.prev')
  const nextEl = document.querySelector('.next')
  
  
  //console.log(sliderImagesEl);
  
  /* Print all images into the dom */
  // loop over the slides 
slides.forEach((element,index) => {
    const slidePath = element;
    console.log(slidePath);    

    // for each slide we create the markup
    const slideMarkup = `<img class="${activeSlide === index ? 'active' : '' }" src="${slidePath.img}" alt="">`
    //console.log(slideMarkup);
  
    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)
});
  
  
  /* 
  
  if(condition) {
    // code to run
  } else {
    // code to run
  }
  
  // terary operator
  
  condition ? 'code to run' : 'code to run'
  
  */
  
  
  /* 
  
  MILESTONE 3
  Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
  
  */
  
  const slidesImages = document.querySelectorAll('.slider .images > img')
  console.log(slidesImages);
  
  
  
  /* 
  BONUS 1:
  Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
  
  */
  
  /* 
  
  BONUS 2:
  Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, 
  come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. 
  Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
  
  */
  
  
  const thumbsElement = document.querySelector('.thumbnails')
/*   
  for (let i = 0; i < slides.length; i++) {
    const thumbPath = slides[i];
    const thumbMarkup = `<img class="${activeSlide === i ? 'active' : ''}" src="${thumbPath}" alt="">`
    //console.log(thumbMarkup);
  
    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
    
  } */

  slides.forEach((element,index) => {
    const thumbPath = element;
    console.log(thumbPath);    

    // for each slide we create the markup
    const thumbMarkup = `<img class="thumb ${activeSlide === index ? 'active' : '' }" src="${thumbPath.img}" alt="">`
    //console.log(slideMarkup);
  
    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
});
  
  



  
const autoNextPlay = setInterval(nextPlay, 3000);
  
  // intercept click on the next icon 
  //nextEl.addEventListener('click', nextPlay);

  function nextPlay() {  
      
      console.log('cliccato su next');
    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')
  
    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active')
  
    
    // activeSlide = 4
  
    if (activeSlide === slidesImages.length - 1) {
      activeSlide = 0
      // activeSlide = 5
    } else {
      // increment the activeSlide of 1
      activeSlide++
    }
  
  
    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')
  
  
    /* TODO */
  
  
    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')
  
  
  }
  
  // intercept click on the prev icon
  
  
  // activeSlide = 0
  prevEl.addEventListener('click', function () {
    console.log('cliccato su prev');
  
    clearInterval(autoNextPlay)
    
  
    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')





        // select the active thumb
        const currentThumb = document.querySelector('.thumbnails > img.active')
        console.log(currentThumb);
        // remove the active class from the active thumb
        currentThumb.classList.remove('active')

    




    
    if (activeSlide === 0) {
        activeSlide = slidesImages.length - 1
        // activeSlide = 5
    } else {
        // decrement the activeSlide of 1
        activeSlide--
    }
    
    
    console.log(activeSlide);
    
  
    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')





    



        // select the next thumb
        const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
        console.log(nextThumb);
        // add to the next thumb the active class
        nextThumb.classList.add('active')

  })