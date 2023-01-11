"use strict"

function irArriba(){
    window.addEventListener('scroll', () =>{
        let scroll = document.documentElement.scrollTop;
        console.log(scroll);
        let flechaArriba = document.getElementById('flechaArriba');

        if(scroll > 300) {
            flechaArriba.style.right = 20 + "px";
        } else {
            flechaArriba.style.right = -140 + "px";
        }
    })
}

irArriba();