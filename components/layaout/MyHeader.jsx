import React, { useEffect, useState } from 'react'
import { Button, Image, Layout, Menu, Typography } from 'antd'
import { Global, css } from '@emotion/react'
import { useSelector, useDispatch } from 'react-redux'
import { gsap } from 'gsap';




const MyHeader = () => {
    const hoverWork = useSelector((state) => state.web?.hoverWork)
    const hoverActive = useSelector((state) => state.web?.hoverActive)
    const hoverNvoProjectHeader = useSelector((state) => state.web?.hoverNvoProjectHeader)
    const hoverItemsMenu = useSelector((state) => state.web?.hoverItemsMenu)
    const cursorPointer = useSelector((state) => state.web?.cursorPointer)
    
    const { Header, Content } = Layout
    const { Text } = Typography
    
    useEffect(() => {
        for (const [key, value] of Object.entries(hoverItemsMenu)) {
            if(value == true){  
                gsap.to(`span#line_${key}`, {duration: "0.3", transform: "scaleX(1)"});
            }else{
                
                gsap.to(`span#line_${key}`, {duration: "0.3", transform: "scaleX(0)"});   
            }  
        }
    }, [hoverItemsMenu])

    

    const items1 = ['Home', 'Crew', 'Servicios', 'Work', 'Contacto'].map((key,idx) => ({
        key: idx,
        label: <div className='item_menu_header' id={key}>
                <Text className='txt-white item-main-menu'>{key}</Text>
                <span className='underline_header' id={`line_${key}`} ></span>
            </div>,
      }));


    /* const linkToSection = (e) => {
        let element = null
        if(e.key == '0'){
            element = document.getElementById("section_experience");
        }else if(e.key == '1'){
            element = document.getElementById("section_crew");
        }else if(e.key == '2'){
            element = document.getElementById("section_services")
        }else if (e.key == '3'){
            element = document.getElementById("section_work")
        }else if (e.key == '4'){
            element = document.getElementById("section_ux_ui")
        }
        if (element){
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
    } */

    
    return (
        <>
            <Global styles={css`
                .cursor-example{
                    cursor: ${ cursorPointer ? "pointer" : "default"}
                }

                .header{
                    position: absolute,
                    width: 100%,
                    display: flex,
                    justify-content: space-between,
                    background: transparent;
                }
                .mainMenu{
                    background: none;
                    width: 100%;
                    justify-content: center;
                    flex: 1;
                }
                .ant-menu-overflow-item{
                    color: #FFFFFF !important;
                    margin-left: 10px !important;
                    margin-right: 10px !important;
                }
                .ant-menu-item-selected{
                    color: #E7FD52 !important;
                }
                .ant-menu-item-selected::after{
                    margin-bottom: 20px;
                    border-bottom-color: #E7FD52 !important;
                }
                .ant-menu-horizontal, .ant-menu-item::after, .ant-menu-submenu::after {
                    border: none !important;
                }
                .btn_new_proyect_header{
                    background-color: ${ hoverNvoProjectHeader == true ?  "#E0FF10" : "#E7FD52"} ;
                    width: 218px;
                    height: 54px;
                }

                .underline_header{
                    display: block;
                    height: 1px;
                    background-color: var(--white);
                    opacity: 1;
                    transform: scaleX(0) 0.3s;
                }

                ul.mainMenu{
                    margin: auto;
                }

                ul.mainMenu > li.ant-menu-item{
                    line-height: 25px !important;
                    height: fit-content;
                    text-align: center;
                }

            `}
            />
            <Header style={styles.header}  >
                <div style={{ flex: 1, display:'flex' }}>
                    <Image src='/images/parallax_icon.svg' style={{ width:45, marginBottom:'auto', marginTop:'auto' }} />
                </div>
                <Menu className='mainMenu' mode="horizontal" items={items1}/>
                <div style={{ flex: 1, display:'flex', justifyContent:'end' }}>
                    <button id="btn_nvo_project_header" className='btn btn_new_proyect_header font-18' style={{ marginTop:'auto', marginBottom:'auto' }}>Start trip!</button>
                </div>
            </Header>
        </>
    )
}

const styles = {
    header: {
        position: 'absolute',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        background: "transparent",
        zIndex:100,
        position:'fixed',
        backdropFilter: 'blur(10px)'
    },
    logo: {
        margin: '16px 0 16px 0',
        background: 'rgba(255, 255, 255, 0.3)'
    }
}

export default MyHeader