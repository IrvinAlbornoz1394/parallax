import { Col, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import ProjectList from './ProjectList'
import { Global, css } from '@emotion/react'
import { useSelector } from 'react-redux'

const Categories = () => {
    
    const catWorkSelected = useSelector((state) => state.web.catWorkSelected)
    const services = useSelector((state) => state.web?.services)
    
    
    useEffect(() => {
      console.log('catWorkSelected=>',catWorkSelected)
    }, [catWorkSelected])
    

    


    const {Text, Title} = Typography
    return (
        <>
            <Global
                styles={css`
                    .listCategoriesContent{
                        margin-top: 100px;
                        margin-bottom:50px;
                    }
                    .catSelected{
                        color: var(--primary);
                        font-size: 24px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        text-decoration: underline;
                        text-underline-offset: 8px;
                    }
                    .catSelected{
                        color: var(--primary);
                        font-size: 24px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        text-decoration: underline;
                        text-underline-offset: 8px;
                    }
                `}
            />
            <Row className='listCategoriesContent' justify={'center'} gutter={50}>
                    <Col style={{ color:'white' }}>
                            <Text id="all" className={`font-24 titleServicesCategory  ${catWorkSelected === 'all' ? 'catSelected' : 'text_white'}`}>
                                All projects
                            </Text>
                    </Col>
                {
                    services?.map((item, idx) => { 
                        return (<Col style={{ color:'white' }}>
                            <Text id={`${item?.key}`} className={`font-24 titleServicesCategory  ${catWorkSelected === item.key ? 'catSelected' : 'text_white'}`}>
                                {item.name}
                            </Text>
                        </Col>)
                        }
                    )
                }
            </Row>
        </>
    )
}

export default Categories