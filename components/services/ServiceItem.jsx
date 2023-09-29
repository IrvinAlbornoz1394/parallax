import { Global , css} from '@emotion/react'
import { Row, Col, Typography } from 'antd'
import { gsap } from 'gsap'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


const ServiceItem = ({nameService=null, key_id=null, children, ...props}) => {

    const {Title, Text} = Typography
    const ref = useRef(null);
    const ref2 = useRef(null);
    const hoverServices = useSelector((state) => state.web?.hoverServices)
    const hoverLinksServices = useSelector((state) => state.web?.hoverLinksServices)


    useEffect(() => {
        let hover_active = false;  
        for (const [key, value] of Object.entries(hoverServices)) {
            
            if(value === true && key !== `${key_id}`){
                hover_active = true;
            }
        }
        
        
        if(hoverServices[`${key_id}`] == true){
            if(hover_active == false){
                gsap.to(`div#card_${key_id}`, {duration: .6, scale: 1, opacity: 1, ease: "expoScale(1, 5)"});
                gsap.to(`img#${key_id}`, {duration: .01, opacity: 1, ease: "expoScale(1, 5)"});
            }
            
        }else{
            gsap.to(`div#card_${key_id}`, {duration: .6, scale: 0.5, opacity: 0, ease: "expoScale(1, 5)"});   
            gsap.to(`img#${key_id}`, {duration: .01, opacity: 0, ease: "expoScale(1, 5)"});
        }
    }, [hoverServices])


    useEffect(() => {
        if(hoverLinksServices[key_id] == true){
            gsap.to(`span#${key_id}`, {duration: "0.3", transform: "scaleX(1)"});
        }else{
            
            gsap.to(`span#${key_id}`, {duration: "0.3", transform: "scaleX(0)"});   
        }
    }, [hoverLinksServices])


  return (
    <div id={`${key_id}`} className='hoverServices titleServicesContent' style={{ zIndex: 100-(1+props.idx) }} >
        <p className='titleServices font-xxl' ref={ref} id={key_id}>
            {nameService}
        </p>
        <img src='/images/Arrow_right.png' id={key_id} className='arrowServices' ref={ref2} />
        <div id={`card_${key_id}`} className='contentCard' >
            <div  className='cardServices' >
                {children}
            </div>
        </div>
    </div>
  )
}

export default ServiceItem