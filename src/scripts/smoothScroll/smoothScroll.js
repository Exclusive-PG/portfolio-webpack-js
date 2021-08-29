 const smoothScroll = (targetScroll,duration = 1500) => {
    let target = document.querySelector(targetScroll);
    let targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let startTime = null;
    

    const animation = currentTime =>{
        if(startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime ;
        let run = ease(timeElapsed,startPosition,targetPosition,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
        
    }
    const ease = (t,b,c,d) =>{
        t /= d/2;
        if(t <1 ) return c/2  *t*t+b;
        t--;
        return -c/2 * (t* (t - 2)- 1 ) + b;
    }
    requestAnimationFrame(animation);
};


export default smoothScroll;