import python from '../asset/python.jpg'
import './language.css'

function Language () {
    return(
        <div className='Pict-container'>
            <div className='Pict-container-front'>
                <img src={python} alt='python' className='Language'/>
                <img src={python} alt='python' className='Language'/>
            </div>
            <div className='Pict-container-back'>
                <img src={python} alt='python' className='Language'/>
                <img src={python} alt='python' className='Language'/>
                <img src={python} alt='python' className='Language'/>
            </div>
        </div>
    )
}

export default Language