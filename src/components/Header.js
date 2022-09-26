import './Header.css'

function Header({top, experience, parcours, loisir}) {
  return (
    <header className="Header">
      <div onClick={() => top.current.scrollIntoView()} >
        <h1 >ELIOT MARTIN</h1>
      </div>
      <div className="Header Container">
        <h1 className="Index" onClick={() => experience.current.scrollIntoView()}>Experience Pro</h1>
        <h1 className="Index" onClick={() => parcours.current.scrollIntoView()}>Parcours</h1>
        <h1 className="Index" onClick={() => loisir.current.scrollIntoView()}>Loisir</h1>
      </div>
    </header>
    
  )
  }
export default Header