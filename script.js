let hamMenuIcon = document.getElementById("ham-menu");
let navbar = document.getElementById("nav-bar");
let navLinks = navbar.querySelectorAll("li");



hamMenuIcon.addEventListener("click", () =>
{
    navbar.classList.toggle("active");
hamMenuIcon.classList.toggle("fa-times");

}
);
navLinks.forEach((navLinks) => {
    

    navLinks.addEventListener("click", () =>
    {
        navbar.classList.remove("active");
        hamMenuIcon.classList.toggle("fa-times");

    });
    });


let header = document.querySelector('header')
window.onscroll =() =>{

    let pos =document.documentElement.scrollTop;
    if(pos > 0)
    {
        header.classList.add("sticky");
    }
    else
    {
        header.classList.remove("sticky");

    }
};