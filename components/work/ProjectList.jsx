import { Global, css } from '@emotion/react'
import { Col, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import ProjectItem from './ProjectItem'
import {projects} from '../../libs/Projects'
import { useSelector } from 'react-redux'
import Slide from 'react-reveal/Slide';


const ProjectList = () => {
    const { Title, Text } = Typography
    const [projectsList, setProjectsList] = useState([])
    const catWorkSelected = useSelector((state) => state.web.catWorkSelected)

    useEffect(() => {
        setProjectsList([])
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
        }, 10);
        
      
    }, [catWorkSelected])
    

    return (
        <>
            <Global 
                styles={css`
                    .section-proyects-work{
                        padding-top:50px;
                        padding-bottom: 150px;
                    }
                `}
            />
            
                <Row justify={'end'} className='section-proyects-work' >
                    <Col span={21}>
                        {
                            projectsList.map(item => 
                                (<Slide left>
                                    <ProjectItem  nameProject={item.name} key_id={item.key} >
                                        <img id="img_demo" src={item.main_image} style={{ width:400 }} />
                                    </ProjectItem>
                                </Slide>
                                )
                            )
                        } 
                    </Col>
                </Row>
        </>
    )
}

export default ProjectList