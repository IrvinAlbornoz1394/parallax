import MainLayout from '@/components/layaout/MainLayout'
import { Col, Row, Space, Typography } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import SakreAvatar from '../../assets/images/crew/sakre_avatar_.png'
import { Global, css } from '@emotion/react'
import { BehanceOutlined } from '@ant-design/icons';


const ItemCrew = () => {
    const router = useRouter()

    useEffect(() => {
        const { slug } = router.query
        if(slug){
            /* alert(slug) */
        }
    }, [router])
  return (
    <>
    <Global styles={css`
      .font-16{
        font-size: 16px;
      }
      .font-60{
        font-size: 60px;
      }
      .txt-profesional_experience{
        font-size:60px;
        line-height: 70px;
        p{
          margin-bottom: 0;
        }
      }
      .mainButtonCrew{
        border:none;
        background-color: white;
        border-radius: 10px;
        color: black;
        font-size: 20px;
        font-weight: bold;
        display: inline-block;
        padding: 18px 30px;
      }
    `} />
    <MainLayout >
      <div style={{position:'absolute', top:0, bottom: 0, left:0, right:0,  display: 'flex' }}>
        <div style={{ marginTop:'auto', marginBottom:'auto', width:'100%' }}>
          <Row justify={'center'}>
            <Col xs={24} md={15} xl={20} xxl={15}>
              <Row justify={'start'}>
                <Col span={15} offset={1}>
                  <Space size={30}>
                    <img src={SakreAvatar.src} />  
                    <div style={{ marginBottom:'auto', marginTop:'auto' }}>
                      <Typography.Text style={{ fontSize:24, fontWeight:'bold', color:'white' }}>
                        Hola me llamo
                      </Typography.Text>
                      <br />
                      <Typography.Text style={{ fontSize:24, fontWeight:'bold', color:'white' }}>
                        Sakre Saenz
                      </Typography.Text>
                      <br />
                      <Typography.Text style={{ fontSize:16, color:'white' }}>
                          Polvo de estrellas &#128125; / artbat  &#128165;  / street art &#128163;   / Interestelar &#127756;
                      </Typography.Text>
                      </div>
                    </Space>
                </Col>
                <Col xs={24} md={13}>
                  <Typography.Text className='txt-white font-16' >
                    Mi experiencia profesional
                  </Typography.Text>
                </Col>
                <Col span={24}>
                  <Typography.Text className='txt-white txt-profesional_experience' >
                    <p>
                      Creative Direction / Lead
                    </p>
                    <p>
                      Product Designer/ Brand manager
                    </p> 
                    <p>
                      / Design system / UXUI / CX. 
                    </p>
                  </Typography.Text>
                </Col>
                <Col span={24}>
                  <Typography.Text className='txt-white font-16'>
                    <BehanceOutlined /> www.behance.net/sakresaenz
                  </Typography.Text>
                </Col>
                <Col span={24} style={{ textAlign:'center' }}>
                  <div className='mainButtonCrew'>
                    ¡Hasta pronto!
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>  
    </MainLayout>
    </>
  )
}

export default ItemCrew