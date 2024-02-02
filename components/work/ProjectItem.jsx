import { Global, css } from '@emotion/react';
import {  Typography } from 'antd'
import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { useSelector } from 'react-redux';
import Slide from 'react-reveal/Slide';
import Arrow_right from '../../public/images/Arrow_right.png'
import Image from 'next/image';


const ProjectItem = ({nameProject=null, key_id=null, cats, children, ...props}) => {
    
    const { Title, Text } = Typography
    
    const refImgProj = useRef(null);
    const [classList, setClassList] = useState('')

    const titleRef = useRef(null)
    const arrowRef = useRef(null)

    const hoverProjects = useSelector((state) => state.web?.hoverProjects)


    useEffect(() => {
        let classStr = ""
        cats.map(item => {
            classStr += `${item.code} `
        })
        setClassList(classStr)
    }, [cats])

    useEffect(() => {
        let texts = document.getElementsByClassName("hoverProjects")

        for (let item of texts) {
            if(`show_${hoverProjects}` === item.id ){
                /* var element = document.getElementById(item.id);
                element.focus() */
                gsap.to(`#card_${item.id}`, {
                    duration: .6, scale: 1, opacity: 1, ease: "expoScale(1, 5)"
                });
            }else{
                /* var element = document.getElementById(item.id);
                element.blur() */
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

    const getMargin = () => {
        
        const marLeft =  titleRef?.current?.offsetWidth + arrowRef?.current?.offsetWidth + 120
        console.log('getMargin',marLeft)
        return marLeft
    }
    

  return (
    <>
        <Global 
            styles={css`
                .arrowServices{
                    margin-top:auto;
                    margin-bottom: auto;
                    margin-left:5%;
                    /* visivility: hidden; */
                    /* opacity: 0; */
                    transition: opacity 0.5s;
                }
                .hoverProjects{
                    cursor:pointer;
                    
                    position:relative;
                }

                /* .hoverProjects:focus .arrowServices{
                    opacity: 1;
                    visibility: visible;
                } */

                /* .hoverProjects:focus .cardImgProject{
                    opacity: 1;
                    visibility: visible;
                    duration: .6, 
                    scale: 1;
                    opacity: 1;
                    ease: "expoScale(1, 5);
                } */
                
                
                .cardImgProject{
                    padding:20px;
                    position: absolute;
                    top: -25px;
                    /* opacity: 0;  */
                }

                .contentCard{
                    float: left;
                }

                /* .hoverProjects:focus{
                    outline:0px !important;
                } */
            `}
        />
        <div id={`show_${key_id}`} className={`hoverProjects titleProjectsContent ${classList}`}  >
            <Text className='titleListHover text_white font-xxl' ref={titleRef}>
                {nameProject}
            </Text>
            <Image ref={arrowRef} src={Arrow_right} className='arrowServices' id={`arror_${key_id}`} />
            <div className='contentCard' id={`card_show_${key_id}`} style={{ marginLeft: getMargin() }} >
                <div  className='cardImgProject'>
                    {children}
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectItem