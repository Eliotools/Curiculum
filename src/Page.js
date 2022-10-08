import Header from './components/Header'
import React, { useRef } from 'react';
import './Page.css'
import pp from './asset/pp.png'
import Language from './components/language'

function Page() {
    return (
  
        <body>
            <div className='Main-container'>
                <div className='Sub-container'>
                    .
                    <div className='Text-container'>
                        <h1 className='Title'>ELIOT MARTIN</h1>
                        <p className='Text'>Developper</p>
                        <p className='Text'>Management</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p className='Text'>Full stack Developpment</p>
                        <Language></Language>
                        <p className='Sub-Text'>Python</p>

                    </div>
                </div>
                <div className='Side-container'>
                    <img src={pp} alt='PP' className='pict'/>
                </div>
            </div>
        </body>

    )
}

export default Page