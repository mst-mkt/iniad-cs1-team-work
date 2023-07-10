const loading = document.getElementsByClassName("loading")[0];
(() => {
    loading.classList.add("loading--in");
})();
window.onload = () => {
    setTimeout(() => {
        loading.classList.add("loading--outed");
        loading.classList.remove("loading--in");
    }, 1000);
};
