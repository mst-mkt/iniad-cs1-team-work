const toggleSidemenu = () => {
    const sidemenu = document.getElementsByClassName("sidemenu")[0];
    sidemenu.classList.toggle("sidemenu--active");
};

const slideShow = document.getElementsByClassName("slideshow__container")[0];

const setSlideDot = () => {
    const width = slideShow.offsetWidth;
    const scroll = slideShow.scrollLeft;
    const index = Math.round(scroll / width);
    const slideDots = document.getElementsByClassName("slideshow__dot");
    Array.from(slideDots).map((dot) =>
        dot.classList.remove("slideshow__dot--active")
    );
    slideDots[index].classList.add("slideshow__dot--active");
};

const slideRight = () => {
    const width = slideShow.offsetWidth;
    const scroll = slideShow.scrollLeft;
    const maxScroll = slideShow.scrollWidth - width;
    if (scroll >= maxScroll - 5) {
        slideShow.scrollLeft = 0;
    } else {
        slideShow.scrollLeft += width;
    }
};

const slideLeft = () => {
    const width = slideShow.offsetWidth;
    const scroll = slideShow.scrollLeft;
    const maxScroll = slideShow.scrollWidth - width;
    if (scroll === 0) {
        slideShow.scrollLeft = maxScroll;
    } else {
        slideShow.scrollLeft -= width;
    }
};

let autoSlide = setInterval(slideRight, 3000);
const resetAutoSlide = () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(slideRight, 3000);
};

slideShow.addEventListener("scroll", setSlideDot);
