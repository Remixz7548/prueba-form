//variables para abrir y cerrar menu
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

//Abrir
menuOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left="0";
});
//Cerrar
closeOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left="-100%";
});

//Abrir Submenu Producto
let productoArrow = document.querySelector(".producto-arrow");
productoArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show1");
});

//Abrir SubMenu de los submenu producto
let ProConArrow = document.querySelector(".ProCon-arrow");
ProConArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show2");
});
let ProComArrow = document.querySelector(".ProCom-arrow");
ProComArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show5");
});
let ProArrow = document.querySelector(".Pro-arrow");
ProArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show6");
});
let NubeArrow = document.querySelector(".Nube-arrow");
NubeArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show7");
});
let WopenArrow = document.querySelector(".Wopen-arrow");
WopenArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show8");
});

//Abrir Submenu Servicio
let servicioArrow = document.querySelector(".servicio-arrow");
servicioArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show4");
});
