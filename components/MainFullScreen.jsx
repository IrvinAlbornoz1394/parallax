import { Global, css } from '@emotion/react'
import { Row, Col, Button, Space } from 'antd'
import { gsap } from 'gsap'
import React, { useState, useEffect } from 'react'
import { onMouseMove } from '../components/functions'
import { useSelector, useDispatch } from 'react-redux'


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
          background-color: ${ hoverNvoProject == true ? "white" : "black" };
          border-radius: 3px;
          border: solid 2px #FFFFFF;
          font-size: 16px;
          color: ${hoverNvoProject == true ? "#00000" : "#FFFFFF"};
          font-weight: bold;
          width: 218px;
          height: 54px;
        }

        .btn_work{
          background-color: ${ hoverWork == true ? "white" : "black" };
          border-radius: 3px;
          border: solid 2px #FFFFFF;
          color: ${hoverWork == true ? "#00000" : "#FFFFFF"};
          font-size: 16px;
          font-weight: bold;
          width: 218px;
          height: 54px;
        }
      `}
    />
    <div /* style={styles.content} */ className='hfull mainHome'>
      <Row align="bottom" justify='center'>
        <Col xs={22} sm={12} md={12} lg={9} style={styles.cols}>
          <img src='/images/parallax_logotipo.svg' style={styles.imgLogo} />
        </Col>
        <Col span={24} style={styles.cols}>
              <Space size={100} style={styles.spaceBtns}>
                <button className='btn_work textBold'  id="btn_work"  /* onMouseEnter={() => hoverBtnWork() } onMouseLeave={() => setHoverWork(false)} */ >Work</button>
                <button className='btn btn_new_proyect textBold' id="btn_new_project" >Nuevo proyecto</button>
                </Space>
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