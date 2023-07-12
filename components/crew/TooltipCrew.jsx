import React from 'react'

const TooltipCrew = ({children, description, ...props}) => {
  return (
    <div className={`tooltip`}>
        {children}
          <div className={`tooltiptext`}>
            {description}
          </div>
      </div>
  )
}

export default TooltipCrew