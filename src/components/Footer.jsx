import { socialLinks } from '../data'
import PageLinks from './pageLink/PageLinks'
import SocialLink from './socialLink/SocialLink'

const Footer = () => {
  const d = new Date()
  let year = d.getFullYear()
  return (
    <footer className="section footer">
      <PageLinks parentClass={'footer-links'} childClass={'footer-link'} />

      <ul className="footer-icons">
        {socialLinks.map((item) => {
          // const { id, href, icon } = item
          return <SocialLink key={item.id} {...item} />
        })}
      </ul>
      <p className="copyright">
        copyright &copy; USHealthmark BPO Company
        <span id="date"></span> all rights reserved {year}
      </p>
    </footer>
  )
}

export default Footer
