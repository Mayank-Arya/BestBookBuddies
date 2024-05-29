import React from 'react'
import './CSS/Circle.css'

import atomic from './assets/atomic.svg'
import theme from './assets/themeSetUp.svg'
import components from './assets/components.svg'
import responsive from './assets/responsive.svg'
import customization from './assets/customisation.svg'
import iconSystem from './assets/iconSystem.svg'



function Circle () {
    return (
        <div className='mainDiv5'>
            <div className='leftdiv'></div>
            <div className='rightdiv'>
            <h1>Beautiful & consistant UI <br/> powered with React. </h1>
            <div>
            <div>
              <img src={atomic} />
              <h3>Atomic</h3>
              <p>Based on Atomic Design</p>
            </div>
            <div>
            <img src={theme} />
              <h3>Theme Setup</h3>
              <p>Auto updating <br/> colors and <br/> Styleguard.</p>
            </div>
            <div>
            <img src={components} />
              <h3>Components</h3>
              <p>Ever-increasing list of components</p>
            </div>
            <div>
            <img src={responsive} />
              <h3>Responsiveness</h3>
              <p>Build fully responsive structures easily.</p>
            </div>
            <div>
            <img src={customization} />
              <h3>Customisation</h3>
              <p>Multiple customisation to <br/> suit you style.</p>
            </div>
            <div>
            <img src={iconSystem} />
              <h3>Icom System</h3>
              <p>An inbuild icon system <br/> for faster development.</p>
            </div>
            </div>

            </div>
        </div>
    )
}



export default Circle