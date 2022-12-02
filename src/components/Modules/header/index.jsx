import React from 'react'
import '../../../styles/style.css'
import logo from '../../../assets/img/logo.jpg'

function header() {
  return (
    <>
        <div className='header-container'>
            <div className='header-box'>
                <img src={logo} alt="logo" width={150} height={150} />
                <h1 className='sida-title'>SIDA</h1>
                <div className='flex-end'>
                  <button className='btn-search'>recherche<i class="fa fa-trash" aria-hidden="true"></i></button>
                  <input type="password" placeholder='recherche...' className='input-search'/>
                 
                </div>
                
            </div>
        </div>
    </>
  )
}

export default header