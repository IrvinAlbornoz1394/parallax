import { Global, css } from '@emotion/react'
import { Col, Typography } from 'antd'
import React, { useState } from 'react'
import { PlayCircleOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import ImgPlay from '../../../assets/images/play.svg'


const VideoContent = ({project, ...props}) => {

    const {Text} = Typography
    const dispatch = useDispatch()
    
    /* const [openModal, setOpenModal] = useState(false) */
    const openModal = useSelector((state) => state?.web?.openVideo)
    

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
                    z-index: 100;
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
            
               .playPng{
                    height; 300px;
                    width: 300px;
               }
               @media only screen and (max-width: 768px) {
                /* For mobile phones: */
                .playPng{
                    width: 20% !important;
                   }
            }

            `}
        />
        <Col span={24} style={{ position:'relative' }}>
            <img src={project?.video?.preview} className='img-100' />
            <div className='overlayPlay'>
                <img className='playPng' id="playPng" src={ImgPlay.src}  alt=""  />
            </div>
        </Col>
        <div className={`modal-video ${openModal ? 'fadeIn' : 'fadeOut'}`}>
            <Text className='txt-cerrar' id="closeVideo" >
                Cerrar
            </Text>
            <iframe style={{ margin:'auto', position:'absolute', top:0, left:0, width:'100%', height:'100%' }}  src="https://player.vimeo.com/video/848389776?h=ebba8b2f9e"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
    </>
  )
}

export default VideoContent