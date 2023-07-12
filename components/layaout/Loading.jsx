import { Typography, Progress } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';
import { Global, css } from '@emotion/react';

const Loading = () => {
    /* Ant */
    const { Title, Text } = Typography

    /* Estatos locales */
    const [uploadOrDownloadCount, setUploadOrDownloadCount] = useState(10);
    
    /* Redux */
    const services = useSelector((state) => state.web?.services)

    const counter = () => {
        const timer = setInterval(() => {
            setUploadOrDownloadCount(
              (beforeValue) => (beforeValue >= 100 ? 100 
                                : beforeValue + 1));
          }, 1500/220);
          return () => {
            clearInterval(timer);
          };
    }

    useEffect(() => {
        counter()
        const timer = setTimeout(() => {
            entranceAnimation()
        }, 2800);
        return () => clearTimeout(timer);
    }, [])

    const entranceAnimation = () => {
        gsap.to(`#title-loading`, {duration: .6, opacity: 0, yPercent: -100});
        gsap.to(`#textPercent`, {duration: .6, opacity: 0, yPercent: -100});
        gsap.to(`#progressbar`, {duration: .6, opacity: 0, yPercent: -100});
        

        const tl = gsap.timeline();
        tl.to(
            ".loading-div",
            {
              yPercent: -100,
              duration: 2.0,
              ease: "power4.inOut"
            },
            0
          )
    };

    return (
        <>
        <Global
            styles={css`
                .loading-div{
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    background-color: #000;
                    overflow: hidden;
                    z-index: 200;
                    display: grid;
                }
                .textPercent{
                    color: #ffff;
                    font-size: 100px;
                    margin-top: auto;
                    z-index: 10;
                }
            `}
        />
        <div className="loading-div">
            <div style={{  position: 'absolute', height: '100vh', width:'100%', borderBottom:'solid 1px #ffffff3b;' , display: 'flex' }}>
                <div style={{ margin:'auto' }}>
                    <Title id="title-loading" style={{ color:'white', marginBottom:0 }}>
                        Parallax
                    </Title>
                    <Progress
                        id="progressbar"
                        percent={uploadOrDownloadCount}
                        strokeWidth={1}
                        showInfo={false}
                        strokeColor={'#F3FF6D'}
                    />
                </div>
            </div>
            <Text className='textPercent' id="textPercent">
                { uploadOrDownloadCount }%
            </Text>
        </div>
        </>
    )
}

export default Loading