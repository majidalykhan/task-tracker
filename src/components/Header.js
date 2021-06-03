import Button from './Button'


const Header = ({title}) => {
    return (
        <div>
            <header className="header">
                <h1>{title}</h1>
                <Button color='dodgerblue' text='Add'/>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
    paragraph: "Hello this is task tracker react app.",
}

// CSS in JS
// const headingStyle = {
//     color: 'blue',
//     backgroundColor:'lightblue',
// }

export default Header
