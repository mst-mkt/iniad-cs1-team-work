const toggleSidemenu = () => {
    const sidemenu = document.getElementsByClassName("sidemenu")[0];
    const button = document.getElementsByClassName("header__button")[0];
    sidemenu.classList.toggle("sidemenu--active");
    button.classList.toggle("header__button--active");
};

const loading = document.getElementsByClassName("loading")[0];
loading.classList.add("loading--in");
window.onload = () => {
    setTimeout(() => {
        loading.classList.add("loading--outed");
        loading.classList.remove("loading--in");
    }, 1000);
};

const scrollUp = () => {
    const html = document.getElementsByTagName("html")[0];
    html.scrollTop = 0;
};

const displayScrollButton = () => {
    console.log("scroll");
    const button = document.getElementsByClassName("top-button")[0];
    if (window.scrollY > 100) {
        button.classList.remove("top-button--disabled");
    } else {
        button.classList.add("top-button--disabled");
    }
};
