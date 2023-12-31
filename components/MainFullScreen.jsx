import { Global, css } from '@emotion/react'
import { Row, Col, Button, Space } from 'antd'
import Image from 'next/image';
import { gsap } from 'gsap'
import React, { useState, useEffect } from 'react'
import { onMouseMove } from '../components/functions'
import { useSelector, useDispatch } from 'react-redux'
import parallax_logotipo from '../assets/images/parallax_logotipo.svg'


const MainFullScreen = () => {
  const hoverWork = useSelector((state) => state.web?.hoverWork)
  const hoverActive = useSelector((state) => state.web?.hoverActive)
  const hoverNvoProject = useSelector((state) => state.web?.hoverNvoProject)
  const cursorPointer = useSelector((state) => state.web?.cursorPointer)
  
  const dispatch = useDispatch()

  return (
    <>
    <Global 
      styles={css`
        .cursor-example{
          cursor: ${ cursorPointer ? "pointer" : "default"}
        }

        .mainHome{
          display: grid;
          position: relative;
          align-items: center;
          padding-top: 65px;
        }
        
        .btn_new_proyect{
          background-color: ${ hoverNvoProject == true ? "#E7FD52" : "black" };
          border-radius: 3px;
          border: solid 2px #E7FD52;
          color: ${hoverNvoProject == true ? "#00000" : "#E7FD52"};
          width: 218px;
          height: 54px;
          cursor: pointer;
        }

        .btn_work{
          background-color: ${ hoverWork == true ? "white" : "black" };
          border-radius: 3px;
          border: solid 2px #FFFFFF;
          color: ${hoverWork == true ? "black" : "white"};
          width: 218px;
          height: 54px;
          cursor: pointer;
        }
      `}
    />
    <div /* style={styles.content} */ className='hfull mainHome'>
      <Row align="bottom" justify='center'>
        <Col xs={22} sm={12} md={12} lg={9} style={styles.cols}>

          <Image src={parallax_logotipo}  style={styles.imgLogo} alt='logoparallax' />
        </Col>
        
        <Col span={24} style={styles.cols}>
          <Row justify={'center'} style={{ width:'100%'}}>
            <Col xl={6}>
              <button className='btn_work font-18'  id="btn_work" >Work</button>
            </Col>
            <Col xl={6}>
              <button className='btn btn_new_proyect font-18' id="btn_new_project" >Nuevo proyecto</button>
            </Col>
          </Row>
              {/* <Space size={100} style={styles.spaceBtns}>
                
                
                </Space> */}
            </Col>
        </Row>
    </div>
    </>
  )
}

const styles = {
  imgLogo:{
    width: '100%',
    margin:'auto',
  },
  cols:{
    height: 'calc(100vh/3)',
    textAlign: 'center',
    display:'flex'
  },
  spaceBtns:{
    marginBottom:'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}

export default MainFullScreen