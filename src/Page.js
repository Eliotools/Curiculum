import React from 'react';
import './Page.css'
import pp from './asset/pp.png'
import Language from './components/language'

function Page() {
    return (
        <div className='Main'>
            <section className='Main-container'>
                <div className='Left-container size-1-left'>
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
                <div className='Right-container size-1-right'>
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
                <div className='Left-container size-2-left'>
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
                <div className='Right-container size-2-right'>
                    <div className='Flex-col' style={{height : '80%', alignContent : 'end'}}>
                        <div></div>
                        <h2 className='Date-node'>2024</h2>
                        <h2 className='Date-node'>2022</h2>
                        <h2 className='Date-node'>2022/2023</h2>
                    </div>
                </div>
            </section>
            <section className='Main-container'>
                <div className='Left-container size-2-left'>
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
                <div className='Right-container size-2-right'>
                    <div className='Flex-col' style={{alignContent : 'end', padding : '0 0 10px 0'}}>
                        <div></div>
                        <h2 className='Date-node'>2019</h2>
                        <h2 className='Date-node'>2021</h2>
                        <h2 className='Date-node'>2022</h2>
                    </div>
                </div>
            </section>
            <section className='Main-container'>
                <div className='Left-container size-3-left'>
                    <div className='Flex-col' style={{alignContent : 'center', padding : '20vh 0 0 30%', justifyContent: 'space-between'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>

                    </div>
                </div>
                <div className='Right-container size-3-right'>
                <div className='Text-container'>
                        <h1>Loisir</h1>
                        <div className='Text-container Flex-col' style={{height : '80%' }}>
                            <p className='xp'>
                                <h2>Langues</h2>
                                <div className='Text-container Flex-row'>
                                    <p>
                                        angalais
                                        <li className='xp'>Niveau C1</li>
                                        <li className='xp'>TOEIC 800 points</li>
                                    </p>
                                    <p style={{padding: '0 0 0 100px'}}>
                                        Allemand
                                        <li className='xp'>Niveau B1</li>
                                        <li className='xp'>Apprentissage scolaire</li>
                                    </p>
                                </div>
                            </p>
                            <p className='xp'>
                                <h2>Sport</h2>
                                <div className='Text-container'>
                                    <li className='xp'>Course à pieds</li>
                                    <li className='xp'>Tennis</li>
                                    <li className='xp'>Basket</li>
                                </div>
                            </p>
                            <p className='xp'>
                                <h2>Occupation</h2>
                                <div className='Text-container'>
                                    <li className='xp'>Jeu de carte : Magic the Gathering</li>
                                    <li className='xp'>Jeu vidéo : Minecraft / Hearhstone</li>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      )
}

export default Page