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

let fruits = ["apple","orange","plum"];

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
}
