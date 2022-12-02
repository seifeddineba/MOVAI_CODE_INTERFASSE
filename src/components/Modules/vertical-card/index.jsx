import React from 'react'
import Paragraph from '../paragraph'

function verticalCard({paragraph,imgW,imgH,color,bgColor,img}) {
  return (
    <>
        <div className='card-vertical'>
            <img src={img} alt="img1" width={imgW} height={imgH}/>
            <Paragraph paragraph={paragraph} color={color} bgColor={bgColor}/>
        </div>
    </>
  )
}

export default verticalCard