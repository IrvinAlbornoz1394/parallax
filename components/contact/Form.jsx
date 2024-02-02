import { Global, css } from '@emotion/react'
import { Button, Col, Form, Image, Input, Row, message } from 'antd'
import React, { useState } from 'react'
import User from '../../assets/images/contact/user_icon.png'
import Email from '../../assets/images/contact/email.png'
import Phone from '../../assets/images/contact/phone.png'
import Company from '../../assets/images/contact/company.png'
import Marker from '../../assets/images/contact/marker.png'
import { LeftOutlined } from '@ant-design/icons';
import {setCursorDisable, setHoverActive, setCursorPointer} from '../../redux/recuder_slices/webReducer'
import emailjs from 'emailjs-com';

import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import gsap from 'gsap'


const FormContact = ({inputName=null, inputEmail=null, inputTel=null, inputCompany=null, inputPlace=null, inputComments=null, btnSubmit=null}) => {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    
    let service_selected = useSelector((state) => state?.web?.serviceSelected)

    const [sending, setSending] = useState(false)

    const ruleRequired = {required: true, message: '*Este campo es requerido*'}


    const Prefix = ({icon}) => (
        <div className='boxPrefix'>
            <Image src={icon}  alt='prefix' />
        </div>
    )
    
    const SendMailContact = async (values) => {

        dispatch(setCursorDisable(true))
        dispatch(setHoverActive(false))
        dispatch(setCursorPointer(false))
        setSending(true)
        gsap.to(".ball", {display:'block', duration:0.1})
        gsap.to(".cursor-example", {width:10, height:10, xPercent: 0, yPercent: 0})
        
        values['to_name'] = 'Sakre'
        values['service'] = service_selected == 'mark' ? 'Desarrollar una marca' :
                            service_selected == 'uxui' ? 'Diseño UX/UI' :
                            service_selected == 'dev' ? 'Desarrollo de software' :
                            service_selected == 'otro' && 'otro tipo de servicio';

        try {
            
            let resp = await axios({
                method: 'post',
                url: 'https://api.emailjs.com/api/v1.0/email/send',
                data: {
                    service_id: 'service_rg9sqgc',
                    template_id: 'template_6kxetbx',
                    user_id: '9v3W6L1IB4QqSTGju',
                    template_params: values
                }
              });

            if (resp.status === 200){
                message.success("Mensaje enviado, pronto nos pondremos en contacto contigo")
            }
            form.resetFields()
            dispatch(setCursorDisable(false))
            dispatch(setHoverActive(false))
            dispatch(setCursorPointer(false))
            setSending(false)
            gsap.to(".ball", {display:'none', duration: 0.01})
            gsap.to(".cursor-example", {width:50, height:50, xPercent: -50, yPercent: -50})
        } catch (error) {
            console.log('error', error)
        }
        
    }

    const sendMailContact_ =  async (values) => {
        console.log(values)
        try {
            const { data, error } = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'irvinalbornoz1394@gmail.com',
                subject: 'Hello World',
                html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
              });
              console.log('data', data)    
              console.log('errorq', error)
        } catch (error) {
            console.log('error', error)
        }
        
        
        console.log('error', error)
        console.log('data', data)
      if (error) {
        console.log(error)
      }
    }

    

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
                    .ant-form-item{
                        margin-bottom: 5px;
                    }
                    .ant-form-item-control-input{
                        border-bottom: solid 1px white;
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
        <Form form={form} onFinish={SendMailContact} >
            <Row gutter={[20,30]} justify={'space-between'}>
                <Col xs={24} md={24} >
                    <div className='item-form-content formContactInput' id='name' >
                        <Form.Item name={'name'} rules={[ruleRequired]} >
                            <Input ref={inputName} id='input_name' placeholder='Nombre y apellido*' className='noBackground' prefix={<Prefix icon={User.src} />} />
                        </Form.Item>
                    </div>
                </Col>
                <Col xs={24} md={12} id='email' className='formContactInput'>
                    <div className='item-form-content'>
                        <Form.Item name={'email*'} rules={[ruleRequired]}>
                            <Input ref={inputEmail} id='input_email' placeholder='Email' className='noBackground' prefix={<Prefix icon={Email.src} />} />
                        </Form.Item>
                    </div>
                </Col>
                <Col xs={24} md={12} className='formContactInput' id='tel' >
                    <div className='item-form-content'>
                        <Form.Item name={'tel'} rules={[ruleRequired]}>
                            <Input ref={inputTel} id='input_tel' placeholder='Teléfono' className='noBackground' prefix={<Prefix icon={Phone.src} />} />
                        </Form.Item>
                    </div>
                </Col>
                <Col xs={24} md={12} className='formContactInput' id='company'>
                    <div className='item-form-content'>
                        <Form.Item name={'company'}>
                            <Input ref={inputCompany} id='input_company' placeholder='Nombre de tu empresa' className='noBackground' prefix={<Prefix icon={Company.src} />} />
                        </Form.Item>
                    </div>
                </Col>
                <Col xs={24} md={12} className='formContactInput' id='place'>
                    <div className='item-form-content' >
                        <Form.Item name={'location'}>
                            <Input  ref={inputPlace} id='input_place' placeholder='Lugar de residencia' className='noBackground' prefix={<Prefix icon={Marker.src} />} />
                        </Form.Item>
                    </div>
                </Col>
                <Col xs={24} md={24}>
                    <div className='item-form-content'>
                        <Form.Item rules={[ruleRequired]} style={{paddingLeft:10}} name={'message'}>
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
                    <Button htmlType="button"  ghost id="btn_back_contact" className="btnContactBack">
                       <LeftOutlined />  Regresar
                    </Button>
                </Col>
                <Col>
                    <Button loading={sending} ref={btnSubmit} htmlType="submit" className="btnContact btnSendContact" id="btnSendContact">
                        Enviar
                    </Button>
                </Col>
            </Row>
        </Form>
        </>
      )
}

export default FormContact