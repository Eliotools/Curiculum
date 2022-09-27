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
            <div className='Content'>
                    <section ref={top}>
                        <div>
                            <h1>Talk about me</h1>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h1>talk about experiences</h1>
                        </div>
                    </section>
                    <section ref={experience}>
                        <div>
                            <h1>talk about experiences</h1>
                        </div>
                    </section>
                    <section ref={parcours}>
                        <div>
                            <h1>talk about parcours</h1>
                        </div>
                    </section>
                    <section ref={loisir}>
                        <div>
                            <h1>talk about loisir</h1>
                        </div>
                    </section>
            </div>
        </body>

    )
}
export default Page