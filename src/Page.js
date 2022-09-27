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
            <section ref={top}>
                <div>
                    <h1>Talk about me</h1>
                    <div className='container'>
                        <div className='left-container'>
                            <p>21 ans</p>
                            <p>Dublin</p>
                            <p>Permis B</p>
                        </div>
                        <div className='right-container'>
                            <p>21 ans</p>
                            <p>Dublin</p>
                            <p>Permis B</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h1>talk about experiences</h1>
                    <div className='container'>
                        <div className='left-container'>first</div>
                        <div className='right-container'>second</div>
                    </div>
                </div>
            </section>
            <section ref={experience}>
                <div>
                    <h1>talk about experiences</h1>
                    <div className='container'>
                        <div className='left-container'>first</div>
                        <div className='right-container'>second</div>
                    </div>
                </div>
            </section>
            <section ref={parcours}>
                <div>
                    <h1>talk about parcours</h1>
                    <div className='container'>
                        <div className='left-container'>first</div>
                        <div className='right-container'>second</div>
                    </div>
                </div>
            </section>
            <section ref={loisir}>
                <div>
                    <h1>talk about loisir</h1>
                    <div className='container'>
                        <div className='left-container'>first</div>
                        <div className='right-container'>second</div>
                    </div>
                </div>
            </section>
        </body>

    )
}
export default Page