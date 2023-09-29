import React, {useEffect, useLayoutEffect, useState} from 'react'
import MyHeader from '../../components/layaout/MyHeader';
import Demo from '../../components/Demo'
import { Button, Col, Layout, Row, Typography, message } from 'antd'
import Footer from '../../components/layaout/footer/Footer';
import { Global, css } from '@emotion/react';
import { FacebookLoginClient } from '@greatsumini/react-facebook-login';
import { setCatWorkSelected, loadServices } from '../../redux/recuder_slices/webReducer'

/* Components */
import MainLayout from '../../components/layaout/MainLayout'
import Categories from '../../components/work/Categories'
import ProjectList from '../../components/work/ProjectList'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
    const {  Content } = Layout
    const { Text } = Typography 
    
    const catWorkSelected = useSelector((state) => state.web.catWorkSelected)
    const route = useRouter()
    const dispatch = useDispatch()
    

    useEffect(() => {
      if(window?.location?.hash){
        dispatch(setCatWorkSelected(window?.location?.hash.replace("#","")))
      }else{
        dispatch(setCatWorkSelected(""))
      }
    }, [route])

    useLayoutEffect(() => {    
      dispatch(loadServices())
  }, []);
    

  return (
        <MainLayout style={{ paddingBottom: 100 }} >
            <Categories />
            <ProjectList />
        </MainLayout>
  )
}

export default Index