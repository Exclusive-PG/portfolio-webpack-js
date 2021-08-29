// radius circle -> svg -> 

// radius = (width/2) - (strokeWidth * 2);

const circle = document.querySelectorAll(".progress_circle");
const counterPercent = document.querySelectorAll(".percent-circle");
const skillsSection = document.querySelector(".skills");

const setCounter = {
    allTime : 1500,
    step : 10,
}
let isChecked = true;

const setCircle = (startPosition = null) =>{
if(isChecked){
    
    Array.from(circle).forEach(item =>{
        let circumference = 2 * Math.PI * item.r.baseVal.value;
    if(window.pageYOffset > 2300){

       
    
        item.style.strokeDashoffset  = circumference - item.getAttribute("data-percent") / 100 * circumference ;
        item.style.strokeDasharray = `${circumference} ${circumference}`;
       
        
    }else{
        item.style.strokeDashoffset = 360;
        item.style.strokeDasharray = `${0} ${360}`;
    }
        item.style.stroke = "red";
        item.style.fill = "transparent"


      
       
    })
    

}
}

const animateCounter = (targetNum,element)=>{
         let {allTime,step} = setCounter;
         timer = Math.round(allTime / (targetNum/step));
         counter = 0;

         let interval = setInterval(() => {
             counter++;
            counter >= targetNum && clearInterval(interval);
             element.textContent = counter + "%";
         }, timer);
}

const isCheck = boolean => boolean;

const animateAllCounter = () =>{

for(let i = 0 ; i < counterPercent.length ; i++){
    animateCounter(parseInt(circle[i].getAttribute("data-percent")),counterPercent[i]);
}

}
let isAnimate = false;

window.addEventListener("scroll",()=>{
   setCircle();
  
   if(window.pageYOffset >=2300  && isAnimate === false ){

    animateAllCounter();
    isAnimate = true;
}
})