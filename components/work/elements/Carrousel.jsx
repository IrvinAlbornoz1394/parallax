import { Global, css } from '@emotion/react';
import { Col } from 'antd';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carrousel = ({gallery = []}) => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <>
        <Global 
            styles={css`
                .carousel-item-padding{
                    padding-left:5px;
                    padding-right: 5px;
                }
            `}
        />
        <Carousel responsive={responsive} infinite={true}   itemClass="carousel-item-padding">
            {
                gallery?.map((image, idx) => (
                    <img src={image?.url} className='img-100' />
                    )
                )
            }
        </Carousel>
    </>
    )
}

export default Carrousel