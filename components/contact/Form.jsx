import { Global, css } from '@emotion/react'
import { Button, Col, Form, Image, Input, Row } from 'antd'
import React from 'react'
import User from '../../assets/images/contact/user_icon.png'
import Email from '../../assets/images/contact/email.png'
import Phone from '../../assets/images/contact/phone.png'
import Company from '../../assets/images/contact/company.png'
import Marker from '../../assets/images/contact/marker.png'
import { LeftOutlined } from '@ant-design/icons';


const FormContact = ({inputName=null, inputEmail=null, inputTel=null, inputCompany=null, inputPlace=null, inputComments=null}) => {
    const [form] = Form.useForm()


    const Prefix = ({icon}) => (
        <div className='boxPrefix'>
            <Image src={icon}  alt='prefix' />
        </div>
    )


    

    return (
        <>
        <Global 
            styles={css`
                .boxPrefix{
                    width: 25px;
                    height: 25px;
                    background-color: var(--primary);
                    display: flex;
                    border-radius: 8px;
                    .ant-image{
                       margin: auto;
                       max-width: 15px;
                       max-height: 15px;
                       img{
                        max-height: 16px
                       }
                    }
                }
                .item-form-content{
                    border-bottom: solid 1px white;
                    .ant-form-item{
                        margin-bottom: 5px;
                    }
                    .noBackground{
                        background: transparent;
                        border: none;
                        input{
                            background: transparent;
                            padding-left:20px;
                        }
                    }
                    input{
                        color: #fff !important;
                    }
                    input::placeholder {
                        color: white;
                        opacity: 1;
                      }
                }
                .ant-input-affix-wrapper-focused{
                    outline: none !important;
                    -webkit-box-shadow: none !important;
                    -moz-box-shadow: none !important;
                    box-shadow: none !important;
                }
                textarea{
                    color: #fff !important;
                    padding-left:20px;
                    border: none !important;
                    overflow: auto !important;
                    outline: none !important;
                    -webkit-box-shadow: none !important;
                    -moz-box-shadow: none !important;
                    box-shadow: none !important;
                    resize: none !important;
                }
                .btnContactBack{
                    border: none;
                    border-radius: 3px;
                    padding: 0px;
                    font-size: 16px;
                    font-weight: bolder;
                    color: white;
                    text-align: left;
                }

                .btnContact{
                    background-color: var(--primary);
                    border: none;
                    border-radius: 3px;
                    padding: 00px 50px;
                    font-size: 16px;
                    font-weight: bolder;
                    color: black;
                }
                .btnContact:hover{
                    color: black;
                    border: none;
                }
            `}
        />
        <Form>
            <Row gutter={[20,30]} justify={'space-between'}>
                <Col xs={24} md={24} >
                    <div className='item-form-content formContactInput' id='name' >
                        <Form.Item >
                            <Input ref={inputName} id='input_name' placeholder='Nombre y apellido' className='noBackground' prefix={<Prefix icon={User.src} />} />
                        </Form.Item>
                    </div>
                </Col>
                <Col xs={24} md={12} id='email' className='formContactInput'>
                    <div className='item-form-content'>
                        <Form.Item>
                            <Input ref={inputEmail} id='input_email' placeholder='Email' className='noBackground' prefix={<Prefix icon={Email.src} />} />
                        </Form.Item>
                    </div>
                </Col>
                <Col xs={24} md={12} className='formContactInput' id='tel'>
                    <div className='item-form-content'>
                        <Form.Item>
                            <Input ref={inputTel} id='input_tel' placeholder='Teléfono' className='noBackground' prefix={<Prefix icon={Phone.src} />} />
                        </Form.Item>
                    </div>
                </Col>
                <Col xs={24} md={12} className='formContactInput' id='company'>
                    <div className='item-form-content'>
                        <Form.Item>
                            <Input ref={inputCompany} id='input_company' placeholder='Nombre de tu empresa' className='noBackground' prefix={<Prefix icon={Company.src} />} />
                        </Form.Item>
                    </div>
                </Col>
                <Col xs={24} md={12} className='formContactInput' id='place'>
                    <div className='item-form-content'>
                        <Form.Item>
                            <Input  ref={inputPlace} id='input_place' placeholder='Lugar de residencia' className='noBackground' prefix={<Prefix icon={Marker.src} />} />
                        </Form.Item>
                    </div>
                </Col>
                <Col xs={24} md={24}>
                    <div className='item-form-content'>
                        <Form.Item style={{paddingLeft:10}}>
                            <Row>
                                <Col span={1}>
                                    <Prefix icon={Marker.src} />
                                </Col>
                                <Col span={23}>
                                    <Input.TextArea ref={inputComments} id='comments' autoSize placeholder='Lugar de residencia' className='formContactInput noBackground' prefix={<Prefix icon={Marker.src} />} />
                                </Col>
                            </Row>
                        </Form.Item>
                    </div>
                </Col>
                <Col>
                    <Button htmlType="button" type='link'  id="btnBackContact" className="btnContactBack">
                       <LeftOutlined />  Regresar
                    </Button>
                </Col>
                <Col>
                    <Button htmlType="submit" className="btnContact btnSendContact" id="btnSendContact">
                        Enviar
                    </Button>
                </Col>
            </Row>
        </Form>
        </>
      )
}

export default FormContact