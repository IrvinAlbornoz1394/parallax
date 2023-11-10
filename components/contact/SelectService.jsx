import { Col, Row, Space } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

const SelectService = () => {

    const hoverContact = useSelector((state) => state?.web?.hoverContact)
    
  return (
    <Row gutter={20}>
        <Col md={12} xs={24}>
            <div className={`service-contact ${hoverContact.mark && 'service-active'}`} id="mark">
                <Space>
                <div className='iconContent'>
                    <img src='/images/R_marca.svg'  />
                </div>
                <div className='txt-white text-service-contact'>
                    Desarrollar una marca
                </div>
                </Space>
            </div>
        </Col>
        <Col md={12} xs={24}>
            <div className={`service-contact ${hoverContact.uxui && 'service-active'}`} id="uxui">
                <Space>
                <div className='iconContent'>
                    <img src='/images/R_marca.svg'  />
                </div>
                <div className='txt-white text-service-contact'>
                    Necesito diseño UX / UI
                </div>
                </Space>
            </div>
        </Col>
        <Col md={12} xs={24}>
            <div className={`service-contact ${hoverContact.dev && 'service-active'}`} id="dev">
                <Space>
                <div className='iconContent'>
                    <img src='/images/R_marca.svg'  />
                </div>
                <div className='txt-white text-service-contact'>
                    Desarrollo de software
                </div>
                </Space>
            </div>
        </Col>
        <Col md={12} xs={24}>
            <div className={`service-contact ${hoverContact.otro && 'service-active'}`} id="otro">
                <Space>
                <div className='iconContent'>
                    <img src='/images/R_marca.svg'  />
                </div>
                <div className='txt-white text-service-contact'>
                    Otro
                </div>
                </Space>
            </div>
        </Col>
    </Row>
  )
}

export default SelectService