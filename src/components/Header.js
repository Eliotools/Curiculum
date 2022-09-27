import './Header.css'

function Header({top, experience, parcours, loisir}) {
  return (
    <div className="Header">
      <div className='Title' onClick={() => top.current.scrollIntoView()} >
        <p>ELIOT MARTIN</p>
      </div>
      <div className="Title-Container">
        <p className="Title" onClick={() => experience.current.scrollIntoView()}>Experience Pro</p>
        <p className="Title" onClick={() => parcours.current.scrollIntoView()}>Parcours</p>
        <p className="Title" onClick={() => loisir.current.scrollIntoView()}>Loisir</p>
      </div>
    </div>
    
  )
  }

export default Header