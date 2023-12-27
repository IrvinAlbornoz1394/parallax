import React, { useEffect, useRef, useState } from 'react'
import MainLayout from '../components/layaout/MainLayout'
import { Button, Carousel, Col, Row, Space, Typography } from 'antd'
import { Global, css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import FormContact from '../components/contact/Form'
import SelectService from '../components/contact/SelectService'
import {updHoverBackContact} from '../redux/recuder_slices/webReducer'


const Contact = () => {
    const hoverContact = useSelector((state) => state?.web?.hoverContact)
    const nextStepContact = useSelector((state) => state?.web?.nextStepContact)
    const {Title, Text} = Typography
    const slider = useRef();
    const prev = useRef();
    const next = useRef()
    const [currentStep, setCurrentStep] = useState(1)
    const dispatch = useDispatch()

    const hoverBackContact = useSelector((state) => state?.web?.hoverBackContact)
    

    /* useEffect(() => {
        if(nextStepContact){
            slider.current.goTo(1)
            setCurrentStep(2)
        }else{
            slider.current.goTo(0)
            setCurrentStep(1)
        }
    }, [nextStepContact]) */
    

  return (
    <>
        <Global
            styles={css`
                .title-contact{
                    font-size: 70px !important;
                }
                .service-contact{
                    border-bottom: solid 1px #FFFFFF;
                    padding: 20px 10px;
                }
                .iconContent{
                    background-color: var(--primary);
                    width: 40px;
                    height: 40px;
                    display: flex;
                    border-radius:8px;
                }
                .iconContent > img{
                    margin: auto;
                }
                .text-service-contact{
                    font-size: 20px;
                    font-weight: bolder;
                }
                .service-active{
                    background-color: var(--primary);
                    border-radius: 16px;
                    .text-service-contact{
                        color: black !important;
                        font-weight: bolder;
                    }
                }
            `}
        />
        <MainLayout style={{ paddingBottom: 0 }}  slider_contact={slider} btnNext={next} btnPrev={prev}>
            <Row style={{paddingTop:'10%'}} justify={'center'}>
                <Col span={21}>
                    <Title level={1}  className='txt-white title-contact'>
                        {
                            currentStep === 1 ? "Estoy interesado en..." : "Estemos en contacto"
                        }
                        
                    </Title>        
                </Col>
                <Col  xs={20}>
                    <Carousel dots={false} autoplay={false} className='carousel-contact' id='carousel-contact'
                        ref={ref => {   
                            slider.current = ref;
                        }}
                    >
                        <div>
                            <Row justify={'center'}>
                                <Col md={14} xs={24} >
                                    <SelectService />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row justify={'center'}>
                                <Col md={14} xs={24} >
                                    <FormContact />
                                </Col>
                            </Row>
                            
                        </div>
                    </Carousel>
                    <Button style={{ display:'none'}} title='prvio' ref={prev} onClick={() => slider?.current.goTo(0)} />
                    <Button style={{ display:'none'}} title='Next' ref={next} onClick={() => slider?.current.goTo(1)} />
                </Col>
            </Row>
        </MainLayout>
    </>
  )
}

export default Contact