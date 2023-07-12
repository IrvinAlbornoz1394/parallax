import React, { forwardRef, useState, useEffect, useImperativeHandle, useLayoutEffect, useRef } from 'react'
import { Col, Layout, Progress, Row, Typography } from 'antd'
import { Global, css } from '@emotion/react';
import { gsap } from 'gsap';
import { Fade } from "react-awesome-reveal";


/* import { ScrollTrigger } from "gsap/ScrollTrigger"; */
import { loadServices, updHoverServices } from '../redux/recuder_slices/webReducer'

/* My Components */
import MainLayout from '../components/layaout/MainLayout'
import MainFullScreen from '../components/MainFullScreen';
import Crew from '../components/crew/Crew';
import MyHeader from '../components/layaout/MyHeader';
import Work from '../components/Work';
import StartProject from '../components/StartProject';
import Footer from '../components/layaout/footer/Footer';
import SectionServices from '@/components/services/SectionServices';
import ContactSection from '../components/ContactSection'
import Cookies from '../components/layaout/Cookies'
import Loading from '../components/layaout/Loading'

import Demo from '../components/Demo';
import { useDispatch, useSelector } from 'react-redux';


const Index = () => {

    const [percent, setPercent] = useState(0)

    const {  Content } = Layout
    const {Title, Text} = Typography
    const arrowLeft = useRef();
    const arrowRight = useRef()
    const dispatch = useDispatch()
    const component = useRef();


    const services = useSelector((state) => state.web?.services)
    const showCookies = useSelector((state) => state.web.showCookies)
    
    
    useLayoutEffect(() => {    
        dispatch(loadServices())
    }, []);
 
    return (
        <>
        <Global 
            styles={css`
            .titleExperiences{
                font-weight: bold;
                margin-top: 40px !important;
                margin-bottom: 20px !important;
            }

            @media only screen and (min-width: 1400px) and (max-width: 1569px) {
                /* .titleExperiences{
                    font-size: 80px !important;
                } */
                /* .textDescription{
                    font-size: 20px !important;
                } */
            }

            @media only screen and (min-width: 1570px) and (max-width: 1650px) {
                /* .titleExperiences{
                    font-size: 90px !important;
                } */
                /* .textDescription{
                    font-size: 25px !important;
                } */
            }

            @media only screen and (min-width: 1651px) and (max-width: 1739px) {
                /* .titleExperiences{
                    font-size: 95px !important;
                } */
                /* .textDescription{
                    font-size: 25px !important;
                } */
            }

            @media only screen and (min-width: 1740px) {
                /* .titleExperiences{
                    font-size: 100px !important;
                } */
            }


            /* Extra large devices (large laptops and desktops, 1200px and up) */
            @media only screen and (min-width: 1900px) {
                .titleExperiences{
                    font-size: 105px !important;
                }
                
            }

            .markedText{
                background: #E7FD52;
                color: #000
            }
            .textYellow{
                color: #F3FF6D;
                display: contents;
            }

            .titleCrew{
                font-size: 75px;
                color: white;
            }

            /* Carousel */
            .right_arrow_carousel{
                position: absolute;
                right: -100px;
            }
            .left_arrow_carousel{
                position: absolute;
                left: -100px;
            }
            .react-multi-carousel-list {
                position: initial;
            }
            
            .services_txt_underline{
                padding-left:10px;
                padding-right: 10px;
                padding-top:10px;
            }
            .services_txt_underline::hover{
                border-bottom: solid 1px #000000 !important;
            }

            .titleSection{
                font-size: 75px !important;
            }
            
            .back-transparent{
                background: none;
            }
            .list_flat{
                list-style: none !important;
            }
            `}
        />
        <MainLayout>
            <MainFullScreen />
                {
                    showCookies &&
                    <Cookies />
                }
                
                <Demo refLef={arrowLeft} refRight={arrowRight} />
                <div className='hfull' id="section_Home">
                    <Row justify={'center'}>
                        <Col span={ 20 }>   
                            <Text className='text_white font-30'>
                                Creación de productos y experiencias digitales. 
                            </Text>
                                <ul className='list_flat titleExperiences txt-white font-xxl'>
                                    <li>
                                        <span className='txtYellow'>Unique</span> experiences
                                    </li>
                                    <li>
                                        <span className='carTexYellow yellowPassionate'>Passionate</span> about UX/UI
                                    </li>
                                    <li>
                                        Design, <span className='txtYellow'>gamification</span> & IA
                                    </li>
                                    <li>
                                        Products that <span className='txtYellow'>transform</span>
                                    </li>
                                    <li>
                                        Less common, more <span className='carTexYellow yellowAlien'>alien</span>.
                                    </li>
                                </ul>
                                
                                    <Text className='txt-white font-18 textSplit'>
                                        <Fade  duration={10} top cascade>Aumenta la participación de mercado y </Fade><div className='textYellow'><Fade cascade duration={10} delay={200}>optimiza la experiencia del cliente </Fade></div>
                                        <Fade top cascade duration={10} delay={400} >trabajando</Fade><br/>
                                        <Fade top cascade duration={10} delay={500} >con nuestro equipo para crear productos y servicios digitales modernos de una manera</Fade><br/> 
                                        <Fade top cascade duration={10} delay={800} >colaborativa y </Fade><span className='textBold txt-white'>
                                        <Fade top cascade duration={10} delay={900}>centrada en el ser humano</Fade> </span>
                                        
                                    </Text>
                                
                        </Col>
                    </Row>
                </div>
                <Crew  refLef={arrowLeft} refRight={arrowRight} />
                <SectionServices />
                <Work />
                <StartProject />
                <ContactSection />
        </MainLayout>
            {/* <Cursor/> */}
        </>
    )
}

const styles = {
    header: {
        position: 'absolute',
        width: '100%'
    },
}

export default Index