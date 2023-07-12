import { Global, css } from '@emotion/react'
import { Button, Col, Row, Typography } from 'antd'
import { gsap } from 'gsap'
import React, { useEffect } from 'react'
import { useLayoutEffect } from 'react'
import Parallax from 'parallax-js'

const StartProject = () => {

    const { Text, Title } = Typography     
    
    const Parallax = require('parallax-js')


    useEffect(() => {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
    }, [])

    return (
        <>
            <Global 
            styles={css`
                .section_ux_ui{
                    /* background-image: url(/images/elemento_ux_iu.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 40%; */
                }

                .overlay-start-project{
                    position: absolute;
                    background-color: rgba(0, 0 ,0 , .10);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    top:0
                }
                .titleStart{
                    margin-top:80px;
                }
                .overlay-btn{
                    position:absolute;
                    top:0;
                    height:100%;
                    width: 100%;
                    display:flex;
                }
                .btn-start-project{
                    margin:auto;
                    cursor:pointer;
                    font-size: 16px;
                }

                .img_effect{
                    position: absolute;
                    transition: transform 0.5s;
                    -webkit-transition: transform 0.5s;
                    -moz-transition: transform 0.5s;
                    -o-transition: transform 0.5s;
                }
            `}
        />
        <section id="section_ux_ui" className='hfull section_ux_ui'>
            <div id="scene" style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <img  data-depth="0.7" id="img_effect" className="img_effect" className src='/images/elemento_ux_iu.png' className='img_effect'
                    style={{ width: '500px', margin: 'auto !important', textAlign: 'center' }}
                 />
            </div>
        <div style={{ position:'relative', width:'100%' }}>
            <Row justify={'center'} >
                <Col span={20}>
                    <Title className='titleSection txt-white titleStart'> 
                        ¿Qué podemos <br/>
                        hacer por ti?
                    </Title>
                </Col>
            </Row>
            <div className='overlay-btn'>
                <button className='btn-primary btn-start-project textBold' >
                    ¡Empecemos un proyecto!
                </button>
            </div>
            {/* <img className='img-full-screen' src='/images/back_comenzar2.jpg' />
            
             */}
        </div>
        </section>
        </>
    )
}

export default StartProject