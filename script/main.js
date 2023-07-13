const toggleSidemenu = () => {
    const sidemenu = document.getElementsByClassName("sidemenu")[0];
    const button = document.getElementsByClassName("menu-button")[0];
    sidemenu.classList.toggle("sidemenu--active");
    button.classList.toggle("menu-button--active");
};

const loading = document.getElementsByClassName("loading")[0];
loading.classList.add("loading--in");
window.onload = () => {
    console.log(
        `%cCREATED AT\n%c        ____%c_   __%c_______    ____\n       /  _%c/ | / /%c  _/   |  / __ \\\n       / /%c/  |/ /%c/ // /| | / / / /\n     _/ /%c/ /|  /%c/ // ___ |/ /_/ /\n    /___%c/_/ |_/%c___/_/  |_/_____/  \n\n%c© mst-mkt, s-renren, and N0N0suke`,
        "font-size: 1.2em; font-style: italic; font-weight: bold;",
        "color: auto",
        "color: #3bafe6",
        "color: auto",
        "color: #3bafe6",
        "color: auto",
        "color: #3bafe6",
        "color: auto",
        "color: #3bafe6",
        "color: auto",
        "color: #3bafe6",
        "color: auto",
        "color: #3bafe6; font-style: italic; font-weight: bold;"
    );
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
    const scrollButton = document.getElementsByClassName("top-button")[0];
    const menuButton = document.getElementsByClassName("menu-button")[0];
    const footer = document.getElementsByTagName("footer")[0];
    console.log(footer);
    if (window.scrollY > 100) {
        scrollButton.classList.remove("top-button--disabled");
        scrollButton.style.bottom = `calc(${Math.max(
            window.innerHeight - footer.getBoundingClientRect().top,
            0
        )}px + 4vmin)`;
        console.log(footer.getBoundingClientRect().top);
        menuButton.classList.remove("menu-button--top");
    } else {
        scrollButton.classList.add("top-button--disabled");
        scrollButton.style.bottom = "-8vmin";
        menuButton.classList.add("menu-button--top");
    }
};
