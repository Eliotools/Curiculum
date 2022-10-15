import React from 'react';
import './Page.css'
import pp from './asset/pp.png'
import Language from './components/language'

function Page() {
    return (
        <div>
        <section className='Main-container'>
            <div className='Left-container'>
                <div className='Text-container'>
                    <h1>ELIOT MARTIN</h1>
                        <div className='Text-container Flex-col'>
                            <h2>Full stack Developpment</h2>
                            <Language></Language>
                            <h2>Management</h2>
                            <Language></Language>
                        </div>
                    </div>
            </div>
            <div className='Right-container'>
                <div className='Flex-col'>
                    <p className='Info-node'>Eliot.martin@epitech.eu</p>
                    <p className='Info-node'>(+33)6.12.96.53.98</p>
                    <p className='Info-node'>Lille Paris</p>
                    <p className='Info-node'><a href='https://github.com/Eliotools' rel="noreferrer" target="_blank">Github</a></p>
                    <p className='Info-node'><a href='https://github.com/Eliotools' rel="noreferrer" target="_blank">LinkedIn</a></p>
                </div>
            </div>
            <img src={pp} alt='PP' className='pict'/>
        </section>
        <section className='Main-container'>
            <div className='Left-container'>
                <div className='Text-container'>
                    <h1>Experiences</h1>
                    <div className='Text-container Flex-col' style={{height : '80%' }}>
                        <h2>Epitech Lille</h2>
                        <div className='Text-container'>
                            <p>Master d’expert en developpment.</p>
                            <p>Apprentissage:</p>
                            <lu>
                                <li>Gestion de projets : scrum / agile</li>
                                <li>C / C++ / React / Lips / Python ...</li>
                            </lu>
                        </div>
                        <h2>Décathlon</h2>
                        <div className='Text-container'>
                            <p>Diplome  d’IT management.</p>
                            <p>Amélioration d’une App de gestion de maintenance</p>
                            <lu>
                                <li>HTML / CSS</li>
                                <li>Google App Script</li>
                            </lu>
                        </div>
                        <h2>Décathlon</h2>
                        <div className='Text-container'>
                            <p>Diplome  d’IT management.</p>
                            <p>Amélioration d’une App de gestion de maintenance</p>
                            <lu>
                                <li>HTML / CSS</li>
                                <li>Google App Script</li>
                            </lu>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Right-container'>
                <div className='Flex-col' style={{height : '80%', alignContent : 'end'}}>
                    <div></div>
                    <h2 className='Date-node'>2024</h2>
                    <h2 className='Date-node'>2022</h2>
                    <h2 className='Date-node'>2022/2023</h2>
                </div>
            </div>
        </section>
    </div>
      )
}

export default Page