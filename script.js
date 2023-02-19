const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const imgSilder = document.getElementsByClassName('imgSilder');
const theMainIng = document.getElementById("theMainIng");


let t = 0;



hamburger.onclick = function () {
    navMenu.classList.toggle("active");
}



const scrollUp = document.querySelector('.scrol-up');

scrollUp.addEventListener("click", function(){
    window.scrollTo(0,0);
});


function imgSilderr () {
    t++;
    if (t>=imgSilder.length) {
        t=0;
    }
   
    theMainIng.src = imgSilder[t].src;
}

 setInterval(()=>{
    imgSilderr()
},2000) 



