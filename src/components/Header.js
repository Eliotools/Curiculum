import './Header.css'

function Header({top, info, experience, parcours, loisir}) {
  return (
    <header className="Header">
      <div onClick={() => top.current.scrollIntoView()} >
        <h1 >ELIOT MARTIN</h1>
      </div>
      <div className="Header Container">
        <div className="Header Index" onClick={() => info.current.scrollIntoView()}>Info sur moi</div>
        <div className="Header Index" onClick={() => experience.current.scrollIntoView()}>Experience Pro</div>
        <div className="Header Index" onClick={() => parcours.current.scrollIntoView()}>Parcours</div>
        <div className="Header Index" onClick={() => loisir.current.scrollIntoView()}>Loisir</div>
      </div>
    </header>
    
  )
  }
export default Header