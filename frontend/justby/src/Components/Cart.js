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
      <section>
        <h1>cart page</h1>
      </section>
    </>
  )
}

export default Cart