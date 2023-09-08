import { gsap } from "gsap";
import { TimelineMax } from './TweenMax.min'


export const convertToPlain = (html) => {

    // Create a new div element
    var tempDivElement = document.createElement("div");

    // Set the HTML content with the given value
    tempDivElement.innerHTML = html;

    // Retrieve the text property of the element 
    return tempDivElement.textContent || tempDivElement.innerText || "";
}

const animate = () => {   
    const start = "M 0 100 V 50 Q 50  0  100 50 V 100 z";
      const end = "M 0 100 V 0 Q 50  0  100 0 V 100 z";

    new TimelineMax({repeatDelay: 1})
        .to(".path", 1, {attr: { d: start }, ease: Power2.easeIn})
        .to(".path", 1, {attr: { d: end }, ease: Power2.easeOut})
        /* .to(".path", 1, {attr: { d: end_final }, ease: Power2.easeOut}) */
}

export const animateFinal = () => {
    const start = "M 0 0 V 100 Q 0 100 100  100  V 0 Z";
    
    gsap.to(".wrapper", { duration: .1, zIndex: '205' })

    setTimeout(() => {
        new TimelineMax({repeatDelay: 1}).to(".path", .1, {attr: { d: start }, ease: Power2.easeIn})
    }, 800);

    setTimeout(() => {
        gsap.to(".wrapper", { duration: .1, zIndex: '101' })
    }, 1500);
}

export const animateFinal_final = () => {
    const start = "M 0 0 V 0 Q 50 100 100 0 V 0 Z";
    const end = "M 0 0 V 0 Q 50 0 100  0  V 0 Z";
                
    new TimelineMax({repeatDelay: 1})
    .to(".path", .5, {attr: { d: start }, ease: Power2.easeIn})
    .to(".path", .5, {attr: { d: end }, ease: Power2.easeOut})    
}

export const transitionFinal = () => {
    
}

export const routerTransition = (linkFuntion) => {
    console.log('first')
    gsap.to(".wrapper", { duration: .1, zIndex: '101' })
    setTimeout(() => {
        gsap.to(".wrapper", { duration: .25, opacity: .25, ease: "none" },)
        gsap.to(".wrapper", { duration: .25, opacity: .50, ease: "none" })
        gsap.to(".wrapper", { duration: .25, opacity: .75, ease: "none" })
        gsap.to(".wrapper", { duration: .25, opacity: 1, ease: "none" })
    }, 1000);
    
    setTimeout(() => {
        animate();
    }, 1800);

    setTimeout(() => {
        gsap.to(".wrapper", { duration: 1, opacity: 1, ease: "none", background: '#fff' },)
    }, 3500);

    setTimeout(() => {
        linkFuntion()
        animateFinal();
    }, 4000);

    setTimeout(() => {
        gsap.to(".wrapper", { duration: 1, ease: "none", backgroundColor:'transparent', },)
    }, 5000);
    
    setTimeout(() => {
        animateFinal_final();
    }, 5000);

    setTimeout(() => {
        gsap.to(".wrapper", { duration: 1, ease: "none", zIndex:0 },)        
    }, 5500);

    setTimeout(() => {
        new TimelineMax({repeatDelay: 1})
        .to(".path", .1, {attr: {  d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" }, ease: Power2.easeIn})
    }, 6000);

    
}