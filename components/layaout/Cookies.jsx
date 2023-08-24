import { Global, css } from '@emotion/react'
import { Typography } from 'antd'
import { gsap } from 'gsap'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Cookies = () => {
  const hoverCookies = useSelector((state) => state.web?.hoverCookies)
  

  const { Text } = Typography


  useEffect(() => {
    if(hoverCookies == true){  
        gsap.to(`span#underline_cookies`, {duration: "0.3", transform: "scaleX(1)"});
    }else{
        gsap.to(`span#underline_cookies`, {duration: "0.3", transform: "scaleX(0)"});   
    }  
}, [hoverCookies])

  return (
    <>
      <Global 
        styles={css`
          .coockiesCard{
            position: fixed;
            z-index:99;
            bottom: 50px;
            right: 50px;
            width: 440px;
            border: solid 1px #fff;
            border-radius: 15px;
            padding: 30px;
            background: black;
            box-shadow: 1px 7px 10px -7px rgba(255,255,255,0.75);
            -webkit-box-shadow: 1px 7px 10px -7px rgba(255,255,255,0.75);
            -moz-box-shadow: 1px 7px 10px -7px rgba(255,255,255,0.75);
          }
          .txt_cookies{
            margin-bottom:20px;
          }
          .accept_cookies{
            cursor:pointer;
          }


          .underline_cookies{
            display: block;
            height: 1px;
            background-color: var(--white);
            opacity: 1;
            transform: scaleX(0) 0.3s;
        }
        `
        }
      />
      <div className='coockiesCard font-18'>
          <p className='txt-white txt_cookies'>
            Utilizamos cookies y seguimiento analítico de sitios web. 
            <span className='textYellow textBold'>Haga clic aquí</span> para más información.
          </p>
          <div style={{ display:'inline-block' }}>
            <Text className='txt-white accept_cookies font-18' id="accept_cookies">Estoy de acuerdo</Text>
            <span className='underline_cookies' id="underline_cookies"></span>
          </div>
      </div>
    </>
  )
}

export default Cookies