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
                    <p className='Info-node' >Eliot.martin@epitech.eu</p>
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
                    <h1>Experiences Technique</h1>
                    <div className='Text-container Flex-col' style={{height : '80%' }}>
                        <p className='xp'>
                            <h2>Epitech Lille</h2>
                            <div className='Text-container'>
                                Master d’expert en developpment.
                                <br/>
                                Apprentissage:
                                    <li className='xp'>Gestion de projets : scrum / agile</li>
                                    <li className='xp'>C / C++ / React / Lips / Python ...</li>
                            </div>
                        </p>
                        <p className='xp'>
                            <h2>Décathlon btwin village Lille</h2>
                            <div className='Text-container'>
                                Stage en alterance.
                                <br/>
                                Amélioration d’une App de gestion de maintenance
                                    <li className='xp'>HTML / CSS</li>
                                    <li className='xp'>Google App Script</li>
                            </div>
                        </p>
                        <p className='xp'>
                            <h2>Technological University Dublin</h2>
                            <div className='Text-container'>
                                Diplome  d’IT management.
                                <br/>
                                Cours 100% en angais
                                    <li className='xp'>Strategic & project Management</li>
                                    <li className='xp'>Business Modeling</li>
                            </div>
                        </p>
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
        <section className='Main-container'>
            <div className='Left-container'>
                <div className='Text-container'>
                    <h1>Experiences Associative</h1>
                    <div className='Text-container Flex-col' style={{height : '80%' }}>
                        <p className='xp'>
                            <h2>Respir@ction</h2>
                            <div className='Text-container'>
                            Hackathon avec l’afrpal sur 2 jours:
                                    <li className='xp'>Ideation d’un project autour de l’alergie</li>
                                    <li className='xp'>Marketing, User Experience, Maquette</li>
                            </div>
                        </p>
                        <p className='xp'>
                            <h2>Project Week Mugler</h2>
                            <div className='Text-container'>
                                Creation d’un système de fidelité pour la marque MUGLER durant 3 semaines.
                                    <li className='xp'>Gestion d’une équipe en remote</li>
                                    <li className='xp'>2ème place sur 42 équipes à travers la France</li>
                            </div>
                        </p>
                        <p className='xp'>
                            <h2>Solidays</h2>
                            <div className='Text-container'>
                                Partitipation au festival solidays avec l'afpral.
                                    <li className='xp'>Présence sur le village des association durant 3 jours</li>
                                    <li className='xp'>Mise en avant de l’association et animation sur le stand</li>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
            <div className='Right-container'>
                <div className='Flex-col' style={{alignContent : 'end', padding : '0 0 10px 0'}}>
                    <div></div>
                    <h2 className='Date-node'>2019</h2>
                    <h2 className='Date-node'>2021</h2>
                    <h2 className='Date-node'>2022</h2>
                </div>
            </div>
        </section>
    </div>
      )
}

export default Page