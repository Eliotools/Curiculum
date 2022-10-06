import Header from './components/Header'
import React, { useRef } from 'react';
import './Page.css'

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
                    </div>
                </div>
                <div className='Side-container'>
                    <img src={'https://intra.epitech.eu/file/userprofil/commentview/eliot.martin.jpg'} alt='../public/pp.png' className='pict'/>
                </div>
            </div>
        </body>

    )
}

export default Page