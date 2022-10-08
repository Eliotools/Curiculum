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
                            <p className='Text'>Full stack Developpment</p>
                            <Language></Language>
                        </div>
                        <p className='Text'>Management</p>
                    </div>
                </div>
            </div>
            <div className='Side-container'>
                <img src={pp} alt='PP' className='pict'/>
            </div>
        </div>
            <div className='Main-container'>
                <div className='Sub-container'>
                    <div className='Text-container'>
                        <div className='Sub-Text-Container'>
                            <h1 className='Title'>Experiences</h1>
                            <div>
                                <h1 className='Text'>Epitech</h1>
                                <p className='Text'>Epitech</p>
                            </div>
                            <div>
                                <h1 className='Text'>Décathlon</h1>
                                <p className='Text'>Epitech</p>
                            </div>
                            <div>
                                <h1 className='Text'>Dublin</h1>
                                <p className='Text'>Epitech</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Side-container'>
                <div className='Sub-Text-Container xp'>
                            <p className='Title'></p>
                            <div>
                                <h1 className='Text'>2024</h1>
                                <p className='Text'></p>
                            </div>
                            <div>
                                <h1 className='Text'>2022</h1>
                                <p className='Text'></p>
                            </div>
                            <div>
                                <h1 className='Text'>2022/2023</h1>
                                <p className='Text'>Epitech</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Page