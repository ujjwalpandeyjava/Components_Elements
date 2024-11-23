/* window.addEventListener('scroll', function () {
    console.log('Scrolling...')
}) */

//runn it.

function loop() {
    document.querySelectorAll(".show-on-scroll").forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add("isVisible");
      } else {
        element.classList.remove("isVisible");
      }
    });
    scroll(loop)//scroll function works when page scrolls.
};

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    //rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
loop();