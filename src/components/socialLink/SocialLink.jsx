import PropTypes from 'prop-types'
const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="nav-icon"
      rel="noopener noreferrer"
    >
      <i className={icon}></i>
    </a>
  )
}

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default SocialLink
