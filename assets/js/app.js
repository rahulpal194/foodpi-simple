//Header fixed onscroll part start
window.addEventListener('scroll', function(){
    const headernav = document.querySelector('.header')
<<<<<<< HEAD
    if(window.pageYOffset >= 10){
=======
    if(window.pageYOffset >= 100){
>>>>>>> a7002cb50f5ddcbcffbd57a5b76c3d3b3be4604a
        headernav?.classList.add('bg-white',"shadow-header")
    }
    else{
        headernav?.classList.remove('bg-white', "shadow-header")
    }
<<<<<<< HEAD
})

//toggle navbar responsive

const btn = document.querySelector(".responsive-btn")
const navbar = document.querySelector(".responsive-navbar")
btn.addEventListener("click", function(){
    navbar.classList.toggle("active")
})


//back to top button

window.addEventListener('scroll', function(){
    const backtotopbtn = document.querySelector(".backtotop")
    if(window.pageYOffset >= 500){
    backtotopbtn.classList.add('active')
   }
    else{
        backtotopbtn.classList.remove('active')
    }
})


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
=======
})
>>>>>>> a7002cb50f5ddcbcffbd57a5b76c3d3b3be4604a
