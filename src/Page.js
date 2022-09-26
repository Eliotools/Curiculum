import Header from './components/Header'
import React, { useRef } from 'react';
import './Page.css'

function Page() {
      const top = useRef();
      const info = useRef();
      const experience = useRef();
      const parcours = useRef();
      const loisir = useRef();
    return (
        <div>
            <Header top={top} loisir={loisir} info={info} experience={experience} parcours={parcours}/>
            <div className='Content'>
                <article>
                    <figure ref={top}>
                        <div>
                            <h1>1</h1>
                        </div>
                    </figure>
                    <section ref={info}>
                        <div>
                            <h1>2</h1>
                        </div>
                    </section>
                    <figure ref={experience}>
                        <div>
                            <h1>3</h1>
                        </div>
                        </figure>
                    <section ref={parcours}>
                        <div>
                            <h1>4</h1>
                        </div>
                    </section>
                    <figure ref={loisir}>
                        <div>
                            <h1>5</h1>
                        </div>
                    </figure>
                </article>
            </div>
        </div>

    )
}
export default Page