import { Col, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import Carousel_demo from './Carousel_demo';
import { Global, css } from '@emotion/react';
import { useSelector } from 'react-redux';
import {team} from '../../utils/Crew'
import { useRouter } from 'next/router';

const Crew = ({refLef, refRight, ...props}) => {

    const route = useRouter()
    const { Text } = Typography
    const hoverItemsCrew = useSelector((state) => state.web?.hoverItemsCrew)
    
    

  return (
    <>
    <Global styles={css`
    `} />
    <div className='hfull' id="section_Crew">
        <Row justify={'center'} className='row_crew'>
            <Col span={20 }>
                <Text className='titleCrew'>
                    _Crew
                </Text>
                <br/>
                <Text className='font-30 txt-white '>
                    Tu proyecto en las manos <span className='textYellow'>que lo elevan</span>.
                </Text>
                <Row justify={'center'}>
                    <Col span={17}>
                        <Carousel_demo refLef={refLef} refRight={refRight} />
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Crew