/* window.addEventListener('scroll', function () {
    console.log('Scrolling...')
}) */
var scroll = window.requestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60)
};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('isVisible')
        } else {
            element.classList.remove('isVisible')
        }
    });
    scroll(loop)
}
loop();

function isElementInViewport(elm) {

}

function requestAnimationFrame() {

}