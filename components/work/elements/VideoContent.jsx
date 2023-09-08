import { Global, css } from '@emotion/react'
import { Col, Typography } from 'antd'
import React, { useState } from 'react'
import { PlayCircleOutlined } from '@ant-design/icons'

const VideoContent = ({project, ...props}) => {

    const {Text} = Typography
    const [openModal, setOpenModal] = useState(false)

    

  return (
    <>
        <Global 
            styles={css`
                .overlayPlay{
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;    
                }
                .modal-video{
                    background-color: white !important;
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    top:0;
                    left: 0;
                    z-index: 999999;
                    display: flex;
                }
                .txt-cerrar{
                    margin-left: auto;
                    margin-right: 15px; 
                    margin-top:10px;
                    z-index: 99;
                }                

                .fadeOut{
                    opacity:0;
                    width:0;
                    height:0;
                    transition: width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s;
               
               }
               .fadeIn{
                    opacity:1;
                    transition: width 0.5s, height 0.5s, opacity 0.5s 0.5s;
               
               }

            `}
        />
        <Col span={24} style={{ position:'relative' }}>
            <img src={project?.video?.preview} className='img-100' />
            <div className='overlayPlay'>
                <img src={'/images/play.svg'} alt=""  width={'100px'} height={'100px'} onClick={() => setOpenModal(true)} />
            </div>
        </Col>
        <div className={`modal-video ${openModal ? 'fadeIn' : 'fadeOut'}`}>
            <Text className='txt-cerrar' onClick={() => setOpenModal(false)}>
                Cerrar
            </Text>
            <iframe style={{ margin:'auto', position:'absolute', top:0, left:0, width:'100%', height:'100%' }}  src="https://player.vimeo.com/video/848389776?h=ebba8b2f9e"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
    </>
  )
}

export default VideoContent