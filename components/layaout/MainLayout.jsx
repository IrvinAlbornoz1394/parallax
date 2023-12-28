import { Layout } from 'antd'
import React, { useRef } from 'react'
import MyHeader from './MyHeader'
import Footer from './footer/Footer'
import Transition from './Transition'
import Demo from '../Demo'
import Loading from '../layaout/Loading'
import { useSelector } from 'react-redux'

const MainLayout = ({ style=null, ...props}) => {
    const {  Content } = Layout
    /* const arrowLeft = useRef();
    const arrowRight = useRef() */
    const showLoading = useSelector((state) => state.web.showLoading)

    return (
        <Layout className='bodyLayaout' style={style} >
            {
                showLoading && <Loading />
            }
            <Demo refLef={props?.arrowLeft} refRight={props?.arrowRight} btnNext={props?.btnNext} btnPrev={props?.btnPrev} 
            inputName={props?.inputName}
            inputEmail={props?.inputEmail}
            inputTel={props?.inputTel}
            inputCompany={props?.inputCompany}
            inputPlace={props?.inputPlace}
            inputComments={props?.inputComments}
            /* slider_contact={props?.slider_contact} */ />
            <MyHeader />
            <Content className='body'>          
                <div className='body-content-children'>
                    {props.children}
                </div>
                <Footer />
            </Content>
            {/* <Transition/> */}
            {/* <Transition/> */}
        </Layout>
    )
}

export default MainLayout