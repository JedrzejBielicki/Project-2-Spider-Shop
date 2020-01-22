function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateX(${distance * speed}px)`;
}
window.addEventListener("scroll", function () {
    parallax(".first", window.scrollY, 1);
    parallax(".second", window.scrollY, 0.9);
    parallax(".third", window.scrollY, 0.8);
    parallax(".fourth", window.scrollY, 0.7);
})