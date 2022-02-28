import PropTypes from 'prop-types'

const Button = ({text, color, onClick }) => {

  return <button type="button" onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>
}

Button.defaultProps = {
    text: "Button Text",
    color: "red",
 
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}
export default Button