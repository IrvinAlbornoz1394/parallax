import { Global, css } from '@emotion/react'
import React, { useEffect } from 'react'

import { TimelineMax } from '../../libs/TweenMax.min'
import { gsap } from 'gsap';
import { Fade } from "react-awesome-reveal";

const Transition = () => {
    let repeat = false;

    const animate = () => {
        

        const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
        const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
        new TimelineMax(repeat ? { paused: true } : {repeatDelay: 1})
                .to(".path", 1, {attr: { d: start }, ease: Power2.easeIn})
                .to(".path", 1, {attr: { d: end }, ease: Power2.easeOut})
    }
    
    useEffect(() => {    
        
        /* gsap.to(".wrapper", { duration: 1, backgroundColor: '#000', ease: "none" }, 1)
        setTimeout(() => {

            animate();
        }, 1500); */
        

        /* repeat = false */
    }, []);

  return (
    <>
        <Global 
            styles={css`
                .wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    z-index:50;
                    background:#000;
                    position:absolute;
                    width: 100%;
                    opacity:0;
                }
                
                .wrapper > .transition {
                    position: absolute;
                    left: 0; top: 0;
                    width: 100%; height: 100%;
                    z-index: 100;
                }
            `}
        />
        <div class='wrapper'>
            <svg class="transition" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path class="path" fill='#fff'   dur="10s" vector-effect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z"/>
                {/* <path class="path" fill='#fff' stroke="#000" stroke-width="5px" dur="10s" vector-effect="non-scaling-stroke" d="M100,250 Q250,100 400,250 Z"/> */}
                
            </svg>
        </div>
    </>
  )
}

export default Transition