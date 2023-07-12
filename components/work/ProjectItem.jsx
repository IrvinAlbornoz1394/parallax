import { Global, css } from '@emotion/react';
import { Typography } from 'antd'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { gsap } from 'gsap'


const ProjectItem = ({nameProject=null, key_id=null, children, ...props}) => {
    
    const { Title, Text } = Typography
    const refNameProj = useRef(null);
    const refImgProj = useRef(null);

    useEffect(() => {
        gsap.to(`#${key_id}`, {duration: .6, scale: 0.5, opacity: 0, ease: "expoScale(1, 5)"});
    }, [])

    const showCard = () => {
        gsap.to(`#${key_id}`, {
            duration: .6, 
            scale: 1, 
            opacity: 1, 
            ease: "expoScale(1, 5)"
        });
    }

    const hideCard = () => {
        gsap.to(`#${key_id}`, {duration: .6, scale: 0.5, opacity: 0, ease: "expoScale(1, 5)"});
    }
    

  return (
    <>
        <Global 
            styles={css`
                .arrowServices{
                    margin-top:auto;
                    margin-bottom: auto;
                    margin-left:5%;
                    visivility: hidden;
                    opacity: 0;
                    transition: opacity 0.5s;
                }
                .hoverProjects{
                    cursor:pointer;
                    display:flex;
                    position:relative;
                }

                .hoverProjects:hover .arrowServices,{
                    opacity: 1;
                    visibility: visible;
                }
                
                .cardImgProject{
                    padding:20px;
                    position: absolute;
                    top: -25px;
                    opacity: 0; 
                }
            `}
        />
        <div className='hoverProjects' onMouseEnter={() => showCard()} onMouseLeave={() => hideCard()} >
            <Text className='titleListHover text_white font-xxl' ref={refNameProj}>
                {nameProject}
            </Text>
            <img src='/images/Arrow_right.png' className='arrowServices' ref={refImgProj} />
            <div className='contentCard' style={{  marginLeft: parseFloat(refImgProj?.current?.offsetWidth) + parseFloat(refNameProj?.current?.offsetWidth) + 100 }}>
                <div id={key_id} className='cardImgProject'>
                    {children}
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectItem