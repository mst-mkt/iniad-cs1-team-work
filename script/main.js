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
