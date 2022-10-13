import React from 'react';
import './Page.css'
import pp from './asset/pp.png'
import Language from './components/language'

function Page() {
    return (
        <div>
        <div className='Main-container'>
            <div className='Sub-container'>
                <div className='Text-container'>
                    <div className='Sub-Text-Container'>
                    <h1 className='Title'>ELIOT MARTIN</h1>
                        <div>
                            <h2 className='Text'>Full stack Developpment</h2>
                            <Language></Language>
                        </div>
                        <h2 className='Text'>Management</h2>
                    </div>
                </div>
            </div>
            <div className='Side-container'>
            <img src={pp} alt='PP' className='pict'/>
                <div className='Side-text-container'>
                    <p className='Side-text'>Eliot.martin@epitech.eu</p>
                    <p className='Side-text'>(+33)6.12.96.53.98</p>
                    <p className='Side-text'>Lille Paris</p>
                    <p className='Side-text'><a href='https://github.com/Eliotools' rel="noreferrer" target="_blank">Github</a></p>
                    <p className='Side-text'><a href='https://github.com/Eliotools' rel="noreferrer" target="_blank">LinkedIn</a></p>
                </div>
            </div>
        </div>
            <div className='Main-container'>
                <div className='Sub-container'>
                    <div className='Text-container'>
                        <div className='Sub-Text-Container'>
                            <h1 className='Title'>Experiences</h1>
                            <div>
                                <h2 className='Text'>Epitech Lille</h2>
                                <p className='Text'>Epitech</p>
                            </div>
                            <div>
                                <h2 className='Text'>Décathlon</h2>
                                <p className='Text'>Epitech</p>
                            </div>
                            <div>
                                <h2 className='Text'>Dublin</h2>
                                <p className='Text'>Epitech</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Side-container'>
                <div className='Sub-Text-Container xp'>
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