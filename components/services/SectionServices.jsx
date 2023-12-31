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
                margin-left: 100px;
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
                            <ServiceItem nameService={item.name} key_id={item.key} idx={idx} >
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
            </Col>
        </Row>
    </section>
    </>
  )
}

export default SectionServices