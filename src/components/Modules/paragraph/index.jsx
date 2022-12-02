import React from 'react'
import '../../../styles/style.css'

function paragraph({paragraph,color,bgColor}) {
  return (
    <>
        <p className='paragraph' style={{color:color?color:'#000',background:bgColor?bgColor:"none"}}>{paragraph}</p>
    </>
  )
}

export default paragraph