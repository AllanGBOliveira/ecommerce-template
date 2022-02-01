
export default (context, inject) => {

    inject('menuScroll', () => {
        window.addEventListener("scroll", function () {
            console.log("allan");
        });
    })
    inject('toggleSideBar', () => {
        let sideBarMenu = document.querySelector(".categories");
        let overlay = document.querySelector(".overlay");
        sideBarMenu.classList.toggle("active");
        overlay.classList.toggle("active");
    })
}