import { Global, css } from '@emotion/react';
import { Typography } from 'antd'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { useSelector } from 'react-redux';
import Slide from 'react-reveal/Slide';


const ProjectItem = ({nameProject=null, key_id=null, children, ...props}) => {
    
    const { Title, Text } = Typography
    const refNameProj = useRef(null);
    const refImgProj = useRef(null);

    const hoverProjects = useSelector((state) => state.web?.hoverProjects)

    useEffect(() => {
        let texts = document.getElementsByClassName("hoverProjects")
        for (let item of texts) {
            if (`show_${hoverProjects}` === item.id ){
                var element = document.getElementById(item.id);
                element.focus()
                gsap.to(`#card_${item.id}`, {
                    duration: .6, scale: 1, opacity: 1, ease: "expoScale(1, 5)"
                });
            }else{
                var element = document.getElementById(item.id);
                element.blur()
                /*   */
                gsap.to(`#card_${item.id}`, {duration: .6, scale: 0.5, opacity: 0, ease: "expoScale(1, 5)"});
            }
        } 

    }, [hoverProjects])
    
    

    /* useEffect(() => {
        gsap.to(`#${key_id}`, {duration: .6, scale: 0.5, opacity: 0, ease: "expoScale(1, 5)"});
    }, []) */

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

                .hoverProjects:focus .arrowServices{
                    opacity: 1;
                    visibility: visible;
                }

                .hoverProjects:focus .cardImgProject{
                    opacity: 1;
                    visibility: visible;
                    duration: .6, 
                    scale: 1;
                    opacity: 1;
                    ease: "expoScale(1, 5);
                }
                
                
                .cardImgProject{
                    padding:20px;
                    position: absolute;
                    top: -25px;
                    opacity: 0; 
                }

                .hoverProjects:focus{
                    outline:0px !important;
                }
            `}
        />
        <div id={`show_${key_id}`} tabIndex={-2} style={{ outline: 0 }} className='hoverProjects titleProjectsContent' /* onMouseEnter={() => showCard()} onMouseLeave={() => hideCard()} */ >
            <Text className='titleListHover text_white font-xxl' ref={refNameProj}>
                {nameProject}
            </Text>
            <img src='/images/Arrow_right.png' className='arrowServices'  />
            <div className='contentCard' id={`card_show_${key_id}`}>
                <div  className='cardImgProject'>
                    <Slide left>
                    {children}
                    </Slide>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectItem