// Получаем ссылку на контейнер карусели и на блоки div внутри и кнопки
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel .slide');
const btnL = document.querySelector('#left');
const btnR = document.querySelector('#right');


const blocks = document.querySelectorAll('.main-container .item'); //Список главных блоков с изображениями
// console.log(window.screen.width)

// Прокрутка слайдера
// Получаем ширину одного слайда
const slideWidth = slides[0].offsetWidth;
// console.log(blocks)

// Копируем первый слайд и добавляем его в конец карусели
const firstSlideClone = slides[0].cloneNode(true);
carousel.appendChild(firstSlideClone);

let position = 0; // Изначальная позиция карусели

btnR.addEventListener('click',() => {
    position++;
    moveCaruselR();
})

btnL.addEventListener('click',() => {
    position--;    
    moveCaruselL();
})


// Разворот блока
slides.forEach((item) => {
    // console.log(item)
})

window.onclick = function(e){
    let el = e.target;
    if(el.hasAttribute('data-myAttri') && el.parentNode.classList.contains("slide-item")){
        let newArr = Array.from(blocks)
        let mainImg = newArr.find((block) => block.classList.contains(el.getAttribute('data-myAttri')))

        newArr.map(z => z.style['z-index'] = '0');
        mainImg.style['z-index'] = '1';

        // Анимация на картинку
        mainImg.children[0].classList.add('item-anim');
        setTimeout(() => {mainImg.children[0].classList.remove('item-anim')},2000)

        // Аимация на текст
        mainImg.children[1].classList.add('content-anim');
        setTimeout(() => {mainImg.children[1].classList.remove('content-anim')},2000)    
        
        // Сдвиг карусели влево
        position++;
        moveCaruselR()
    }
}
if(window.screen.width <= 600){
    carousel.style.transform = `translateX(0)`;
}
// window.addEventListener('resize', function(event) {
//     if(event.target.screen.width <=600){
//         // carousel.style.transition = '1s ease';
//         carousel.style.transform = `translateX(0)`;
//         // location.reload();

//     }
//     // console.log(event.target.screen.width)
// }, true);

/**
 * Изменение положения карусели влево
 */
function moveCaruselL (){
    carousel.style.transition = '1s ease';
    carousel.style.transform = `translateX(${(window.screen.width >= 600) ? -50*position : -100*position}%)`;
    if(position < 0){
        position = slides.length - 1;
        // carousel.style.transition = '-1s ease';
        carousel.style.transform = `translateX(${(window.screen.width >= 600) ? -50*position : -100*position}%)`;
    }
}

/**
 * Изменение положения карусели вправо
 */
function moveCaruselR (){
    carousel.style.transition = '1s ease';
    carousel.style.transform = `translateX(${(window.screen.width >= 600) ? -50*position : -100*position}%)`;
    if(position >= slides.length){
        position = 0;
        // carousel.style.transition = '-1s ease';
        carousel.style.transform = `translateX(${(window.screen.width >= 600) ? -50*position : -100*position}%)`;
    }
}
