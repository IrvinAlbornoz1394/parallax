import { Col, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import ServiceItem from './ServiceItem';
import { gsap } from 'gsap';
import { Global, css } from '@emotion/react';
import { useSelector } from 'react-redux';


const SectionServices = () => {

    const {Text, Title} = Typography
    const services = useSelector((state) => state.web?.services)
    const hoverServices = useSelector((state) => state.web?.hoverServices)
    const cursorPointer = useSelector((state) => state.web?.cursorPointer)
    

   

    

    

  return (
    <>
    <Global 
        styles={css`
            .title-services{
                margin-bottom: 100px;
            }
            

            .titleServices{
                color: #ffff !important;
                margin-bottom: 0px !important;
                line-height: 1.2;
                font-weight: bold;
            }
            
            .arrowServices{
                margin-top:auto;
                margin-bottom: auto;
                margin-left:5%;
                visivility: hidden;
                opacity: 0;
                transition: opacity 0.5s;
            }
            .cardServices{
                width: 450px;
                background: var(--primary);                                     
                padding:20px;
                position: absolute;
                top: -25px;
                opacity: 0; 
              }

              .hoverServices{
                cursor:pointer;
                display:flex;
                position:relative;
              }

              .underline{
                display: block;
                margin: auto;
                height: 2px;
                width: 150px;
                background: black;
                opacity: 1;
                transform: scaleX(0) 0.3s;
              }

              .link_start_project{
                cursor: ${ cursorPointer ? "pointer" : "default"}
              }
              
        `}
    />
    <section id="section_Servicios" className='hfull'>
        <Row justify={'end'}  className='our-services' >
            <Col span={ 22 } style={{ paddingBottom:30 }}>
                <Text className='font-30 txt-white title-services' >
                    Nuestros servicios
                </Text>
            </Col>
            <Col span={22}>
                {
                    services?.map((item, idx) => (
                            <ServiceItem nameService={item.name} key_id={item.key} idx={idx}>
                                <Text className='textBold font-18'>
                                {
                                    item.description
                                }
                                </Text>
                                <p id={item.key} className='text-center textBold services_txt_underline link_start_project'>
                                        Empezar proyecto
                                    <span className='underline' id={item.key} ></span>
                                </p>
                            </ServiceItem>
                        )
                    )
                }
                {/* <ServiceItem nameService="Design UX/UI" key_id="uxui">
                    <Text className='textBold'>
                    ¿Has pensado alguna vez en que todas <br/>
                    las compras que hacemos implican un <br/> proceso de compra previo al momento <br/>
                    de la transacción?
                    </Text>
                    <p className='text-center'>
                        <span className='textBold services_txt_underline'>
                            Empezar proyecto
                        </span>
                    </p>
                </ServiceItem>
                <ServiceItem nameService="Brand Strategy" key_id="brand" >
                    <Text className='textBold'>
                    ¿Has pensado alguna vez en que todas <br/>
                    las compras que hacemos implican un <br/> proceso de compra previo al momento <br/>
                    de la transacción?
                    </Text>
                    <p className='text-center'>
                        <span className='textBold services_txt_underline'>
                            Empezar proyecto
                        </span>
                    </p>
                </ServiceItem>
                <ServiceItem nameService="Motion design" key_id="motion">
                    <Text className='textBold'>
                    ¿Has pensado alguna vez en que todas <br/>
                    las compras que hacemos implican un <br/> proceso de compra previo al momento <br/>
                    de la transacción?
                    </Text>
                    <p className='text-center'>
                        <span className='textBold services_txt_underline'>
                            Empezar proyecto
                        </span>
                    </p>
                </ServiceItem>
                <ServiceItem nameService="Software development" key_id="software">
                    <Text className='textBold'>
                    ¿Has pensado alguna vez en que todas <br/>
                    las compras que hacemos implican un <br/> proceso de compra previo al momento <br/>
                    de la transacción?
                    </Text>
                    <p className='text-center'>
                        <span className='textBold services_txt_underline'>
                            Empezar proyecto
                        </span>
                    </p>
                </ServiceItem> */}
                {/* <Row className='hoverServices'>
                    <Col lg={15} md={12} xl={15} xxl={11}>
                        <Title className='titleServices'>
                            Brand Strategy
                        </Title>
                    </Col>
                    <Col md={2} style={{ textAlign:'center', display:'flex' }}>
                        <img src='/images/Arrow_right.png' className='arrowServices' />
                    </Col>
                    <Col className='relative'>
                        <div className='cardServices' >
                            <Text className='textBold'>
                            ¿Has pensado alguna vez en que todas <br/>
                            las compras que hacemos implican un <br/> proceso de compra previo al momento <br/>
                            de la transacción?
                            </Text>
                            <p className='text-center'>
                                <span className='textBold services_txt_underline'>
                                    Empezar proyecto
                                </span>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className='hoverServices'>
                    <Col lg={15} md={12} xl={15} xxl={11}>
                        <Title className='titleServices'>
                            Motion design
                        </Title>
                    </Col>
                    <Col md={2} style={{ textAlign:'center', display:'flex' }}>
                        <img src='/images/Arrow_right.png' className='arrowServices' />
                    </Col>
                    <Col className='relative'>
                        <div className='cardServices' >
                            <Text className='textBold'>
                            ¿Has pensado alguna vez en que todas <br/>
                            las compras que hacemos implican un <br/> proceso de compra previo al momento <br/>
                            de la transacción?
                            </Text>
                            <p className='text-center'>
                                <span className='textBold services_txt_underline'>
                                    Empezar proyecto
                                </span>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className='hoverServices'>
                    <Col lg={15} md={12} xl={15} xxl={11}>
                        <Title className='titleServices'>
                            Software development
                        </Title>
                    </Col>
                    <Col md={2} style={{ textAlign:'center', display:'flex' }}>
                        <img src='/images/Arrow_right.png' className='arrowServices' />
                    </Col>
                    <Col className='relative'>
                        <div className='cardServices' >
                            <Text className='textBold'>
                            ¿Has pensado alguna vez en que todas <br/>
                            las compras que hacemos implican un <br/> proceso de compra previo al momento <br/>
                            de la transacción?
                            </Text>
                            <p className='text-center'>
                                <span className='textBold services_txt_underline'>
                                    Empezar proyecto
                                </span>
                            </p>
                        </div>
                    </Col>
                </Row> */}
            </Col>
        </Row>
    </section>
    </>
  )
}

export default SectionServices