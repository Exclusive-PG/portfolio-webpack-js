import "@scripts/aos_animate";

import "@fortawesome/fontawesome-free/js/fontawesome";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);
dom.i2svg();
import mainVideoBg from "./videos/video.mp4";

/// styles ////
import "@styles/header";
import "@styles/main";
import "@styles/use_js_classes";
import "@styles/skills";
import "@styles/contact"
import "@styles/loader"
/// html ///
import  "./index.html"
///// js ///

import smoothScroll from "@scripts/smoothScroll/smoothScroll";
import "@scripts/works_show";
import "@scripts/sideEffect";
import "@scripts/circle_progress_bar/circleProgressBar"



window.addEventListener("load",()=>{

const loader = document.querySelector(".loader");


setTimeout(() => {
  if(!loader.classList.contains("loader-off")){
    loader.classList.add("loader-off")
  }
}, 2000);


  document.querySelector(".video").src = mainVideoBg;
  document.querySelector(".smooth").addEventListener("click", () => {
    smoothScroll(".navbar");
  });
  
})




document.querySelector(".navbar-nav").addEventListener("click", event => {
  if (event.target.nodeName !== "A") return;
  else{
       let data = event.target.getAttribute("data-nav");

      switch(data){
         case "home" : smoothScroll(".smooth_point_1");break;

         case "about" : smoothScroll(".smooth_point_2") ; break;
         
         case "works" : smoothScroll(".smooth_point_3") ; break;

         case "skills" : smoothScroll(".smooth_point_4") ; break;

         case "contact" : smoothScroll(".smooth_point_5"); break;
      }

  }


  return event.preventDefault();
});

document.getElementById("download_resume").addEventListener("click",()=>{
  
})