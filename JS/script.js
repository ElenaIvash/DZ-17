"use strict"

let a = +prompt("Введите число");
let b = +prompt("Введите степень");
let c = a ** b;

function addNum(a, b = 1) {
    if (isNaN(a || b)) {
        alert("Some error");
    } else { 
        alert(c);
    }
}

addNum();