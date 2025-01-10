import PropTypes from 'prop-types'
import { pageLink } from '../../data.jsx'
import PageLink from './PageLink.jsx'
const PageLinks = ({ parentClass, childClass, isToggle }) => {
  // return (
  //   <ul className={parentClass} id="nav-links">
  //     {pageLink.map((item) => {
  //       return <PageLink key={item.id} {...item} childClass={childClass} />
  //     })}
  //   </ul>
  // )
  return (
    <>
      {isToggle ? (
        <ul className={parentClass} id="nav-links">
          {pageLink.map((item) => (
            <PageLink key={item.id} {...item} childClass={childClass} />
          ))}
        </ul>
      ) : (
        <ul className="show-links" id="nav-links">
          {pageLink.map((item) => (
            <PageLink key={item.id} {...item} childClass={childClass} />
          ))}
        </ul>
      )}
    </>
  )
}

PageLinks.propTypes = {
  parentClass: PropTypes.string.isRequired,
  childClass: PropTypes.string.isRequired,
  isToggle: PropTypes.bool.isRequired,
}
export default PageLinks
