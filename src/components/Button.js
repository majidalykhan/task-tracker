import propTypes from 'prop-types'

const Button = ({color,text}) => {
    return (
        <button className='btn' style={{backgroundColor:color}}>
            {text}
        </button>
    )
}


Button.defaultProps = {
    color: 'dodgerblue',
}

Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
}


export default Button
