import python from '../asset/python.jpg'
import js from '../asset/js.jpeg'
import C from '../asset/C.jpeg'
import react from '../asset/react.jpeg'
import './language.css'

function Language () {
    return(
        <div className='Pict-container'>
            <div className='Pict-container-front'>
                <img src={react} alt='rect' className='Language'/>
            </div>
            <div className='Pict-container-back'>
                <img src={python} alt='python' className='Language'/>
                <img src={C} alt='C' className='Language'/>
                <img src={js} alt='JS' className='Language'/>
            </div>
        </div>
    )
}

export default Language