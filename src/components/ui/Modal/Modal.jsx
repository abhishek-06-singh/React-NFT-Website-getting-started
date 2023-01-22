

import React from 'react'
import './modal.css'

const Modal = ({setShowModal}) => {
  return (
  <div className="modal__wrapper" onClick={()=> setShowModal(false)}>
       <div className="single__modal">
   <span className="close__model"><i class="ri-fingerprint-fill"></i></span>
        <h6 className='text-center'>Place a Bid</h6>
        <p className='text-center'>You must Bid at least <span>5.89 ETH</span></p>

        <div className="input__item">
            <input type="number"  className='money'placeholder='00 : 00 ETH'/>
        </div>
        <div className="input__item">
            <h6>Enter Quantity , 7 available</h6>
            <input type="number" className='money' placeholder='00 : 00 ETH'/>
        </div>
        <div className="d-flex align-items-center justify-content-between">
            <p>You must Bid at least</p>
            <span>5.89 ETH</span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
            <p>Service Fee</p>
            <span>0.89 ETH</span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
            <p>Total Bid Amount</p>
            <span>5.89 ETH</span>
        </div>
        <button className="place__bid-btn">
            Place a Bid
        </button>
       </div>
  </div>
  )
}


export default Modal;