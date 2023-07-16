let container = document.querySelector(".container");
let buyNow = document.querySelector(".buyNow");

function firstColor(){
    container.style.backgroundColor = "#fff";
}

function secondColor(){
    container.style.backgroundColor = "#00f";
}

function thirdColor(){
    container.style.backgroundColor = "aqua";
}

function forthColor(){
    container.style.backgroundColor = "purple";
}


function showBox(){
    buyNow.style.width = "20%";
}

function hideBox(){
    buyNow.style.width = "0";
}