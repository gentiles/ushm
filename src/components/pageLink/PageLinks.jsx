import { pageLink } from '../../data.jsx'
import PageLink from './PageLink.jsx'
const PageLinks = () => {
  return (
    <ul className="nav-links" id="nav-links">
      {pageLink.map((item) => {
        return <PageLink key={item.id} {...item} />
      })}
    </ul>
  )
}

export default PageLinks
