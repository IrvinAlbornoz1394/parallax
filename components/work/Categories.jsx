import { Col, Row, Typography } from 'antd'
import React from 'react'

/* Components */
import ProjectList from './ProjectList'
import { Global, css } from '@emotion/react'

const Categories = () => {
    const {Text, Title} = Typography
    return (
        <>
            <Global
                styles={css`
                    .listCategoriesContent{
                        margin-top: 100px;
                    }
                `}
            />
            <Row className='listCategoriesContent' justify={'center'} gutter={50}>
                <Col style={{ color:'white' }}>
                    <Text className="font-30 text_white">
                        All projects
                    </Text>
                </Col>
                <Col style={{ color:'white' }}>
                    <Text className="font-30 text_white">
                        Design UX/UI
                    </Text>
                </Col>
                <Col style={{ color:'white' }}>
                    <Text className="font-30 text_white">
                        Brand strategy
                    </Text>
                </Col>
                <Col style={{ color:'white' }}>
                    <Text className="font-30 text_white">
                        Motion Design
                    </Text>
                </Col>
            </Row>
        </>
    )
}

export default Categories