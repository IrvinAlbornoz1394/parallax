import { Layout } from 'antd'
import React from 'react'
import Loading from './Loading'
import MyHeader from './MyHeader'
import Footer from './footer/Footer'

const MainLayout = ({...props}) => {
    const {  Content } = Layout
    return (
        <Layout>
            <Loading />
            <MyHeader />
            <Content className='body'>          
                {props.children}
                <Footer />
            </Content>
        </Layout>
    )
}

export default MainLayout