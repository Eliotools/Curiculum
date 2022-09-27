import './Header.css'

function Header({top, experience, parcours, loisir}) {
  return (
    <div className="Header">
      <div className='Title' onClick={() => top.current.scrollIntoView()} >
        <div>ELIOT MARTIN</div>
      </div>
      <div className="Title-Container">
        <div className="Title" onClick={() => experience.current.scrollIntoView()}>Experience Pro</div>
        <div className="Title" onClick={() => parcours.current.scrollIntoView()}>Parcours</div>
        <div className="Title" onClick={() => loisir.current.scrollIntoView()}>Loisir</div>
      </div>
    </div>
    
  )
  }

export default Header