import React from 'react'

function navButton({content,color,textColor,fontSize,handleSection}) {
  return (
    <>
        <button onClick={handleSection} className='nav-button' style={{backgroundColor:color,color:textColor,fontSize:fontSize}}>{content}</button>
    </>
  )
}

export default navButton