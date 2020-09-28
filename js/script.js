/*let mobile__menu_open = document.getElementById("mobile__menu_open_btn");
console.log(mobile__menu_open);



document.getElementById("mobile__menu_open_btn").onclick = function () {
    document.getElementById("mobile__menu_open_btn").classList.toggle("active");
    document.getElementById("mobile__menu").classList.toggle("active");
}
*/
/*document.getElementById("mobile__menu_closed_btn").onclick = function (){
    document.getElementById("mobile__menu_open_btn").classList.remove("active");
    document.getElementById("mobile__menu").classList.remove("active");
}*/

//var a;
//let b;
//console.log(a);
//console.log(b);
//a=1;
//b=2;
//let a = 1;
//let b = 9%3;
//console.log(a);
//console.log(b);
//let a = "1";
//let b = 2;
//let c = a /b;
/*let x = 1 + "2";
console.log(a);
console.log(b);
console.log(c);

a = "1";
a = '1';
a = `1+3`;
console.log(a);

let a = undefined;
let b = false;
console.log(a);*/

// //let a = Infinity; /* бесконечность */
// let a = "22Hello";
// let b = 2;
//  let c = a / b;
// console.log(typeof c);
// c = `b = ${a+b}`;
// console.log(c);
//
// console.log(typeof c);
//
// let product = {
//  name: "mobile",
//  height: 10,
//  width: 5,
//  weight: 50,
//  price: 10000,
//  GB: 256,
//  is_availability: true
// }
//
// let build = ["цемент","кирпич","штукатурка","щебень"];
// console.log(build);
// console.log(build[0]);
// console.log(build[1]);
// console.log(build[2]);
// console.log(build[3]);
// console.log(build.length);
//
// let a = document.querySelector(".container");
// // console.log(a[1]);
// a.classList.add("my_class");
// a.style.color ="green";
// a.style.textAlign = "center";
// a.style.backgroundColor = "yellow";
// console.log(a);
//
// a.classList.remove(".container");
// console.log(a);
//

//let a = document.querySelector(".container").firstChild;
// let a = document.querySelector("body").childNodes[1];
// console.log(a);
//
// let b = document.querySelector("*");
// console.log(b);
//
// let c = document.getElementById('container_1');
// console.log(c);
//
// let d = document.getElementsByTagName("div");
// console.log(d);
//
// let e = document.getElementById("container_1").innerText;
// let f = document.getElementById("container_1");
//
// console.log(e);
//
// f.innerText = "Hello word!";
// let g = f;
// console.log(f);
//
// let h  = document.getElementById("container_1").innerHTML;
// console.log(h);
// console.log(product);
// console.log(product.name);
// console.log(product.height);
// console.log(product.weight);
// console.log(product.width);
// console.log(product.price);
// console.log(product.GB);

// console.log(product.is_availability);
// найти максимально возможное количество способов получить єлемент на странице


// function MyFunction () {
//     console.log ("Hello!");
// }

// MyFunction();
// let c = 20;
// function maths (a,b, c) {
//     let result = a/b +c;
//     console.log(result);
// }

// maths (5, 8, c);
// maths(12.5, 4, c);
// maths(-7,8, c);
// maths(Number("8"),17, c);
// maths(21,"3", c);
// maths(21,"7", 10);

// function maths (a,b) {
//     return a+b;
// }

// let sum = maths (8,9);
// console.log(sum);

// let a  =document.getElementById("container_1") ;
// console.log(a);
//
// a.onclick = function () {
//     console.log("123");
// }
//
// a.mouseclick =  function () {
//     console.log("589");
// }
//создать массив из трех элементов по клику на блоке на странице . в конце массива добавить 4-й элемент
//по клику на втором блоке из массива удалить первый элемент
//по клику на третьем блоке вывести массив  в alert
// по клику на четвертом блоке вывести массив на странице

