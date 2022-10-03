import Header from './components/Header'
import React, { useRef } from 'react';
import './Page.css'

function Page() {
      const top = useRef();
      const experience = useRef();
      const parcours = useRef();
      const loisir = useRef();
    return (
  
        <body>
            <Header top={top} loisir={loisir} experience={experience} parcours={parcours}/>
                <div className='part'>
                    <h1>Talk about me</h1>
                    <div className='container'>
                        <div className='right-container'>
                        <img src={'https://intra.epitech.eu/file/userprofil/commentview/eliot.martin.jpg'} alt='../public/pp.png' className='pict'/>
                        </div>

                        <div className='left-container'>
                            <p>21 ans21 ans21 ans21 ans21 ans21 ans21 ans21 ans21 ans21 ans21 ans21 ans</p>
                            <p>Dublin</p>
                            <p>Permis B</p>
                       
                        </div>
                    </div>
                </div>
                <div className='part'>
                    <h1>talk about experiences</h1>
                    <div className='container'>
                        <div className='left-container'>first</div>
                        <div className='right-container'>second</div>
                    </div>
                </div>
                <div className='part'>
                    <h1>talk about experiences</h1>
                    <div className='container'>
                        <div className='left-container'>first</div>
                        <div className='right-container'>second</div>
                    </div>
                </div>
                <div className='part'>
                    <h1>talk about parcours</h1>
                    <div className='container'>
                        <div className='left-container'>first</div>
                        <div className='right-container'>second</div>
                    </div>
                </div>
                <div className='part'>
                    <h1>talk about loisir</h1>
                    <div className='container'>
                        <div className='left-container'>first</div>
                        <div className='right-container'>second</div>
                    </div>
                </div>
        </body>

    )
}
export default Page