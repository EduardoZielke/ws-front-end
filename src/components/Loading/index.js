import React from 'react'
import './index.css'

function Loading({wrapperPx, loadingPx, borderPx}) {

  const wrapperStyle = {
    height: `${wrapperPx}px`
  }

  const loadingStyle = {
    width: `${loadingPx}px`,
    height: `${loadingPx}px`,
    border: `${borderPx}px solid #a4a4a4`,
    borderLeftColor: '#007bff'
  }

  return (
    <div className='container'>
      <div className='loading-wrapper' style={wrapperStyle}>
        <div className='loading' style={loadingStyle}></div>
      </div>
    </div>
  )
}

export default Loading
