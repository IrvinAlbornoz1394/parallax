import { Global, css } from '@emotion/react'
import { Col, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import {projects} from '../../libs/Projects'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'



/* Components */
import ContactSection from '../ContactSection'
import VideoContent from './elements/VideoContent'
const TextDescription = dynamic(() => import('../work/elements/TextDescription'),{
    ssr: false,
  })

/* Functions */
import { convertToPlain } from '../../libs/functions'



const ProjectDetails = () => {
    const { Title, Text } = Typography
    const router = useRouter()
    const [currentProject, setCurrentProject] = useState(null)
    
    useEffect(() => {
        const { id } = router.query
        if(id){
            getProject(id);
        }
    }, [router])


    const getProject = (id) => {
        console.log('get', id)
        console.log('projects', projects)
        let cp = projects.filter(item => item.id == id);
        console.log('cp',cp )
        if(cp.length > 0){
            setCurrentProject(cp[0])
        }
    }
    

    useEffect(() => {
      console.log('currentProject',currentProject)
    }, [currentProject])
    

    return (
        <>
        <Global
        
            styles={css`
                .catLabelProjectDetails, .catProjectDetails{
                    font-family: Sometype Mono;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
                .arrowPrjectDetails{
                    width: 70px;
                    margin: 0px 30px;
                }
                .sectionTitleProject{
                    margin-bottom:100px;
                }
                .text-project-description{
                    padding: 50px 66px 50px 20px;

                }
                .text-project-description > *{
                    color: #FFF;
                    font-size: 24px;
                    font-family: Sometype Mono;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 26px;
                }

                .description-work{
                    color: #FFF;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 26px;
                }

            `}
        />
        <Row justify={'end'} gutter={[10,10]} className='section-proyects-work' style={{ marginTop:20 }} >
            <Col span={21} className='sectionTitleProject' >
                <p className='text_white font-18' style={{ marginLeft:'-25px' }}>
                    Proyecto
                </p>
                <Text className='titleListHover  text_white font-xxl'>
                    Kikert
                </Text>
                <p >
                    <Text className='catLabelProjectDetails txt-white font-18'>
                        Categoria
                    </Text>
                    <img src='/images/Arrow_right.png' className='arrowPrjectDetails' />
                    <Text className='catProjectDetails txt-white font-18'>
                        Desgign UIX/UI
                    </Text>
                </p>
            </Col>
            <Col span={24}>
                <img src={currentProject?.main_image} className='img-100' />
            </Col>
            <Col span={12}>
                <TextDescription currentProject={currentProject}/>
            </Col>
            {
                currentProject && currentProject.gallery1 &&
                <Col span={24}>
                    <Row gutter={[10,5]}>
                        {
                            currentProject?.gallery1.map((image, idx) => 
                                (<Col xl={12} xs={24} md={12}>
                                    <img src={image.url} style={{ width: '100%' }} />
                                </Col>)
                            )
                        }
                    </Row>
                </Col>
            }
            {/* Video */}
            <VideoContent project={currentProject} />
            {/* ImageFullscreen */}
            {
                currentProject?.imgFullScreen && 
                
                    <Col span={24}>
                        <img src={currentProject?.imgFullScreen?.url} className='img-100' />
                    </Col>
            }
            {/* Galeria de 3 */}
            {
                currentProject && currentProject.gallery2 &&
                <Col span={24}>
                    <Row gutter={[10,5]}>
                        {
                            currentProject?.gallery2.map((image, idx) => 
                                (<Col xl={8} xs={24} md={8}>
                                    <img src={image?.url} className='img-100' />
                                </Col>)
                            )
                        }
                    </Row>
                </Col>
            }
            <ContactSection />
        </Row>
        
        </>
    )
}

export default ProjectDetails