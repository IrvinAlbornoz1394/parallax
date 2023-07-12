import { Global, css } from '@emotion/react'
import { Col, Row, Typography } from 'antd'
import React from 'react'

const Work = () => {

    const { Text, Title } = Typography 

  return (
    <>
        <Global 
            styles={css`
                .overlay{
                    position: absolute;
                    background-color: rgba(0, 0 ,0 , .40);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    top:0
                }
                .title-work{
                    margin: auto !important;
                }
                .back_main_work{
                    position:relative;
                    background-image: url(/images/kikert_parallax.jpg);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                
            `}
        />
        <section id="section_Work" className='hfull back_main_work'>
            <div className='overlay'>
                    <Title className='title-work bold txt-white font-xxl'>
                        Work
                    </Title>
            </div>
        </section>
        {/* <Row justify={'center'}>
            <Col span={20} style={{ paddingTop: 50, paddingBottom:30 }}>
                <Text className='titleDescription'>
                    Work
                </Text>
            </Col>
        </Row> */}
        {/* <div className='containt-work'>
            <img src='/images/kikert_parallax.jpg' style={{ opacity:0 }} />
            <div className='overlay'>
                    <Title className='title-work bold txt-white'>
                        Work
                    </Title>
            </div>
        </div> */}
    </>
  )
}

export default Work