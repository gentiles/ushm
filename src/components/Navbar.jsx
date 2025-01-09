import logo from '../images/logoPng.png'
import PageLinks from './pageLink/PageLinks'
import { socialLinks } from '../data'
import SocialLink from '../components/socialLink/SocialLink'

const Navbar = () => {
  // const navBtn = document.getElementById('nav-toggle')
  const links = document.getElementById('nav-links')
  const handleClick = () => {
    return links.classList.toggle('show-links')
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="ushealtmark" />
          <button
            onClick={handleClick}
            type="button"
            className="nav-toggle"
            id="nav-toggle"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* { <!-- left this comment on purpose -->} */}
        <PageLinks parentClass={'nav-links'} childClass={'nav-link'} />
        {/* <SocialLink parentClass="nav-icons" /> */}

        <ul className="nav-icons">
          {socialLinks.map((item) => {
            const { id, href, icon } = item

            return <SocialLink key={id} href={href} icon={icon} />
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
