const lists = document.querySelectorAll(".maincontainer aside .pages .links ul li.bg");
lists.forEach(list => {
    list.addEventListener("click", (event) => {
        lists.forEach(item => {
            item.classList.remove("active");
            list.classList.add("active")
        })
    })
});



const buttons = document.querySelectorAll(".maincontainer .content .container1 .maincourses .category .btn");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(button => {
            button.classList.remove("active");
            btn.classList.add("active");
        })
    })
});

const list = document.querySelector(".maincontainer aside");
const close = document.querySelector(".maincontainer aside .exit");
const maincontent = document.querySelector(".maincontainer .content");

close.addEventListener("click", () => {
    list.style.display = "none";
    maincontent.style.width = "100%";
})





console.log("hello mff")