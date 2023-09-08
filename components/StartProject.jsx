import { Global, css } from '@emotion/react'
import { Button, Col, Row, Typography } from 'antd'
import { gsap } from 'gsap'
import React, { useEffect } from 'react'
import { useLayoutEffect } from 'react'
import Parallax from 'parallax-js'
import { useSelector } from 'react-redux'

const StartProject = () => {

    const { Text, Title } = Typography     
    const hoverNvoProject = useSelector((state) => state.web?.hoverNvoProject)
    const hoverStartProject = useSelector((state) => state.web?.hoverStartProject)


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
                    background-color: ${ hoverStartProject == true ? "#E7FD52" : "transparent" };
                    border-radius: 3px;
                    border: solid 2px #E7FD52;
                    color: ${hoverStartProject == true ? "#00000" : "#E7FD52"};
                    width: 218px;
                    height: 54px;
                    cursor: pointer;
                    margin:auto;
                    font-size: 18px;

                    width: 218.842px;
                    height: 54px;
                    flex-shrink: 0;

                }

                .img_effect{
                    position: absolute;
                    transition: transform 0.5s;
                    -webkit-transition: transform 0.5s;
                    -moz-transition: transform 0.5s;
                    -o-transition: transform 0.5s;
                }

                .title-que-podemos{
                    color: #FFF;
                    font-size: 105px !important;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }
            `}
        />
        <section id="section_ux_ui" className='hfull section_ux_ui' style={{ position:'relative' }}>
            <div id="scene" style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <img  data-depth="1" id="img_effect" className="img_effect" className src='/images/uxui_fondo_1360x768.png' className='img_effect'
                    style={{ width: '500px', margin: 'auto !important', textAlign: 'center' }}
                 />
            </div>
        <div style={{ position:'relative', width:'100%' }}>
            <Row justify={'center'} >
                <Col span={20}>
                    <Title className='txt-white titleStart title-que-podemos'> 
                        ¿Qué podemos <br/>
                        hacer por ti?
                    </Title>
                </Col>
            </Row>
            <div className='overlay-btn'>
                <button className='btn-start-project' id="startProject">
                    Start trip!
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