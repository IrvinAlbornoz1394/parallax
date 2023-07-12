import React from 'react'

const TextDescription = ({currentProject, ...props}) => {
  return (
    <div>
        <div className='text-project-description'>
            <p style={{ marginBottom:40 }}>
                { currentProject?.name }
            </p>
            <p className='' style={{ textAlign:'justify' }}>
                <div dangerouslySetInnerHTML={{__html: currentProject?.description }} />
                {/* {
                    currentProject?.description.replace(/<[^>]+>/g, '')
                } */}
            </p>
        </div>
    </div>
  )
}

export default TextDescription