import React from 'react'

function Button() {
  return (
    <div className='container'>
        <button className='button button_primary'>Button</button>
        <button className='button button_secondary'>Button</button>
        <button className='button button_teritary'>Button</button>
        <button className='button button_small'>Button</button>
        <button className='button button_medium'>Button</button>
        <button className='button button_large'>Button</button>
        <button className='button disabled'>Button</button>
        <button className='button onclick'>Button</button>
        <button className='button button_primary button_medium'>Button</button>
        <button className='button button_secondary button_large'>Button</button>

    </div>
  )
}

export default Button

