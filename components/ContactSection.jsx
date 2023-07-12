import { Global, css } from '@emotion/react'
import { Col, Row, Typography } from 'antd'
import React from 'react'


const ContactSection = () => {

    const { Text, Title } = Typography

  return (
    <>
      <Global 
        styles={css`
          .text-email, .text-address, .text-phone-number{
            margin-bottom: 10px !important;
          }
        `}
      />
      <Row justify={'center'} id="section_Contacto">
          <Col span={20} className='col-footer'>  
              <Row>
                <Col>
                  <p className='titleDescription title-footer'>
                        ¡Estemos en contacto!
                  </p>
                    <smal className="txt-white font-30">
                        E-mail
                    </smal>
                    <Title className='text-email txt-white font-xxl'>
                      hola@byparallax.com
                    </Title>
                </Col>
                <Col>
                  <smal className="txt-white font-30">
                        Located
                  </smal>
                  <Title className='text-address txt-white font-xxl'>
                      Mérida, <br/>
                      Yucatán, México
                    </Title>
                </Col>
                <Col>
                  <smal className="txt-white font-30">
                        Phone Number
                  </smal>
                  <Title className='text-phone-number txt-white font-xxl'>
                    +52 999 999 9999    
                  </Title>
                </Col>
              </Row>
            </Col>
      </Row>
    </>
  )
}

export default ContactSection