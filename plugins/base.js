
export default (context, inject) => {
    inject('mainHeight', () => {
        window.addEventListener("load", function () {
            let main = document.getElementById('wrapper'),
                headerHeight = document.getElementById('header').clientHeight,
                categoriesHeight = document.getElementById('categories').clientHeight,
                footerHeight = document.getElementById('footer').clientHeight,
                mainHeight = window.innerHeight - (headerHeight + footerHeight + categoriesHeight);
            main.style.minHeight = `${mainHeight}px`;
        });

    })

    inject('menuScroll', () => {
        window.addEventListener("scroll", function () {
            console.log("allan");
        });
    })
    inject('toggleSideBar', () => {
        // let sideBarMenu = document.querySelector(".categories");
        // let overlay = document.querySelector(".overlay");
        // sideBarMenu.classList.toggle("active");
        // overlay.classList.toggle("active");
    })
    inject('toggleOverlay', () => {
        let overlay = document.querySelector(".overlay");
        let categoriesMenu = document.querySelector(".categories-menu");
        overlay.classList.toggle("active");
        categoriesMenu.classList.toggle("active");
    })
    inject('toggleCategoriesMenu', () => {
        let categoriesMenu = document.querySelector(".categories-menu");
        let overlay = document.querySelector(".overlay");
        window.addEventListener("click", function (e) {
            if (e.target.matches(".all-categories")) {
                let overlay = document.querySelector(".overlay");
                let categoriesMenu = document.querySelector(".categories-menu");
                overlay.classList.toggle("active");
                categoriesMenu.classList.toggle("active");
            }
            else if (e.target.matches(".show.active")) {
                return;
            }
            else {
                overlay.classList.remove("active");
                categoriesMenu.classList.remove("active");
            }
        });
    })
}