/*let fruits = ["apple","orange","plum"];

let a  = document.getElementById("container_1") ;
let b = document.getElementById("container_2") ;
let c = document.getElementById("container_3") ;
let d = document.getElementById("container_4") ;

a.onclick = function () {
    fruits.push("melon");
    console.log(fruits);
}

b.onclick = function () {
    fruits.shift();
    console.log(fruits);
}

c.onclick = function () {
    alert(fruits);
}
d.onclick = function () {
    let elem = document.querySelector("#container");
    let newElem = document.createElement("div");
   // newElem.classList.add("div");
    newElem.classList.add("mas");
    newElem.innerText = fruits;
   // document.body.append(newElem);
    //document.body.after(newElem);
    elem.appendChild(newElem);
    console.log(newElem);
    console.log(newElem.innerText);
} */
//document.getElementById("container_1").onclick = function () {
  /*  document.querySelector("#container_1").onclick = function () {
        console.log(document.getElementById("container_1"));
    document.querySelector("#container_1").classList.toggle("blue");
        document.querySelector("#container_1").style.backgroundColor = "blue";
    }
*/
/*document.querySelector("#container_1").oncontextmenu  = function () {
    console.log(document.getElementById("container_1"));
    document.querySelector("#container_1").classList.toggle("blue");
   // document.querySelector("#container_1").style.backgroundColor = "blue";
}*/
/*function fun () {
        console.log(document.getElementById("container_1"));
        document.querySelector("#container_1").classList.toggle("blue");
        //document.querySelector("#container_1").style.backgroundColor = "blue";
}

document.querySelector("#container_2").onmouseover  = function () {
    console.log(document.getElementById("container_2"));
    document.querySelector("#container_2").classList.add("blue");
document.querySelector("#container_2").style.backgroundColor = "green";
}
document.querySelector("#container_2").onmouseout  = function () {
    console.log(document.getElementById("container_2"));
    document.querySelector("#container_2").classList.remove("blue");
document.querySelector("#container_2").style.backgroundColor = "blue";
}

document.querySelector("#container_3").onmousemove = function () {
    console.log(document.getElementById("container_3"));
    document.querySelector("#container_3").classList.toggle("blue");
}
*/
//сделать поле  форму из трех єлеиентов с  input + кнопка button тип submit
// при нажатии на нопку вівести в консоль значениу  input
// при focus, когда в инпут текст - менять цвет рамки инпута
//написать функцию, которая в консоли будет віводить значение клавиши, нгажтой на клавиатуре
/*let message = document.querySelector('.message');
let form = document.querySelector('.subscription');
let  passport = document.querySelector('#passport');
let tel = document.querySelector('#tel');
let email = document.querySelector('#email');
let url = document.querySelector('#url');

form.onsubmit = function(evt) {
    evt.preventDefault();
    message.textContent = "заявка принята "+passport.value+" "+tel.value+" "+email.value+" "+url.value;
    console.log(message.textContent);
};

document.addEventListener('keydown', function () {
    console.log(event.key);
});*/
/*for (let a = 0; a<=10; a++) {
    console.log(a);
}*/
/*let a = 0;
while (a < 1000) {
    console.log(a);
    a++;
}*/
/*let a = 0;
do {
    console.log("Hello");
    a++;
}  while (a < 10) ;
*/

