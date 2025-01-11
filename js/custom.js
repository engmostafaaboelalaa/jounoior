const items = document.querySelectorAll('.container1 .header .nav-bar ul li a.list');
items.forEach(item => {
    item.addEventListener('click', (event) => {
        items.forEach(item => {
            item.classList.remove('active');
        })
        item.classList.add('active')
    });
});


const responsiveItems = document.querySelectorAll('.container1 .responsive-nav-bar li a.list');
responsiveItems.forEach(item => {
    item.addEventListener('click', (event) => {
        responsiveItems.forEach(item => {
            item.classList.remove('active');
        })
        item.classList.add('active')
    });
});


const burgerIcon = document.querySelector('.container1 .header .nav-bar ul.menu li .burger-icon img');
const mainMenu = document.querySelector('.container1 .responsive-nav-bar');
const body = document.querySelector("body");
body.addEventListener("click", (event) => {
    let menu = window.getComputedStyle(mainMenu);
    let rightMenu = menu.right;
    if (event.target === burgerIcon && rightMenu === "-310px") {
        mainMenu.style.right = "0px";
    }
    if (event.target !== mainMenu && rightMenu === "0px") {
        mainMenu.style.right = "-310px";
    }

})