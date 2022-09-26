import Header from './components/Header'
import React, { useRef } from 'react';
import './Page.css'

function Page() {
      const top = useRef();
      const experience = useRef();
      const parcours = useRef();
      const loisir = useRef();
    return (
        <body src='' alt>
            <Header top={top} loisir={loisir} experience={experience} parcours={parcours}/>
            <div className='Content'>
                    <figure ref={top}>
                        <div>
                            <h1>Talk about me</h1>
                        </div>
                    </figure>
                    <section>
                        <div>
                            <h1>talk about experiences</h1>
                        </div>
                    </section>
                    <figure ref={experience}>
                        <div>
                            <h1>talk about experiences</h1>
                        </div>
                    </figure>
                    <section ref={parcours}>
                        <div>
                            <h1>talk about parcours</h1>
                        </div>
                    </section>
                    <figure ref={loisir}>
                        <div>
                            <h1>talk about loisir</h1>
                        </div>
                    </figure>
            </div>
        </body>

    )
}
export default Page