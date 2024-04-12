const wrapperStages = document.querySelector('.stagesVasyukovs__stageWrapper');
const prevBtnStages = document.querySelector('.stagesVasyukovs__prevBtn');
const nextBtnStages = document.querySelector('.stagesVasyukovs__nextBtn');
const indicators = document.querySelectorAll('.stagesVasyukovs__indicator');
let slideIndexStages = 0;


updateSlider();


function prevStageSlide() {
    slideIndexStages = (slideIndexStages - 1 + wrapperStages.children.length) % wrapperStages.children.length;
    updateSlider();
}


function nextStageSlide() {
    slideIndexStages = (slideIndexStages + 1) % wrapperStages.children.length;
    updateSlider();
}


function updateSlider() {
    const slideWidth = (wrapperStages.clientWidth + 40)/ 5;
    wrapperStages.style.transition = 'transform 0.5s ease';
    wrapperStages.style.transform = `translateX(-${slideWidth * slideIndexStages}px)`;

    prevBtnStages.disabled = (slideIndexStages === 0);
    nextBtnStages.disabled = (slideIndexStages === wrapperStages.children.length - 1);

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('stagesVasyukovs__indicator_active', index === slideIndexStages);
    });
}