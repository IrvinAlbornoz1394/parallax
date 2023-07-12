import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { Global, css } from '@emotion/react';

const Cursor = () => {

    


  return (
    <>
        <Global 
            styles={css`
                .ball{
                    width: 50px;
                    height: 50px;
                    position: fixed;
                    top: 0;
                    left: 0;
                    border: 3px solid dodgerblue;
                    border-radius: 50%;
                    pointer-events: none;
                }
            `}
        />
        <div className="ball"></div>
    </>
  )
}

export default Cursor