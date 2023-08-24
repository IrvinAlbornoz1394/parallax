import { Layout } from 'antd'
import React from 'react'
import Loading from './Loading'
import MyHeader from './MyHeader'
import Footer from './footer/Footer'
import Transition from './Transition'

const MainLayout = ({...props}) => {
    const {  Content } = Layout
    return (
        <Layout>
            
            {/* <Loading /> */}
            <MyHeader />
            <Content className='body'>          
                {props.children}
                <Footer />
            </Content>
            <Transition/>
        </Layout>
    )
}

export default MainLayout