/*document.querySelector("#link_1").onclick = function () {

    document.querySelector("#link_1").classList.add("active");
    document.querySelector("#link_2").classList.remove("active");
    document.querySelector("#link_3").classList.remove("active");
    document.querySelector("#link_4").classList.remove("active");

    document.querySelector(".tabs_content_1").classList.add("active");
    document.querySelector(".tabs_content_2").classList.remove("active");
    document.querySelector(".tabs_content_3").classList.remove("active");
    document.querySelector(".tabs_content_4").classList.remove("active");
}

document.querySelector("#link_2").onclick = function (){
    document.querySelector("#link_2").classList.add("active");
    document.querySelector("#link_1").classList.remove("active");
    document.querySelector("#link_3").classList.remove("active");
    document.querySelector("#link_4").classList.remove("active");

    document.querySelector(".tabs_content_2").classList.add("active");
    document.querySelector(".tabs_content_1").classList.remove("active");
    document.querySelector(".tabs_content_3").classList.remove("active");
    document.querySelector(".tabs_content_4").classList.remove("active");
}

document.querySelector("#link_3").onclick = function (){
    document.querySelector("#link_3").classList.add("active");
    document.querySelector("#link_2").classList.remove("active");
    document.querySelector("#link_1").classList.remove("active");
    document.querySelector("#link_4").classList.remove("active");

    document.querySelector(".tabs_content_3").classList.add("active");
    document.querySelector(".tabs_content_2").classList.remove("active");
    document.querySelector(".tabs_content_1").classList.remove("active");
    document.querySelector(".tabs_content_4").classList.remove("active");
}

document.querySelector("#link_4").onclick = function (){
    document.querySelector("#link_4").classList.add("active");
    document.querySelector("#link_2").classList.remove("active");
    document.querySelector("#link_3").classList.remove("active");
    document.querySelector("#link_1").classList.remove("active");

    document.querySelector(".tabs_content_4").classList.add("active");
    document.querySelector(".tabs_content_2").classList.remove("active");
    document.querySelector(".tabs_content_3").classList.remove("active");
    document.querySelector(".tabs_content_1").classList.remove("active");
}
 */

/*
et topLinks = document.querySelectorAll(".tab_link");

for (let i = 0; i < topLinks.length; i++) {
    topLinks[i].addEventListener("click", function() {
        let activeClass = document.querySelector(".active");
        activeClass.className = activeClass.className.replace(" active", "");
        this.className += " active";
    });
}
*/


/*
let elements = document.querySelectorAll(".tab_link");
let tabs = document.querySelectorAll(".tab_content");

let active = null;
let activeElem = document.querySelectorAll(".active");


function toggleAccordion(){
    if(active) {
            active.classList.remove("active");
        }
         this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');
         active = this;
         console.log(active);
}

let addClick = function (elem) {
    elem.addEventListener('click',toggleAccordion);
    //console.log(elem);
};
console.log(elements);
for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("active");
    for (let i = 0; i < tabs.length; i++) {
        addClick(elements[i]);

        addClick(tabs[i]);
    }
}
*/
/*
let elements = document.querySelectorAll(".tab_link");
let active = null;
for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("active");
    elements[i].nextElementSibling.classList.remove("active");
    elements[i].onclick = function () {
      if(active) {
          active.classList.toggle("active");
          active.nextElementSibling.classList.toggle("active");
      }
      active = this;
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");

  }
}
*/

/*
$( function() {
    // console.log($("#tabs").children("div"));
    $("#tabs").tabs(
        {
            hide: {effect: "clip", duration: 3000}
        },
        {
            show: {effect: "clip", duration: 3000}
        },
        {
            active: 2
        },
        {
            classes: {
                "ui-tabs-tab": "my-class"
            }
        },
        {
            //disabled: [ 0, 2 ]
           // "destroy"
        },
        {
           // activate: function( event, ui ) {}
        }
    );
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 1000,
    fancybox: true,
    //navText:[]
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
*/
//сделать слайдер с картинками фансибокс

$(document).ready(function(){
    $('.your-class').slick({
        accessibility: true,
        AdaptiveHeight:true,
      // fade:true,
        focusOnSelect: true,
        dots: false,
        infinite: true,
        //slidesPerRow: 2,
        swipe:true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
            prevArrow: "<img src='https://www.flaticon.com/svg/static/icons/svg/143/143285.svg' class='prev' alt='1' style='width: 40px; height: 40px;'>",
            nextArrow: "<img src='https://www.flaticon.com/svg/static/icons/svg/143/143286.svg' class='next' alt='2' style='width: 40px; height: 40px;'>"
        }
        );
});
$('[data-fancybox="images"]').fancybox({
    buttons : [
        'slideShow',
        'share',
        'zoom',
        'fullScreen',
        'close'
    ],
    thumbs : {
        autoStart : true
    }
});

// console.log($(".tabs_content_1"));
// console.log($(".tab_link"));
// console.log($("#link_2"));



