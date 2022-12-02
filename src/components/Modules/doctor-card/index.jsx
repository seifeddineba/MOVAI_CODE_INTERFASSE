import React from 'react'

function doctorCard({fullName,email,img}) {
  return (
    <>
         <div className='card-vertical'>
            <img src={img} alt="img1" width={250} height={250}/>
            <span className='fullname'>{fullName}</span>
            <div>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span className='name'>{email}</span>
            </div>
        </div>
    </>
  )
}

export default doctorCard