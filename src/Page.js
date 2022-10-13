import React from 'react';
import './Page.css'
import pp from './asset/pp.png'
import Language from './components/language'

function Page() {
    return (
        <div>
        <div className='Main-container'>
            <div className='Left-container'>
                <div className='Text-container'>
                    <h1 >ELIOT MARTIN</h1>
                        <div className='Text-container Flex-col'>
                            <h2>Full stack Developpment</h2>
                            <Language></Language>
                            <h2>Management</h2>
                        </div>
                    </div>
            </div>
            <div className='Right-container'>
                <div className='Flex-col Right-text-container '>
                    <p className='Info-node'>Eliot.martin@epitech.eu</p>
                    <p className='Info-node'>(+33)6.12.96.53.98</p>
                    <p className='Info-node'>Lille Paris</p>
                    <p className='Info-node'><a href='https://github.com/Eliotools' rel="noreferrer" target="_blank">Github</a></p>
                    <p className='Info-node'><a href='https://github.com/Eliotools' rel="noreferrer" target="_blank">LinkedIn</a></p>
                </div>
            <img src={pp} alt='PP' className='pict'/>

            </div>
        </div>

        <div className='Main-container'>
            <div className='Left-container'>
                <div className='Left-Text-Container'>
                    <h1 className='Title'>Experiences</h1>
                    <div className='Xp-container'>
                        <h2 className='Text'>Epitech Lille</h2>
                        <div className='Xp-container Text-container'>
                            <p className='Text'>Master d’expert en developpment.</p>
                            <p className='Text'>Apprentissage:</p>
                            <lu className='Text'>
                                <li>Gestion de projets : scrum / agile</li>
                                <li>C / C++ / React / Lips / Python ...</li>
                            </lu>
                        </div>
                    </div>
                    <div>
                        <h2 className='Text'>Décathlon</h2>
                        <div className='Xp-container Text-container'>
                        <p className='Text'>Diplome  d’IT management.</p>
                            <p className='Text'>Amélioration d’une App de gestion de maintenance</p>
                            <lu className='Text'>
                                <li>HTML / CSS</li>
                                <li>Google App Script</li>
                            </lu>
                        </div>
                    </div>
                    <div className='Xp-container'>
                        <h2 className='Text'>Technological University Dublin</h2>
                        <div className='Xp-container Text-container'>
                            <p className='Text'>Diplome  d’IT management.</p>
                            <p className='Text'>Amélioration d’une App de gestion de maintenance</p>
                            <lu className='Text'>
                                <li>Strategic Management</li>
                                <li>Project Management</li>
                                <li>Business Modeling</li>
                            </lu>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Right-container'>
            <div className='Left-Text-Container xp'>
                        <p className='Title'></p>
                        <div>
                            <h2 className='Text'>2024</h2>
                            <p className='Text'></p>
                        </div>
                        <div>
                            <h2 className='Text'>2022</h2>
                            <p className='Text'></p>
                        </div>
                        <div>
                            <h2 className='Text'>2022/2023</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page