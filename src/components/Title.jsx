import PropTypes from 'prop-types'
const Title = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subtitle}</span>
      </h2>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
export default Title
