const wrapper = document.querySelector('.participants__wrapper');
const prevBtn = document.querySelector('.participants__sliderPrev');
const nextBtn = document.querySelector('.participants__sliderNext');
const currentSlide = document.querySelector('.participants__currentSlide');

let intervalId;
let slideIndex = 0;

function counterSlide() {
    let counter;
    if (window.innerWidth >= 1024) {
        counter = 3 + slideIndex;
    } else {
        counter = 1 + slideIndex;
    }
    currentSlide.innerText = counter;
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex = (slideIndex === 0) ? 3 : slideIndex - 1;
    toggleButtons();
    moveSlider();
    counterSlide();
    startInterval();
}

function nextSlide() {
    clearInterval(intervalId);
    if (window.innerWidth >= 1024) {
        slideIndex = (slideIndex === 3) ? 0 : slideIndex + 1;
    } else {
        slideIndex = (slideIndex === 5) ? 0 : slideIndex + 1;
    }
    
    toggleButtons();
    moveSlider();
    counterSlide();
    startInterval();
}

function toggleButtons() {
    prevBtn.disabled = (slideIndex === 0);
    if (window.innerWidth >= 1024) {
        nextBtn.disabled = (slideIndex === 3);
    } else {
        nextBtn.disabled = (slideIndex === 5);
    }
    
    checkButtonState();
}

function checkButtonState() {
    prevBtn.style.backgroundColor = (prevBtn.disabled) ? '#d6d6d6' : '';
    nextBtn.style.backgroundColor = (nextBtn.disabled) ? '#d6d6d6' : '';
}

function moveSlider() {
    const slideWidth = (wrapper.clientWidth + additionalWidth) / 6;
    wrapper.style.transition = 'transform 0.5s ease';
    wrapper.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

function startInterval() {
    intervalId = setInterval(nextSlide, 4000);
}

function handleResize() {
    clearInterval(intervalId);
    moveSlider();
    counterSlide();
    startInterval();
}

function recalculateAdditionalWidth() {
    if (window.innerWidth <= 375) {
        additionalWidth = 20;
    } else {
        additionalWidth = 0;
    }
}
recalculateAdditionalWidth();

window.addEventListener('resize', handleResize);
window.addEventListener('resize', recalculateAdditionalWidth);

counterSlide(); 
toggleButtons();
startInterval();
