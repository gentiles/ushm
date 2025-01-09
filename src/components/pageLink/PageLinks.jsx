import PropTypes from 'prop-types'
import { pageLink } from '../../data.jsx'
import PageLink from './PageLink.jsx'
const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLink.map((item) => {
        return <PageLink key={item.id} {...item} childClass={childClass} />
      })}
    </ul>
  )
}

PageLinks.propTypes = {
  parentClass: PropTypes.string.isRequired,
  childClass: PropTypes.string.isRequired,
}
export default PageLinks
