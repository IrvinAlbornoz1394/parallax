import React, { useRef } from 'react'
import MainLayout from '../components/layaout/MainLayout'
import { Button, Carousel, Col, Row, Space, Typography } from 'antd'
import { Global, css } from '@emotion/react'


const contact = () => {
    const {Title, Text} = Typography
    const slider = useRef();


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
                    background-color: #F3FF6D;
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

                }
            `}
        />
        <MainLayout style={{ paddingBottom: 0 }} >
            <Row style={{marginTop:'10%'}} justify={'center'}>
            <Col span={12}>
                    <Button onClick={() => {slider.current.goTo(2)}}>
                        ok
                    </Button>
                </Col>
                <Col span={21}>
                    <Title level={1}  className='txt-white title-contact'>
                        Estoy interesado en...
                    </Title>        
                </Col>
                <Col md={12} xs={24}>
                    <Carousel autoplay={false} dots={false}
                        ref={ref => {   
                            slider.current = ref;
                        }}
                    >
                        <div>
                            <Row gutter={20}>
                                <Col md={12} xs={24}>
                                    <div className='service-contact'>
                                        <Space>
                                        <div className='iconContent'>
                                            <img src='/images/R_marca.svg'  />
                                        </div>
                                        <div className='txt-white text-service-contact'>
                                            Desarrollar una marca
                                        </div>
                                        </Space>
                                    </div>
                                </Col>
                                <Col md={12} xs={24}>
                                    <div className='service-contact'>
                                        <Space>
                                        <div className='iconContent'>
                                            <img src='/images/R_marca.svg'  />
                                        </div>
                                        <div className='txt-white text-service-contact'>
                                            Desarrollar una marca
                                        </div>
                                        </Space>
                                    </div>
                                </Col>
                                <Col md={12} xs={24}>
                                    <div className='service-contact'>
                                        <Space>
                                        <div className='iconContent'>
                                            <img src='/images/R_marca.svg'  />
                                        </div>
                                        <div className='txt-white text-service-contact'>
                                            Desarrollar una marca
                                        </div>
                                        </Space>
                                    </div>
                                </Col>
                                <Col md={12} xs={24}>
                                    <div className='service-contact'>
                                        <Space>
                                        <div className='iconContent'>
                                            <img src='/images/R_marca.svg'  />
                                        </div>
                                        <div className='txt-white text-service-contact'>
                                            Desarrollar una marca
                                        </div>
                                        </Space>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row gutter={20}>
                                <Col md={12} xs={24}>
                                    <div className='service-contact'>
                                        <Space>
                                        <div className='iconContent'>
                                            <img src='/images/R_marca.svg'  />
                                        </div>
                                        <div className='txt-white text-service-contact'>
                                            Desarrollar una marca
                                        </div>
                                        </Space>
                                    </div>
                                </Col>
                                <Col md={12} xs={24}>
                                    <div className='service-contact'>
                                        <Space>
                                        <div className='iconContent'>
                                            <img src='/images/R_marca.svg'  />
                                        </div>
                                        <div className='txt-white text-service-contact'>
                                            Desarrollar una marca
                                        </div>
                                        </Space>
                                    </div>
                                </Col>
                                <Col md={12} xs={24}>
                                    <div className='service-contact'>
                                        <Space>
                                        <div className='iconContent'>
                                            <img src='/images/R_marca.svg'  />
                                        </div>
                                        <div className='txt-white text-service-contact'>
                                            Desarrollar una marca
                                        </div>
                                        </Space>
                                    </div>
                                </Col>
                                <Col md={12} xs={24}>
                                    <div className='service-contact'>
                                        <Space>
                                        <div className='iconContent'>
                                            <img src='/images/R_marca.svg'  />
                                        </div>
                                        <div className='txt-white text-service-contact'>
                                            Desarrollar una marca
                                        </div>
                                        </Space>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </MainLayout>
    </>
  )
}

export default contact