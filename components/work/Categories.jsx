import { Col, Row, Typography } from 'antd'
import React from 'react'


/* Components */
import ProjectList from './ProjectList'
import { Global, css } from '@emotion/react'
import { useSelector } from 'react-redux'

const Categories = () => {
    
    const catWorkSelected = useSelector((state) => state.web.catWorkSelected)
    const services = useSelector((state) => state.web?.services)

    console.log('services',services)

    const {Text, Title} = Typography
    return (
        <>
            <Global
                styles={css`
                    .listCategoriesContent{
                        margin-top: 100px;
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
                            <Text id="all" className={`font-24 titleServicesContent  ${!catWorkSelected ? 'catSelected' : 'text_white'}`}>
                                All projects
                            </Text>
                    </Col>
                {
                    services?.map((item, idx) => (
                         <Col style={{ color:'white' }}>
                            <Text id={`show_${item?.key}`} className={`font-24 titleServicesContent  ${catWorkSelected === item.key ? 'catSelected' : 'text_white'}`}>
                                {item.name}
                            </Text>
                        </Col>
                        )
                    )
                }
            </Row>
        </>
    )
}

export default Categories