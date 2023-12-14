import { Global, css } from '@emotion/react'
import { Col, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import ProjectItem from './ProjectItem'
import {projects} from '../../libs/Projects'
import { useSelector } from 'react-redux'

import { gsap } from 'gsap';


const ProjectList = () => {
    const { Title, Text } = Typography
    const [projectsList, setProjectsList] = useState([])
    const catWorkSelected = useSelector((state) => state.web.catWorkSelected)
    const hoverProjects = useSelector((state) => state.web?.hoverProjects)

    

    useEffect(() => {
        let projectShow = document.getElementsByClassName("hoverProjects")
        if(catWorkSelected !== 'all'){
            for (let item of projectShow) {
                /* Validamos el hover en cada uno de los servicios */
                /* Si no tiene la clase y tampoco tiene el hide */
                if(!item.className.includes(catWorkSelected) && !item.className.includes('hide')){
                    gsap.to(`#${item.id}`, {duration: "0.3", transform: "scaleY(0)"})
                    gsap.to(`#${item.id}`, {display: "none"})
                    /* gsap.to(`span#underline_cookies`, {duration: "0.3", transform: "scaleY(1)"}); */
                    item.classList.add("hide");
                }else if(item.className.includes(catWorkSelected) && item.className.includes('hide')){
                    gsap.to(`#${item.id}`, {display: "flex"})
                    gsap.to(`#${item.id}`, {duration: "0.3", transform: "scaleY(1)"})
                    item.classList.remove("hide");
                }
            } 
            
        }else{
            for (let item of projectShow) {
                if(item.className.includes('hide')){
                    gsap.to(`#${item.id}`, {display: "block"})
                    gsap.to(`#${item.id}`, {duration: "0.3", transform: "scaleY(1)"})
                    item.classList.remove("hide");
                }
            }
        }
        /* setProjectsList([])
        setTimeout(() => {
            if(catWorkSelected){
                const list = projects.filter(item => {
                    let find = item?.categories?.filter(cat => cat.code === catWorkSelected) 
                    if( find?.length > 0){
                        return item
                    }
                })
                setProjectsList(list)
              }else{
                setProjectsList(projects)
              }      
        }, 10); */
        
      
    }, [catWorkSelected])


    useEffect(() => {
      setProjectsList(projects)
    }, [])
    
    

    return (
        <>
            <Global 
                styles={css`
                    .section-proyects-work{
                        padding-bottom: 450px;
                    }
                `}
            />
            
                <Row justify={'end'} className='section-proyects-work' >
                    <Col span={21}>
                        {
                            projectsList.map(item => 
                                (
                                    <ProjectItem  nameProject={item.name} key_id={item.key} cats={item?.categories} >
                                        <img id="img_demo" src={item.main_image} style={{ width:400 }} />
                                    </ProjectItem>
                                )
                            )
                        } 
                    </Col>
                </Row>
        </>
    )
}

export default ProjectList