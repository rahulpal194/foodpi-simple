//Header fixed onscroll part start
window.addEventListener('scroll', function(){
    const headernav = document.querySelector('.header')
    if(window.pageYOffset >= 100){
        headernav?.classList.add('bg-white',"shadow-header")
    }
    else{
        headernav?.classList.remove('bg-white', "shadow-header")
    }
})