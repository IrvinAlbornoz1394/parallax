import React, { forwardRef, useState, useEffect, useImperativeHandle, useLayoutEffect, useRef } from 'react'
import { Col, Layout, Progress, Row, Typography } from 'antd'
import { Global, css } from '@emotion/react';
import { gsap } from 'gsap';
import { Fade } from "react-awesome-reveal";
/* import { SplitText } from '../libs/SplitText.min' */
/* import { SplitText } from '../libs/SplitText.min' */
import { ScrollTrigger } from '../libs/ScrollTrigger.min'


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

    /* useEffect(() => {
    /* useEffect(() => {

        gsap.registerPlugin(ScrollTrigger, SplitText);
        //gsap.config({ trialWarn: false });
        gsap.set(".textContent", { autoAlpha: 1 });

        
        let animation = gsap.timeline({
            scrollTrigger: {
              trigger: ".textContent",
              toggleClass: "someCoolClass",
              toggleActions: "restart pause resume pause"
            }
          });
    
        var splitHide = new SplitText("#textRevel", { type: "words", wordsClass: "hide" });
        let split = new SplitText("#textRevel", {
            type: "words,lines",
            wordsClass: "words",
            linesClass: "lines"
        })

        //Opcion1
        //Opcion1
        animation.from(split.words, {
            duration: 0.5,
            y: -100,
            stagger: 0.010,
            delay: .005,
            stagger:{
                from:"start", //try "center" and "edges"
                each:0.011
            }
        });


        }, [])  */
        }, [])  */
    


 
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
                color: #FFF;
                font-family: SometypeMono-Regular !important;
                font-size: 105px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
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

            .lineHide {
                position:absolute relative;
                overflow: hidden !important;
                width:100%;
            }

              #textHolder {
                top: 50px;
                left: 30px;
                width: 900px;
                color: white;
                font-family: "Signika Negative", sans-serif; 
                position: relative;
                overflow: hidden;
              }


              #someCoolClass {
                position: relative;
                top: 50px;
                left: 70px;
                width: 600px;
                color: red;
                font-family: "Signika Negative", sans-serif; 
              }

              .textSplit > .lines{
                line-height: 20px;
                overflow:hidden;
              }

            `}
        />
        <MainLayout arrowLeft={arrowLeft} arrowRight={arrowRight}>
            <MainFullScreen />
                {
                    showCookies &&
                    <Cookies />
                }
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
                                <div className='textContent'>
                                    <div id="textHolder">
                                        <p className='txt-white font-18 textSplit' id="textRevel">
                                            Aumenta la participación de mercado y optimiza la experiencia del cliente trabajando 
                                            con nuestro equipo para crear productos y servicios digitales modernos de una manera 
                                            colaborativa y centrada en el ser humano
                                        </p>
                                    </div>
                                </div>
                                
                        </Col>
                    </Row>
                </div>
                <Crew refLef={arrowLeft} refRight={arrowRight} />
                <Crew refLef={arrowLeft} refRight={arrowRight} />
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