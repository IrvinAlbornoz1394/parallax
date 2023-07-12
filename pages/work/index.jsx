import React, {useEffect, useLayoutEffect} from 'react'
import MyHeader from '../../components/layaout/MyHeader';
import Demo from '../../components/Demo'
import { Button, Col, Layout, Row, Typography, message } from 'antd'
import Footer from '../../components/layaout/footer/Footer';
import { Global, css } from '@emotion/react';
import { FacebookLoginClient } from '@greatsumini/react-facebook-login';

/* Components */
import MainLayout from '../../components/layaout/MainLayout'
import Categories from '../../components/work/Categories'
import ProjectList from '../../components/work/ProjectList'

const Index = () => {
    const {  Content } = Layout
    const { Text } = Typography 

  return (
        <MainLayout>
            <Categories />
            <ProjectList />
        </MainLayout>
  )
}

export default Index