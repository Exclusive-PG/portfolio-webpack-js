

const checkScroll = () =>{
     let yOffset = window.pageYOffset ;
     let fixedNavbar =  document.querySelector(".navbar");
     yOffset > 980 ?  fixedNavbar.classList.add("fixed") :  fixedNavbar.classList.remove("fixed");
}

window.addEventListener("scroll",checkScroll);