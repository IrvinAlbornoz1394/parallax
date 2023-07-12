import { Global, css } from '@emotion/react'
import { Col, Row, Typography } from 'antd'
import React from 'react'
import ProjectItem from './ProjectItem'
import {projects} from '../../libs/Projects'

const ProjectList = () => {
    const { Title, Text } = Typography
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
                            projects.map(item => 
                                (<ProjectItem  nameProject={item.name} key_id={item.key} >
                                    <img id="img_demo" src={item.main_image} style={{ width:400 }} />
                                </ProjectItem>
                                )
                            )
                        }

                        
                        {/* <ProjectItem  nameProject="ScanFix" key_id={'ScanFix'} >
                            <img id="img_demo" src='/images/kikert_parallax.jpg' style={{ width:400 }} />
                        </ProjectItem>
                        <ProjectItem  nameProject="Kiimak" key_id={'Kiimak'} >
                            <img id="img_demo" src='/images/kikert_parallax.jpg' style={{ width:400 }} />
                        </ProjectItem>
                        <ProjectItem  nameProject="Hesys" key_id={'hesys'} >
                            <img id="img_demo" src='/images/kikert_parallax.jpg' style={{ width:400 }} />
                        </ProjectItem>
                        <ProjectItem  nameProject="Momoto" key_id={'momoto'} >
                            <img id="img_demo" src='/images/kikert_parallax.jpg' style={{ width:400 }} />
                        </ProjectItem> */}
                    </Col>
                </Row>
        </>
    )
}

export default ProjectList