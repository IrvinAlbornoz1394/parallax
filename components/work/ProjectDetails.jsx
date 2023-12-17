import { Global, css } from '@emotion/react'
import { Col, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import {projects} from '../../libs/Projects'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'



/* Components */
import ContactSection from '../ContactSection'
import VideoContent from './elements/VideoContent'
import Carrousel from './elements/Carrousel'
const TextDescription = dynamic(() => import('../work/elements/TextDescription'),{
    ssr: false,
  })

/* Functions */
import { convertToPlain } from '../../libs/functions'
import { useSelector } from 'react-redux'



const ProjectDetails = () => {
    const { Title, Text } = Typography
    const router = useRouter()
    const [currentProject, setCurrentProject] = useState(null)
    const hoverAllProjects = useSelector((state) => state.web?.hoverAllProjects)
    
    useEffect(() => {
        const { id } = router.query
        if(id){
            getProject(id);
        }
    }, [router])


    const getProject = (id) => {
        let cp = projects.filter(item => item.key == id);
        if(cp.length > 0){
            setCurrentProject(cp[0])
        }
    }
    
    

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
                    height: 400px;
                    padding-top:60px;
                    padding-bottom: 20px;
                    height: 400px;
                    padding-top:60px;
                    padding-bottom: 20px;
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

                .content-title-project{
                    display: flex;
                    height: 100%;
                    justify-content: space-between;
                    flex-direction: column;
                }

                .all-projects-back{
                    color: var(--primary);
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    text-align:end;
                    padding-right:100px;
                    cursor: ${hoverAllProjects === true ? 'pointer' : 'default'}
                }

                .work-title-project{
                    margin-top:20px;
                    font-weight: bold;
                    margin-bottom: 0px !important;
                    line-height: 1;
                }

                @media only screen and (min-width: 1500px) {
                    .sectionTitleProject{
                        height: 600px;
                        padding-top:80px;
                    }

                    .work-title-project{
                        color:var(--white);
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        margin-top:24px;
                    }
                }

            `}
        />
        <Row justify={{xs:'center', md:'end', lg: 'end', xl:'end', xxl:'end'}} gutter={[10,10]} className='' style={{ marginTop:20 }} >
            <Col span={21} className='sectionTitleProject'>
                <div className='content-title-project'>
                    <div className='all-projects-back' id="all-projects-back" >
                        All proyects
                    </div>
                    <div className=''>
                        <p className='text_white font-18'>
                            Proyecto
                        </p>
                        <p className='work-title-project text_white font-xxl'>
                            Kikert
                        </p>
                    </div>
                    <p >
                            <Text className='catLabelProjectDetails txt-white font-18'>
                                Categoria
                            </Text>
                            <img src='/images/Arrow_right.png' className='arrowPrjectDetails' />
                            <Text className='catProjectDetails txt-white font-18'>
                                Desgign UIX/UI
                            </Text>
                        </p>
                </div>
            </Col>
            <Col span={24}>
                <img src={currentProject?.main_image} className='img-100' />
            </Col>
            <Col xs={24} md={12}>
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
            <Col span={24}>
                <Carrousel gallery={currentProject?.gallery2} />
            </Col>
            <Col span={24}>
                <Carrousel gallery={currentProject?.gallery2} />
            </Col>
            <ContactSection />
        </Row>
        
        </>
    )
}

export default ProjectDetails