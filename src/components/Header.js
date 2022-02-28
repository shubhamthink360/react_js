import PropTypes from 'prop-types'
const Header = ({ title }) => {
  return (
      <>
    <header>
        <h1 style={headingStyle}>
            {title}
        </h1>
    </header>    
    </>
  )
}

//CSS in JS
const headingStyle = {
  color: '#1f2146',
  backgroundColor: '#fafafa',
}

//Default Props
Header.defaultProps = {
title: "Default Title",
}

//Prop Types
Header.propTypes ={
  title:PropTypes.string.isRequired,
}

export default Header