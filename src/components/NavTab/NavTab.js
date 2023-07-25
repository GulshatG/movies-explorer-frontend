import { Link } from 'react-router-dom'

function NavTab(){
  return(
    <div className='nav-tab'>
      <Link to="./" className="header__link-bottom">О проекте</Link>
      <Link to="./" className="header__link-bottom">Технологии</Link>
      <Link to="./" className="header__link-bottom">Студент</Link>
    </div>
  )
}
export default NavTab;
