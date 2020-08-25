let mobile__menu_open = document.getElementById("mobile__menu_open_btn");
console.log(mobile__menu_open);



document.getElementById("mobile__menu_open_btn").onclick = function () {
    document.getElementById("mobile__menu_open_btn").classList.add("active");
    document.getElementById("mobile__menu").classList.add("active");
}

document.getElementById("mobile__menu_closed_btn").onclick = function (){
    document.getElementById("mobile__menu_open_btn").classList.remove("active");
    document.getElementById("mobile__menu").classList.remove("active");
}