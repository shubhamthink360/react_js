import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {

  const onClick = () =>{
    console.log("hello");
  }

  return (
      <>
    <header className='header'>
        <h1 style={headingStyle}>{title}</h1>
        <Button color="green" text="Add" onClick={onClick} />
    </header>    
    </>
  )
}

//CSS in JS
const headingStyle = {
  color: '#1f2146',
  backgroundColor: '#fafafa',
  fontSize:'16px',
  fontWeight:'none',
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