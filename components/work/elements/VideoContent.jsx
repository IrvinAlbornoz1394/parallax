import { Global, css } from '@emotion/react'
import { Col } from 'antd'
import React from 'react'
import { PlayCircleOutlined } from '@ant-design/icons'

const VideoContent = ({project, ...props}) => {
  return (
    <>
        <Global 
            styles={css`
                .overlayPlay{
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;    
                }
            `}
        />
        <Col span={24} style={{ position:'relative' }}>
            <img src={project?.video?.preview} className='img-100' />
            <div className='overlayPlay'>
                <PlayCircleOutlined style={{ fontSize:200 }} />
            </div>
        </Col>
    </>
  )
}

export default VideoContent