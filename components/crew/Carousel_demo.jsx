import { Global, css } from '@emotion/react';
import { useSelector } from 'react-redux';
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CrewItem from './CrewItem';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const Carousel_demo = ({refLef, refRight, ...props}) => {
  const hoverArrowL = useSelector((state) => state.web.hoverArrowL)

  /* if(hoverArrowL === true){
    document.addEventListener('click', clickArrowLeft);  
  } */

  const CustomRightArrow = ({ onClick, ...rest }) => {
      const {
        onMove,
        carouselState: { currentSlide, deviceType }
      } = rest;
      return <img ref={refRight} id="arrow_right" src='/images/Arrow_right.png' className='right_arrow_carousel' onClick={() => onClick()} />
  };
    
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
      return <img ref={refLef} id="arrow_left" src='/images/Arrow_left.svg' className='left_arrow_carousel' onClick={() => onClick()} />
  };

  return (
    <>
    <Global 
      styles={css`
        .react-multi-carousel-item {
          padding: 5px 10px;
        }
        .react-multi-carousel-list{
          padding-top:80px;
        }
      `}
    />
    <Carousel
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        swipeable={false}
        draggable={false}
        /* showDots={true} */
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        /* autoPlay={this.props.deviceType !== "mobile" ? true : false} */
        /* autoPlaySpeed={1000} */
        /* keyBoardControl={true} */
        /* customTransition="all .5" */
        transitionDuration={500}
        /* containerClass="carousel-container" */
        /* removeArrowOnDeviceType={["tablet", "mobile"]} */
        /* deviceType={this.props.deviceType} */
        /* dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" */
    >
        <CrewItem name={'Alex Lara'} key_id="alex" description={'Founder & Senior'} img={'/images/crew/alex_avatar.png'} />
        <CrewItem name={'Angie Braga'} key_id="angie" description={'Founder & Senior'} img={'/images/crew/angie_avatar.png'} />
        <CrewItem name={'Sakre Saenz'} key_id="sakre" description={'Founder & Senior'} img={'/images/crew/sakre_avatar.png'} />
    </Carousel>
    </>
  )
}

export default Carousel_demo