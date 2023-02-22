import React from 'react'
import "./cart.css"

const Cart = () => {
  return (
    <>
    
      <div className='header'>
        <div>
            <p>ENTERTAINMENT</p>
            <h1>Tata Play</h1>
            <p>online deal</p>
        </div>
        <div className='image_fix'>
        <div>
        <img src='https://img4.nbstatic.in/tr:w-500/61f3ec4b1e2731000bdc591c.jpg' alt='tala_play' className='tata_icon'/>
        </div>
        <div>
        <img src='https://img4.nbstatic.in/tr:w-500/61f3ec271e2731000bdc591b.jpg' alt='tala_play' className='tata_icon'/>

        </div>
        </div>
      </div>
      <section className='main-cart-section'>
      <div className='section-2'>
      <h1>Gifts Cards</h1>
      <p>just arrived</p>

      </div>
      <div className='cart-items'>
        <div className='cart-items-container'>
            <div className='items-info'>
            <div className='products'>
                <img src='https://img4.nbstatic.in/tr:w-500/61f3ec271e2731000bdc591b.jpg' alt='data-img' />
                
            </div>
            <div className='title'>
                <h1>Tata Play HD Box With Hindi Super Value SD Pack</h1>
                <p>Valid on:All days</p>
                <p>Timings:12 AM- 11.59PM</p>
                <button>Details</button>
            </div>
            <div className='add-minus-quanity'>
                
            </div>

            </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Cart