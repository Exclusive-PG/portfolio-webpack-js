import workImg1 from "../images/item-works-1.jpg"
import workImg2 from "../images/item-works-2.jpg";

const BODY_TAG     = document.getElementsByTagName("body")[0];
const MODAL_WINDOW = document.querySelector(".pop-up");
const WPAPPER      = MODAL_WINDOW.querySelector(".inner___wrapper");
const GITHUB_LINK  = WPAPPER.querySelector(".link_github_pg");


let workData = [
  {
    id: "1",
    title: "work_1",
    url: workImg1,
    description:
      "В этой проекте я получил опыт с Web Audio API . Я создал полноценное приложение , которое позволяет прослушивать вашу любимую музыку , наблюдать за эффектом эквалайзера , а также удобный плэйлист",
      toLink : "https://exclusive-pg.github.io/web-equalizer"
    },

  {
    id: "2",
    title: "work_2",
    url: workImg2,
    description:
      "Здесь я показал свои навыки на практике в ReactJS.",
      toLink: "https://exclusive-pg.github.io/react-deploy/#/react-deploy/home"
  },

];


const validateCase = data =>{

    if(MODAL_WINDOW.classList.contains("hide")) MODAL_WINDOW.classList.remove("hide");

    if(!BODY_TAG.classList.contains("scroll-off")) BODY_TAG.classList.add("scroll-off")

    ///// Enter current data 
    MODAL_WINDOW.querySelector(".pop_up__img").src = data.url;
    WPAPPER.querySelector(".card-body").textContent  = data.description;
    GITHUB_LINK.href = data.toLink;
}


const closeCase = () => {

!MODAL_WINDOW.classList.contains("hide") && MODAL_WINDOW.classList.add("hide");
BODY_TAG.classList.contains("scroll-off") && BODY_TAG.classList.remove("scroll-off");

}



const installFunctionShow = () =>{
    let elements = document.querySelectorAll(".item"); 

    elements.forEach(item =>{
  
  
        item.addEventListener("click",event=>{
            {
                let isWork = event.target.hasAttribute("data-work");
                let workId  = event.target.getAttribute("data-work");
                console.log(isWork);
                console.log(workId)
                if (!isWork) return;
              
                else{
                    switch(workId){
                        case "1":{
                            return   validateCase(workData[parseInt(workId)-1]);
                        }
                        case "2" :{
                            return   validateCase(workData[parseInt(workId)-1]);
                        }
                        default : return;
                    }
                }
              
              
        }});
    
   })   
  }
  


  MODAL_WINDOW.addEventListener("click",event=>{
    console.log(event.target);
     if(event.target == MODAL_WINDOW.querySelector(".container_pop_up")) closeCase();
     else return;
   
  });

installFunctionShow();
  