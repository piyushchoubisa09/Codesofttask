const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const mainMenu = document.querySelector(".mainMenu");

openMenu.addEventListener("click",show);
closeMenu.addEventListener("click",close);

function show(){

   mainMenu.style.display="flex" ;
   mainMenu.style.top='0';
   
}

function close(){
    mainMenu.style.top='-100%';
}