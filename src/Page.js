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
                <div className='part' ref={top}>
                    <h1>Talk about me</h1>
                    <div className='container'>
                        <div className='left-container center'>
                        <img src={'https://intra.epitech.eu/file/userprofil/commentview/eliot.martin.jpg'} alt='../public/pp.png' className='pict'/>
                        </div>

                        <div className='right-container center'>
                            <div className='center'>
                                <p className='center'>21 ans</p>
                                <p className='center'>Dublin</p>
                                <p className='center'>Permis B</p>
                            </div>
                            <div className='border center'>
                            <h1>Qualité au travail</h1>
                                <div style={{display : 'flex'}} className='center'>
                                    <p className='center'>1</p>
                                    <p className='center'>2</p>
                                    <p className='center'>3</p>
                                </div>
                            </div>
                       
                        </div>
                    </div>
                </div>
                <div className='part' ref={experience}>
                    <h1>talk about experiences</h1>
                    <div className='container center'>
                        <div className='left-container center'>first</div>
                        <div className='right-container center'>second</div>
                    </div>
                </div>
                <div className='part' ref={parcours}>
                    <h1>talk about parcours</h1>
                    <div className='container center'>
                        <div className='left-container center'>first</div>
                        <div className='right-container center'>second</div>
                    </div>
                </div>
                <div className='part' ref={loisir}>
                    <h1>talk about loisir</h1>
                    <div className='container center'>
                        <div className='left-container center'>first</div>
                        <div className='right-container center'>second</div>
                    </div>
                </div>
        </body>

    )
}

export default Page