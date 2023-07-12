import { Global, css } from '@emotion/react'
import { Button, Col, Row, Typography } from 'antd'
import React from 'react'


const Footer = () => {

  const { Title, Text } = Typography

  return (
    <>
      <Global 
        styles={css`
          .title-footer{
            margin-bottom: 25px;
          }
          .col-footer{
            margin-top:70px;
            margin-bottom: 90px;
          }
          .mb-50{
            margin-bottom:50px;
          }
        `}
      />
        <Row justify={'center'} className='row_footer'>
          <Col span={22} className='txt-white'>
            <Row justify={'space-between'}>
              <Col>
                <Row gutter={20 }>
                  <Col className='mb-50'>
                    <Button type='ghost' className='font-18 txt-white'>
                      Instagram
                    </Button>
                  </Col>
                  <Col className='mb-50'>
                    <Button type='ghost' className='font-18 txt-white'>
                      Linkedin
                    </Button>
                  </Col>
                  <Col className='mb-50'>
                  <Button type='ghost' className='font-18 txt-white'>
                      Behance
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row gutter={50}>
                  <Col className='mb-50'>
                    <Button type='ghost' className='font-18 txt-white'>
                      ©2022 Parallax
                    </Button>
                  </Col>
                  <Col className='mb-50'>
                    <Button type='ghost' className='font-18 txt-white'>
                      Privacy
                    </Button>
                  </Col>
                  <Col className='mb-50'>
                  <Button type='ghost' className='font-18 txt-white'>
                    Terms of Service
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
          
    </>
  )
}

export default Footer