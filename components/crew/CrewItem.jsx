import React, { useEffect } from 'react'
import { Global, css } from '@emotion/react'
import { Button, Typography } from 'antd'
import TooltipCrew from './TooltipCrew';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';
import Image from 'next/image';


const CrewItem = ({img, name = null, description = null, ...props}) => {

    const hoverItemsCrew = useSelector((state) => state.web?.hoverItemsCrew)
    const cursorPointer = useSelector((state) => state.web?.cursorPointer)

    const { Text } = Typography

    useEffect(() => {
        for (const [key, value] of Object.entries(hoverItemsCrew)) {
            if(value == true){  
                gsap.to(`div#${key}`, { background: 'var(--primary)'});
                gsap.to(`div#${key} .tooltipCrew`, {visibility: 'visible', opacity: 1, duration: "0.3s" });
                gsap.to(`div#${key} .name-avatar`, { color: "black" });
                gsap.to(`div#${key} .small-description-crew`, { color: "black" });
                gsap.to(`div#${key} .btn-about-me`, { background: 'black', color: 'var(--primary)', border:'none' });
            }else{
                gsap.to(`div#${key}`, { background: 'none'});
                gsap.to(`div#${key} .tooltipCrew`, { opacity: 0, duration: "0.3s"});
                gsap.to(`div#${key} .name-avatar`, { color: "white" });
                gsap.to(`div#${key} .small-description-crew`, { color: "white" });
                gsap.to(`div#${key} .btn-about-me`, { background: 'white', color: 'black', border:'none' });
            }  
        }
    }, [hoverItemsCrew])


  return (
    <>
        <Global 
            styles={css`
                .border-card-crew{
                    justify-content: center;
                    border: solid 1px #FFFFFF;
                    height: 100%;
                    text-align: center;
                    padding-bottom:30px;
                    padding-top:30px;
                    display:flex;
                    
                }
                .img-avatar{
                    width: 40%;
                }
                .name-avatar{
                    font-size: 24px;
                    color: #FFFFFF;
                }
                .small-description-crew{
                    color: #FFFFFF;
                }
                .btn-about-me{
                    padding-left: 50px;
                    padding-right: 50px;
                    height: 50px;
                    margin-top:15px;
                    border-radius: 3px;
                    font-size: 16px;
                    transition: 0.3s;
                    border: none !important;
                }
                .content-item-carrousel{
                    width: 100%;
                    margin-top: auto;
                }
                .tooltipCrew{
                    position:absolute;
                    width: 85%;
                    background: var(--primary);
                    top:-55px;
                    padding: 8px 5px;
                    visivility: hidden;
                    opacity: 0;
                    transition: opacity 0.3s;

                }
            `}
        />
        <div className='border-card-crew' id={props.key_id}>
            <div className='tooltipCrew textBold'>
                I want to believe &#128509;	

            </div>
            <div className='content-item-carrousel'>
                <Image src={img} alt="" className='img-avatar' />
                <br />
                <Text className="name-avatar textBold">
                    {name}
                </Text>
                <br />
                <small className='small-description-crew font-18'>
                    {description}
                </small>
                <br />
                <Button className='btn-about-me btn-bold'>
                    Conóceme
                </Button>
            </div>
        </div>
    </>
  )
}

export default CrewItem