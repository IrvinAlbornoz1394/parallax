import { Global, css } from '@emotion/react'
import React from 'react'
require ("./liquidText")

const Liquid = () => {

  return (
    <div>
        <Global 
            styles={css`
              
              ul {
                width: 100%;
                text-align: center;
                margin: 0;
                padding: 0;
                list-style: none;
                li {
                  margin: 0;
                  a {
                    font-family:  'Playfair Display', serif;
                    font-size: 48px;
                    font-weight: 900;
                    line-height: 1.2;
                    color: #6a8caf;
                    display: inline-block;
                    position: relative;
                    text-decoration: none;
                    
                    @media screen and (min-width: 768px) {
                      font-size: 64px;
                    }
                    
                    @media screen and (min-width: 1440px) {
                      font-size: 92px;
                    }
                    
                    
                    span {
                      // color: white;
                      color: transparent;
                      position: relative;
                      display: block;
                    }
                    canvas {
                      position: absolute;
                      top: -4px; // Line it up perfectly
                      left: 50%;
                      transform: translateX(-50%);
                      z-index: 2;
                      opacity: 1;
                    }
                  }
                }
              }
              
            `}
        />
        <ul>
  <li>
    <a href="#">
      <span>Home</span>
    </a>
  </li>
  <li>
    <a href="#">
      <span>Work</span>
    </a>
  </li>
  <li>
    <a href="#">
      <span>About</span>
    </a>
  </li>
  <li>
    <a href="#">
      <span>Contact</span>
    </a>
  </li>
</ul>

    </div>
  )
}

export default Liquid