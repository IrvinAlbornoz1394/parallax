import MainLayout from '@/components/layaout/MainLayout'
import { Col, Row, Typography } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import SakreAvatar from '../../assets/images/crew/sakre_avatar.png'

const ItemCrew = () => {
    const router = useRouter()

    useEffect(() => {
        const { slug } = router.query
        if(slug){
            /* alert(slug) */
        }
    }, [router])
  return (
    <MainLayout >
      <div style={{position:'absolute', top:64, bottom: 50, left:0, right:0,  display: 'flex' }}>
        <div style={{ marginTop:'auto', marginBottom:'auto', width:'100%' }}>
          <Row justify={'center'}>
            <Col xs={24} md={20}>
              <Row justify={'center'}>
                <Col >
                  <img src={SakreAvatar.src} />  
                </Col>
                <Col span={12}>
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
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>  
    </MainLayout>
  )
}

export default ItemCrew