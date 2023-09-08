import { Layout } from 'antd'
import React, { useRef } from 'react'
import MyHeader from './MyHeader'
import Footer from './footer/Footer'
import Transition from './Transition'
import Demo from '../Demo'

const MainLayout = ({...props}) => {
    const {  Content } = Layout
    /* const arrowLeft = useRef();
    const arrowRight = useRef() */

    return (
        <Layout className='bodyLayaout'>
            <Demo refLef={props?.arrowLeft} refRight={props?.arrowRight} />
            <MyHeader />
            <Content className='body'>          
                {props.children}
                <Footer />
            </Content>
            {/* <Transition/> */}
        </Layout>
    )
}

export default MainLayout