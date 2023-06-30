const toggleSidemenu = () => {
    const sidemenu = document.getElementsByClassName('sidemenu')[0];
    sidemenu.classList.toggle('sidemenu--active');
}

const moveSidemenu = () => {
    const slideshow = document.getElementsByClassName('slideshow')[0];
    const width = slideshow.offsetWidth;
}