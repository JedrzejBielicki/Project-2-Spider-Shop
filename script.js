function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateX(${distance * speed}px)`;
}
window.addEventListener("scroll", function () {
    parallax(".first", window.scrollY, 1);
    parallax(".second", window.scrollY, 0.6);
    parallax(".third", window.scrollY, 0.8);
    parallax(".fourth", window.scrollY, 0.7);
})

let hero = document.querySelector(".hero");
let header = document.querySelector(".header");
let height = hero.clientHeight;



document.addEventListener('scroll', function (){
    if(scrollY > height){
        header.classList.add('header-none');  
    }
    else{
        header.classList.remove('header-none');
    }
})
